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
import axios from "axios"; // 引入axios库以进行HTTP请求

export default {
  data() {
    return {
      selectedArea: [], // 当前选中的省市区数组
      provinces: [], // 存储顶级（省级）数据
      areas: {}, // 使用对象作为缓存，键为父级ID，值为子级数据数组
      loadedParentIds: [], // 存储已经加载过的父级ID列表，用于避免重复加载
      defaultSelectedArea: [4744, 5001, 5002], // 假设这是默认需要选中的省市区ID序列
    };
  },
  methods: {
    /**
     * 钩子方法，异步加载子级区域数据，由Cascader组件调用
     * @param {object} node - 父级节点信息对象
     * @param {function} resolve - 回调函数，用于向Cascader组件传递子级区域数据
     */
    async lazyLoad(node, resolve) {
      const parentId = node.value;
      if (!node.value) {
        return;
      }
      // 检查该父级ID是否已加载过子级数据
      if (this.loadedParentIds.includes(parentId)) {
        // 如果已加载过，则直接从缓存中获取子级数据并返回
        const cachedChildren = this.areas[parentId];
        if (cachedChildren) {
          resolve(cachedChildren);
          return;
        }
      }

      // 如果未加载过，则通过API请求获取子级区域数据
      const response = await axios.get(`/getAddress/area/get?fid=${parentId}`);

      // 检查响应数据是否存在
      if (!response.data || response.data.length === 0) {
        resolve([]);
        return;
      }

      // 处理并转换获取到的子级区域数据
      const children = response.data.map((item) => ({
        value: item.id,
        label: item.name,
        pid: parentId,
      }));

      // 更新原始数据集（省份数据），为其添加子级数据
      const parentNode = this.provinces.find(
        (province) => province.value === parentId
      );
      if (parentNode) {
        parentNode.children = children;
      }

      // 将加载的子级数据添加到缓存中
      this.areas[parentId] = children;
      this.loadedParentIds.push(parentId);

      // 将子级数据传递给Cascader组件
      resolve(children);
    },

    /**
     * 组件初始化时加载顶级区域（省份）数据
     */
    async fetchProvinces() {
      const response = await axios.get(`/getAddress/area/get?fid=4744`);
      // 转换并设置顶级区域数据
      this.provinces = response.data.map((item) => ({
        value: item.id,
        label: item.name,
        children: [], // 初始化顶级区域的children属性为空数组
      }));
    },

    /**
     * 获取并打印选中的省市区
     */
    getAllAddress() {
      console.log("当前选中的省市区:", this.selectedArea);
      console.log("所有的省份数据:", this.provinces);
      console.log("已加载并缓存的子级区域数据:", this.areas);
    },
  },
  created() {
    this.fetchProvinces(); // 组件创建后立即加载省级数据
  },
  mounted() {},
};
</script>