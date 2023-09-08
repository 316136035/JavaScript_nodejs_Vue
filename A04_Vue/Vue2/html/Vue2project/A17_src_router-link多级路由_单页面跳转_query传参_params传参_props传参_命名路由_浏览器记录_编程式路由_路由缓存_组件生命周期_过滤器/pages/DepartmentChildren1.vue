<template>
  <div>
    <div>
      <ul>
        <li v-for="item in lilist" :key="item.id">
          <!-- 路由跳转页面，query传参数 -->
          <!-- <router-link :to="`/department/departmentChildren1/message?id=${item.id}&name=${item.name}`">{{ item}}</router-link> -->
          <!-- 路由跳转页面，query传参数对象写法   
          当路由没有设置名字的时候（path："/路由路径"）
          使用:to="{name:'messagename'}必须在路由文件.路由中给路由命名
          query: {id: item.id, name: item.name,}参数-->
          <router-link
            :to="{
              name: 'departmentChildren1Messagename',
              query: {
                id: item.id,
                name: item.name,
              },
            }"
            >{{ item }}</router-link
          >
          <button @click="pushShow(item)">push带浏览器记录</button>
          <button @click="replaceShow(item)">replace不带浏览器记录</button>
        </li>
      </ul>
    </div>
    <hr />
    <div>
      <table>
        信息：
      </table>
      <router-view> </router-view>
    </div>
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
  methods: {
    //push带浏览器记录（传参数的跳转）
    pushShow(item) {
       console.log("push:", this.$router),
      this.$router.push({
        name: "departmentChildren1Messagename",
        // 使用 query: {id: item.id,name: item.name, },必须在路由文件.路由中给路由命名
        query: {
          id: item.id,
          name: item.name,
        },
      });
    },
    //replace不带浏览器记（传参数的跳转）
    replaceShow(item) {
      console.log("replace:", this.$router),
        this.$router.replace({
          name: "departmentChildren1Messagename",
          // 使用 query: {id: item.id,name: item.name, },必须在路由文件.路由中给路由命名
          query: {
            id: item.id,
            name: item.name,
          },
        });
    },
  },
};
</script>


<style>
</style>