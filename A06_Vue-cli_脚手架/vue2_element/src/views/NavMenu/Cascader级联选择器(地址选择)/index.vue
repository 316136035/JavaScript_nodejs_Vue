<template>
  <div>
 <!-- 使用Element UI的Cascader组件 -->
 <el-cascader
    v-model="selectedArea"
    :options="provinces"
    :props="{ lazy: true, lazyLoad: lazyLoad }"
    placeholder="请选择省市区"
  ></el-cascader>
  <el-button type="primary" @click="getAllAddress">获取选中省市区</el-button>
  </div>
 
</template>

<script>
import axios from 'axios'; // 引入axios用于HTTP请求

export default {
  data() {
    return {
      selectedArea: [], // 当前选中的省市区数组
      provinces: [], // 存储顶级（省级）数据
      cacheData:[] // 存储已经加载过的数据，避免重复加载
    };
  },
  methods: {
    /**
     * 加载子级区域数据的方法，由Cascader组件调用
     * @param {object} node 父级节点信息
     * @param {function} resolve 回调函数，用来传递子级区域数据
     */
    async lazyLoad(node, resolve) {
       if (!node.value|| this.cacheData.includes(node.value)) { 
        
        return}
     
      const parentId = node.value; // 获取当前父级ID
      const response = await axios.get(`/getAddress/area/get?fid=${parentId}`);
      if (!response.data) { return}
      const children = response.data.map(item => ({
        value: item.id,
        label: item.name,
        pid: parentId
      }));

      // 在原始数据中找到当前父级节点，并将其子级数据添加进去
      const parentNode = this.provinces.find(province => province.value === parentId);
      if (parentNode && !parentNode.children) {
        parentNode.children = [];
      }
      if (parentNode && parentNode.children) {
        parentNode.children.push(...children);
    
      }
      this.cacheData.push(parentId)

      resolve(children); // 将子级数据传递给Cascader组件
    },

    /**
     * 在组件初始化时加载顶级区域数据
     */
    async fetchProvinces() {
      const response = await axios.get(`/getAddress/area/get?fid=4744`);
      this.provinces = response.data.map(item => ({
        value: item.id,
        label: item.name,
        children: [], // 初始化顶级区域的children为空数组
       
      }));
      this.cacheData.push(477)

      
    },
    getAllAddress(){
    console.log(this.selectedArea)
    console.log(this.provinces)
    console.log(this.cacheData)
  },
  },
  created() {
    this.fetchProvinces(); // 页面加载时触发获取省级数据
  },

  mounted() {
    
  },

};
</script>