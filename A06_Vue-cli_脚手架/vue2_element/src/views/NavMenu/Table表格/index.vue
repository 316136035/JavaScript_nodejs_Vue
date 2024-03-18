<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"> >
    <el-table-column prop="sku" label="SKU" width="180"> </el-table-column>
    <el-table-column prop="name" label="商品名称" width="800">
    </el-table-column>
    <el-table-column prop="price" label="价格"> </el-table-column>
    <el-table-column prop="discount" label="折扣"> </el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          sku: 100027606896,
          name: `老板（Robam) 抽油烟机探索家D3S家用油烟机三面拢烟变频烟机燃气灶烟灶套装23风量吸油烟机28D3S套装`,
          price: 4299,
          discount: 1,
        },
        {
          sku: 100023781630,
          name: `老板（Robam）抽油烟机领航家D1S欧式顶吸双腔变频22大风量家用燃气灶吸油烟机灶具套装60D1S套装天然气`,
          price: 3999,
          discount: 2,
        },
        {
          sku: 100063215765,
          name: `老板（Robam）领航家抽油烟机D3S欧式顶吸双腔变频24大风量家用燃气灶吸油烟机挥手灶具套装60D3S套装（天然气`,
          price: 4599,
          discount: 3,
        },
        {
          sku: 100015248503,
          name: `老板（Robam）抽油烟机探索家D3S侧吸式油烟机家用变频三面拢23大风量挥手智控低噪1000Pa脱排吸油烟机28D3S`,
          price: 2799,
          discount: 4,
        },
        {
          sku: 100039699413,
          name: `老板（Robam）抽油烟机 钢琴家D3S欧式24风量变频家用燃气灶吸油烟机灶具套装62D3S＋57B2DT京东小家智能生态`,
          price: 4749,
          discount: 5,
        },
        {
          sku: 100021565685,
          name: `老板（Robam）WB780DH 10套大容量嵌入式洗碗洗锅机热风烘干消杀长效循环存储一体机家用中式搁架快速洗`,
          price: 3299,
          discount: 6,
        },
        {
          sku: 100014816111,
          name: `老板（Robam）JZT-57B6D家用燃气灶天然气灶双灶嵌入式 5.2kW大火力猛火灶易打理可调节底盘灶具灶台换灶选老板`,
          price: 2099,
          discount: 7,
        },
        {
          sku: 100066733298,
          name: `老板（Robam) 抽油烟机探索家D3S家用油烟机三面拢烟变频烟机燃气灶烟灶套装23风量吸油烟机28D3S套装`,
          price: 6399,
          discount: 8,
        },
        {
          sku: 100027606896,
          name: `老板（Robam) 抽油烟机探索家D3S家用油烟机三面拢烟变频烟机燃气灶烟灶套装23风量吸油烟机28D3S套装`,
          price: 4299,
          discount: 6,
        },
        {
          sku: 100023781630,
          name: `老板（Robam）抽油烟机领航家D1S欧式顶吸双腔变频22大风量家用燃气灶吸油烟机灶具套装60D1S套装天然气`,
          price: 3999,
          discount: 9,
        },
        {
          sku: 100063215765,
          name: `老板（Robam）领航家抽油烟机D3S欧式顶吸双腔变频24大风量家用燃气灶吸油烟机挥手灶具套装60D3S套装（天然气`,
          price: 4599,
          discount: 1,
        },
        {
          sku: 100015248503,
          name: `老板（Robam）抽油烟机探索家D3S侧吸式油烟机家用变频三面拢23大风量挥手智控低噪1000Pa脱排吸油烟机28D3S`,
          price: 2799,
          discount: 3,
        },
        {
          sku: 100039699413,
          name: `老板（Robam）抽油烟机 钢琴家D3S欧式24风量变频家用燃气灶吸油烟机灶具套装62D3S＋57B2DT京东小家智能生态`,
          price: 4749,
          discount: 1,
        },
        {
          sku: 100021565685,
          name: `老板（Robam）WB780DH 10套大容量嵌入式洗碗洗锅机热风烘干消杀长效循环存储一体机家用中式搁架快速洗`,
          price: 3299,
          discount: 2,
        },
        {
          sku: 100014816111,
          name: `老板（Robam）JZT-57B6D家用燃气灶天然气灶双灶嵌入式 5.2kW大火力猛火灶易打理可调节底盘灶具灶台换灶选老板`,
          price: 2099,
          discount: 1,
        },
        {
          sku: 100066733298,
          name: `老板（Robam) 抽油烟机探索家D3S家用油烟机三面拢烟变频烟机燃气灶烟灶套装23风量吸油烟机28D3S套装`,
          price: 6399,
          discount: 7,
        },
        {
          sku: 100027606896,
          name: `老板（Robam) 抽油烟机探索家D3S家用油烟机三面拢烟变频烟机燃气灶烟灶套装23风量吸油烟机28D3S套装`,
          price: 4299,
          discount: 1,
        },
        {
          sku: 100023781630,
          name: `老板（Robam）抽油烟机领航家D1S欧式顶吸双腔变频22大风量家用燃气灶吸油烟机灶具套装60D1S套装天然气`,
          price: 3999,
          discount: 8,
        },
        {
          sku: 100063215765,
          name: `老板（Robam）领航家抽油烟机D3S欧式顶吸双腔变频24大风量家用燃气灶吸油烟机挥手灶具套装60D3S套装（天然气`,
          price: 4599,
          discount: 6,
        },
        {
          sku: 100015248503,
          name: `老板（Robam）抽油烟机探索家D3S侧吸式油烟机家用变频三面拢23大风量挥手智控低噪1000Pa脱排吸油烟机28D3S`,
          price: 2799,
          discount: 5,
        },
        {
          sku: 100039699413,
          name: `老板（Robam）抽油烟机 钢琴家D3S欧式24风量变频家用燃气灶吸油烟机灶具套装62D3S＋57B2DT京东小家智能生态`,
          price: 4749,
          discount: 8,
        },
        {
          sku: 100021565685,
          name: `老板（Robam）WB780DH 10套大容量嵌入式洗碗洗锅机热风烘干消杀长效循环存储一体机家用中式搁架快速洗`,
          price: 3299,
          discount: 1,
        },
        {
          sku: 100014816111,
          name: `老板（Robam）JZT-57B6D家用燃气灶天然气灶双灶嵌入式 5.2kW大火力猛火灶易打理可调节底盘灶具灶台换灶选老板`,
          price: 2099,
          discount: 1,
        },
        {
          sku: 100066733298,
          name: `老板（Robam) 抽油烟机探索家D3S家用油烟机三面拢烟变频烟机燃气灶烟灶套装23风量吸油烟机28D3S套装`,
          price: 6399,
          discount: 9,
        },
      ],
    };
  },
  methods: {
    // 表格行的class名
    tableRowClassName({ row, rowIndex }) {
      // console.log("row", row, "   ", rowIndex);
      const str="discount-"
      switch (row.discount) {
        case 1:
          return  `${str}${row.discount}`;
          break;
        case 2:
          return `${str}${row.discount}`;
          break;
        case 3:
          return `${str}${row.discount}`;
          break;
        case 4:
          return `${str}${row.discount}`;
          break;
        case 5:
          return `${str}${row.discount}`;
          break;
        case 6:
          return `${str}${row.discount}`;
          break;
        case 7:
          return `${str}${row.discount}`;
          break;
        case 8:
          return `${str}${row.discount}`;
          break;
        case 9:
          return `${str}${row.discount}`;
          break;
        case 10:
          return `${str}${row.discount}`;
          break;
        default:
          return `0`;
      }
    },
  },
};
</script>

