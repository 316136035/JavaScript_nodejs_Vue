<template>
    <!-- 表格 
    :data="tableData 要遍历的数组
    :row-class-name="tableRowClassName">  操作类属性，样式显示-->
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <!-- 表格列 
     prop="sku" 每个对象的属性  
     label="SKU" 标题
     sortable  排序
     type="index"  :index="indexMethod" 表格序号-->
      <el-table-column
        prop="sku"
        label="SKU"
        width="120"
        sortable
        type="index"
        :index="indexMethod"
      ></el-table-column>
      <el-table-column
        :row-class-name="tableRowClassName"
        prop="name"
        label="商品名称"
        width="900"
        sortable
      >
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <div class="div">名称: {{ scope.row.name }}</div>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="价格" sortable> </el-table-column>
      <el-table-column prop="discount" label="折扣" sortable> </el-table-column>
    </el-table>
  </template>
  
  
  <script>
  export default {
    methods: {
      // 操作类属性，样式显示
      tableRowClassName({ row, rowIndex }) {
        const str = "discount-";
        switch (row.discount) {
          case 1:
            return `${str}${row.discount}`;
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
      indexMethod(index) {
        return index + 1;
      },
    },
    data() {
      return {
        tableData: [
          {
            sku: 100027606896,
            name: `老板（Robam) 抽油烟机探索家D3S家用油烟机三面拢烟变频烟机燃气灶烟灶套装23风量吸油烟机28D3S套装老板（Robam) 抽油烟机探索家D3S家用油烟机三面拢烟变频烟机燃气灶烟灶套装23风量吸油烟机28D3S套`,
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
          {
            sku: 100027606896,
            name: `老板（Robam) 抽油烟机探索家D3S家用油烟机三面拢烟变频烟机燃气灶烟灶套装23风量吸油烟机28D3S套装老板（Robam) 抽油烟机探索家D3S家用油烟机三面拢烟变频烟机燃气灶烟灶套装23风量吸油烟机28D3S套`,
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
  };
  </script>
  
  <style>
  /* 10% 折扣 */
  .el-table .discount-1 {
    background: #870000; /* 深红色 */
  }
  
  /* 20% 折扣 */
  .el-table .discount-2 {
    background: #fb0303; /* 红色 */
  }
  
  /* 30% 折扣 */
  .el-table .discount-3 {
    background: #010176; /* 红色 */
  }
  
  /* 40% 折扣 */
  .el-table .discount-4 {
    background: #0202fa; /* 红色 */
  }
  
  /* 50% 折扣 */
  .el-table .discount-5 {
    background: rgb(0, 138, 108); /* 红色 */
  }
  
  /* 60% 折扣 */
  .el-table .discount-6 {
    background: rgb(51, 246, 204); /* 红色 */
  }
  
  /* 70% 折扣 */
  .el-table .discount-7 {
    background: rgb(134, 120, 1); /* 红色 */
  }
  
  /* 80% 折扣 */
  .el-table .discount-8 {
    background: rgb(249, 225, 3); /* 红色 */
  }
  
  /* 90% 折扣 */
  .el-table .discount-9 {
    background: rgb(247, 231, 82); /* 红色 */
  }
  
  /* 全价 */
  .el-table .discount-10 {
    background: rgb(241, 237, 202); /* 红色 */
  }
  
  .el-table__row > .el-table__cell {
    line-height: "20px";
    height: 20px;
  }
  .el-popover__reference span {
    background-color: #f8f4f400;
    border: 0px;
    color: white !important;
  }
   .cell{
      /* 内边距  !important优先使用*/
      padding: 10px  !important;;
      /* 宽度 !important优先使用*/
      width: 126pox  !important; ;
      /* 不换行!important优先使用 */
      word-break: keep-all  !important;;
      /* 不换行 !important优先使用*/
      white-space: nowrap  !important; ;
      /* 内容超出宽度时隐藏超出部分的内容 */
      overflow: hidden !important;;
      /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
      text-overflow: ellipsis  !important;; 
  }
  .el-table__row , .el-table__cell,.cell {
    /* 行高 !important;*/
      height: 25px !important;
      padding-top: 0px!important;
      padding-right: 0px!important;
      padding-bottom: 0px!important;
    
    
  
  }
  
  </style>
  
  
  