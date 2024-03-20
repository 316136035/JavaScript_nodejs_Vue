<template>
  <el-cascader  :options="options"  
  :props="{ value: 'id', label: 'name', children: 'children' }" 
  lazy 
  :lazy-load="loadAreas">
  </el-cascader>
</template>



<script>
import axios from "axios";
let id = 0;

export default {
  data() {
    return {
      options: [],
    };
  },
  methods: {
    loadAreas(){},



    /**
     * 初始化顶级地区数据
     */
    async initTopLevelAreas() {
      try {
        const topLevelResponse = await axios.get(
          "/getAddress/area/get?fid=4744"
        );
        this.options= topLevelResponse.data.map((item) => ({
          pid: 4744,
          value: item.id,
          name: item.name,
          children: [],
        }) );
       
      } catch (error) {
        console.error("初始化顶级地区数据时出错:", error);
      }
    },
  },
  async created() {
    await this.initTopLevelAreas(); // 组件创建时初始化顶级地区数据
  },
};
</script>