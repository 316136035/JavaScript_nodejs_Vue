<template>
  <div>
    <!--:data="tableData" 是Vue的绑定指令语法，它意味着表格的数据源将来源于组件内部定义的一个名为 tableData 的属性或变量。  -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="sku" width="180">
        <!-- 创建作用域插槽 -->
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.sku }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品名称" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="下单金额" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.orderAmount }}</span>
        </template>
      </el-table-column>

      <el-table-column label="数量" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.quantity }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit('edit', scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-button type="success" @click="handleEdit('add')">成功按钮</el-button>
    <!-- 这个页面用于编辑数据-->
    <!-- 添加一个el-container来包裹表单并实现居中 -->
    <el-container>
      <el-form label-width="100px" v-show="isShowForm">
        <div>{{ title }}</div>
        <el-form-item :model="Item" label="sku">
          <el-input type="text" v-model="Item.sku"> </el-input>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input type="text" v-model="Item.name"></el-input>
        </el-form-item>
        <el-form-item label="下单金额">
          <el-input type="Number" v-model="Item.orderAmount"></el-input>
        </el-form-item>
        <el-form-item label="数量">
          <el-input type="Number" v-model="Item.quantity"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit(Item)">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowForm: false, //用户是否显示/隐藏
      tableData: [
        { sku: "1", name: "手机", orderAmount: "12", quantity: 2 },
        { sku: "2", name: "手机", orderAmount: "12", quantity: 2 },
        { sku: "3", name: "手机", orderAmount: "12", quantity: 2 },
        { sku: "4", name: "手机", orderAmount: "12", quantity: 2 },
      ],
      Item: {},
      title: "",
    };
  },
  methods: {
    handleEdit(text, index, row) {
      if (text == "add") {
        this.isShowForm = true;
        this.title = "添加";
      }
      if (text == "edit") {
        this.isShowForm = true;
        let cloneItem = JSON.parse(JSON.stringify(row));
        this.Item = cloneItem;
        this.title = "编辑";
      }
    },
    //提交的方法
    submit(item) {
      if (this.title == "添加") {
        this.tableData.push(this.Item);
        this.isShowForm = false;
      }
      if (this.title == "编辑") {
        this.tableData.forEach((v, i) => {
          if (v.sku == item.sku) {
            this.tableData.splice(i, 1, this.Item);
            this.isShowForm = false;
            this.title = "";
          }
        });
      }
    },

    //删除的方法
    handleDelete(index, row) {
      this.tableData.forEach((v, i) => {
        if (v.sku == row.sku) {
          this.tableData;
          this.tableData.splice(i, 1);
        }
      });
    },
  },
};
</script>
<style scoped>
.el-form {
  width: calc(100vh);
  background: rgb(143, 109, 109);
}
/* 新增 el-container 的居中样式 */
.el-container {
  height: 50vh !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-item-center {
  /* 使label和输入框在同一行居中 */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>