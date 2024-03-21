<template>
  <el-cascader :options="areaData" :props="{ lazy: true, lazyLoad: loadCascaderOptions }"></el-cascader>
</template>

<script>
import axios from '@/api/axios.js';
export default {
  data() {
    return {
      areaData: [], // 初始化顶级地区数据
      selectedAddress: [], // 选中的地址ID数组
    };
  },
  
  methods: {
    /**

     * 加载下级地区的异步方法
     * @param {Object} treeNode - 当前节点信息
     * @param {Function} callback - 加载完成后的回调函数
     */
    async loadCascaderOptions (treeNode, callback) {
   console.log(treeNode);
   console.log(callback);
      const response = await axios.get(`getAddress/area/get?fid=${treeNode.fid}`);
      console.log(response.data);
      // 处理API响应数据
     

      // 通知Cascader组件数据加载完成
      // callback(subAreas);
    },

    /**
     * 初始化顶级地区数据
     */
    async initTopLevelAreas() {
      try {
        const topLevelResponse = await axios.get(`getAddress/area/get?fid=4744`);
        this.areaData = topLevelResponse.data.map(area => ({
          value: area.id,
          label: area.name,
          sub_areas: []
        }));
        console.log(this.areaData );
      } catch (error) {
        console.error('初始化顶级地区数据时出错:', error);
      }
    },
  },
  
  async created() {
    await this.initTopLevelAreas(); // 组件创建时初始化顶级地区数据
  },
};
</script>