<template>
  <!-- 使用Element UI的Cascader组件 -->
  <el-cascader
    ref="cascader"
    :options="areaOptions"
    :props="{ value: 'id', label: 'name', children: 'sub_areas' }"
    lazy
    :lazy-load="loadSubAreas"
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
      areaOptions: [], // 存储地区数据
      selectedAreas: [], // 保存用户选择的地区ID数组
      fetching: false, // 是否正在加载数据标志
      fetchedIds: new Set(), // 记录已加载过的地区ID集合
    };
  },
  
  async created() {
    // 初始化时获取顶级地区
    await this.fetchTopLevelAreas();
  },

  methods: {
    /**
     * 获取顶级地区数据
     */
    async fetchTopLevelAreas() {
      try {
        this.fetching = true;
        const response = await axios.get('/getAddress/area/get?fid=4744'); // 获取根节点地区数据
     
        this.areaOptions = response.data.map(area => ({
          id: area.id,
          name: area.name,
         
        }));
        this.fetching = false;
      } catch (error) {
        console.error('获取顶级地区数据失败：', error);
        this.fetching = false;
      }
    },

    /**
     * 动态加载下级地区
     * @param {Object} treeNode - 当前节点对象
     * @param {Function} resolve - 加载成功后的回调函数
     */
    async loadSubAreas(treeNode, resolve) {
      const fid = treeNode.node.fid; // 获取当前节点的父ID
      if (!fid || this.fetchedIds.has(fid)) return; // 如果没有父ID或已加载过，则不重复请求

      try {
        this.fetching = true;
        const response = await axios.get(`https://fts.jd.com/area/get?fid=${fid}`); // 根据父ID获取下级地区
        const subAreas = response.data.sub_areas.map(area => ({
          id: area.id,
          name: area.name,
          sub_areas: [] // 保持递归结构
        }));
        this.fetchedIds.add(fid); // 记录已加载过的地区ID

        // 将下级地区数据追加到当前节点的子节点中
        const parentNode = this.areaOptions.find(option => option.id === fid);
        if (parentNode) {
          parentNode.sub_areas = subAreas;
        }

        // 告诉Cascader组件数据已加载完成
        resolve(subAreas);
        this.fetching = false;
      } catch (error) {
        console.error('加载下级地区数据失败：', error);
        this.fetching = false;
      }
    },

    /**
     * 地区选择变化的处理函数
     * @param {Array} values - 用户选择的地区ID数组
     */
    onAreaChange(values) {
      console.log('地区选择已变更：', values);
      // 在这里可以执行其他操作，如保存选择结果、进一步请求详细数据等
    
    },
  },
};
</script>