<!-- 父组件模板部分 -->
<template>
  <div>
    <!-- 使用 el-cascader 组件，并通过 props 特性传递配置 -->
    <el-cascader :options="options" :props="props"></el-cascader>
  </div>
</template>

<script>
// 导出父组件
export default {
  // 初始化数据状态，这里只包含一个计数器 id
  data() {
    return {
      options: [],
      props:{ lazy: true,loadNodes:this.loadNodes}
    };
  },

  // 定义一个方法 loadNodes，用于动态加载级联菜单的数据
  methods: {
    loadNodes(node, resolve) {
      // 获取当前节点的层级信息
      const { level } = node;

      // 模拟异步加载数据，延迟 1 秒后执行回调
      setTimeout(() => {
        // 根据层级生成虚拟子节点数据
        const nodes = Array.from({ length: level + 1 })
          .map(item => ({
            // 每个节点的值递增 id
            value: ++this.id,
            // 节点的标签内容为 "选项" 加上对应的 id
            label: `选项${this.id}`,
            // 当层级大于等于2时设置为叶子节点（无子节点）
            leaf: level >= 2
          }));
       
          console.log(this);
        // 通过 resolve 函数将加载好的子节点数据返回给 el-cascader 组件
        resolve(nodes);
        
      }, 1000);
    }
  },

  // 定义一个计算属性 cascaderProps，它将用于配置 el-cascader 组件
  computed: {
    cascaderProps() {
    
    }
  }
};
</script>