<style scoped>
/* 10% 折扣 */
.discount-1 {
  background-color: rgb(249, 3, 3); /* 深红色 */
}

/* 20% 折扣 */
 .discount-2 {
  background-color: rgb(244, 51, 51); /* 红色 */
}

/* 30% 折扣 */
 .discount-3 {
  background-color: #f63104; /* 深橙色 */
}

/* 40% 折扣 */
 .discount-4 {
  background-color: #ff5733; /* 橙色 */
}

/* 50% 折扣 */
 .discount-5 {
  background-color: #cddc39; /* 酸橙色 */
}

/* 60% 折扣 */
  .discount-6 {
  background-color: #8bc34a; /* 青柠绿 */
}

/* 70% 折扣 */
.discount-7 {
  background-color: #4caf50; /* 酸橙绿 */
}

/* 80% 折扣 */
 .discount-8 {
  background-color: #009688; /* 深绿色 */
}

/* 90% 折扣 */
 .discount-9 {
  background-color: #1976d2; /* 海军蓝 */
}

/* 全价 */
  .discount-10 {
  background-color: #3f51b5; /* 深蓝色 */
}

/* 鼠标悬停时候 */
.hover{
  background-color: #e8e9ef00; /* 深蓝色 */
  height: 30px;
}

</style>