<template>
  <div>
    <ul>
      <li v-for="item in lilist" :key="item.id">
         <a href="https://item.jd.com/html">{{ item.id }}：{{item.name}}</a>
      </li>
     
    </ul>
  </div>
</template>

<script>
export default {
  name: "DepartmentChildren1",
  data() {
    return {
      lilist: [
        {
          id: "100038384756",
          name: "本瓷砖清洗剂地砖表面去渍抛光增亮清洗剂地板翻新家用清洁剂 500ml",
        },
        {
          id: "100025060053",
          name: "蓉品坊 麻辣萝卜干230g下饭菜榨菜咸菜泡菜酸菜萝卜丁高山香脆萝卜条",
        },
        {
          id: "100005445951",
          name: "本瓷砖清洗剂地砖表面去渍抛光增亮清洗剂地板翻新家用清洁剂 500ml",
        },
        {
          id: "100038384758",
          name: "百草味每日抱抱果758g 新疆和田骏枣夹核桃红枣礼盒零食大礼包送礼",
        },
        {
          id: "100035807945",
          name: " Vancilin润唇膏唇膜凡士林防干裂干燥去脱皮淡化唇纹保湿修护唇膏7g*4套盒",
        },
      ],
    };
  },
};
</script>

<style>
</style>