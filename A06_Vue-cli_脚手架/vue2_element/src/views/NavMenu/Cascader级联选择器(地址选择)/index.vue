<template>
  <el-cascader
    ref="cascader"
    :options="areaOptions"
    :props="{ value: 'id', label: 'name', children: 'children',lazyLoad:'loadAreas'}"
    lazy
    lazyLoad="loadAreas"
    placeholder="请选择地区"
    v-model="selectedAreas"
    @change="onAreaChange"
  ></el-cascader>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      areaOptions: [], // 初始地区数据
      selectedAreas: [], // 当前选中的地区ID
    };
  },
  
  methods: {
    
    /**
     * 加载下级地区的异步方法，与Cascader组件的lazy-load属性配合使用
     * @param {Object} treeNode - 当前节点信息
     * @param {Function} callback - 加载完成后的回调函数
     */
    async lazyLoad(treeNode, callback) {
      console.log('加载下级地区：', treeNode);
      const fid = treeNode.node.fid; // 获取父节点的ID
      const response = await axios.get(`/getAddress/area/get?fid=${fid}`);

      // 将响应数据转换为Cascader组件所需的格式
      const subAreas = response.data.children.map(area => ({
        value: area.id,
        name: area.name,
        children: [] // 注意：这里依然需要一个空数组，因为Cascader组件需要知道这是一个有子项的节点
      }));

      // 调用回调函数，传入子地区数据
      callback(subAreas);
    },

    /**
     * 选择地区发生改变时的处理方法
     * @param {Array} values - 用户选择的地区ID数组
     */
    onAreaChange(values) {
      console.log('地区选择已变更：', values);
      // 在这里可以执行其他操作，比如保存选择、进一步请求详细数据等
    },
    
    // 初始化时获取顶级地区数据
    async fetchTopLevelAreas() {
      const topLevelResponse = await axios.get('/getAddress/area/get?fid=4744');
    console.log(topLevelResponse);
      this.areaOptions = topLevelResponse.data.map(area => ({
        value: area.id,
        name: area.name,
        children :[]
      }));
    },
  },
  
  async created() {
    await this.fetchTopLevelAreas();
  },
};
</script>