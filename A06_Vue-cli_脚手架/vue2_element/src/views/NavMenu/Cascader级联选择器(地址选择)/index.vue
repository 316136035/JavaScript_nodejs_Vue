<template>
<div class="block">
  <span class="demonstration">hover 触发子菜单</span>
  <el-cascader
    v-model="value"
    :options="options"
    :props="{ expandTrigger: 'hover' }"
    @change="handleChange"></el-cascader>
</div>
</template>





<script>
import axios from "axios";
export default {
  data() {
    return {
      value: [],
      options:[
    {
        "label": 14,
        "value": "安徽"
    },
    {
        "id": 1,
        "name": "北京"
    },
    {
        "id": 4,
        "name": "重庆"
    },
    {
        "id": 16,
        "name": "福建"
    },
    {
        "id": 24,
        "name": "贵州"
    },
    {
        "id": 19,
        "name": "广东"
    },
    {
        "id": 20,
        "name": "广西"
    },
    {
        "id": 28,
        "name": "甘肃"
    },
    {
        "id": 52993,
        "name": "港澳"
    },
    {
        "id": 5,
        "name": "河北"
    },
    {
        "id": 7,
        "name": "河南"
    },
    {
        "id": 17,
        "name": "湖北"
    },
    {
        "id": 18,
        "name": "湖南"
    },
    {
        "id": 23,
        "name": "海南"
    },
    {
        "id": 10,
        "name": "黑龙江"
    },
    {
        "id": 12,
        "name": "江苏"
    },
    {
        "id": 21,
        "name": "江西"
    },
    {
        "id": 9,
        "name": "吉林"
    },
    {
        "id": 8,
        "name": "辽宁"
    },
    {
        "areaCode": "1",
        "id": 53283,
        "name": "海外"
    },
    {
        "id": 11,
        "name": "内蒙古"
    },
    {
        "id": 30,
        "name": "宁夏"
    },
    {
        "id": 29,
        "name": "青海"
    },
    {
        "id": 13,
        "name": "山东"
    },
    {
        "id": 6,
        "name": "山西"
    },
    {
        "id": 2,
        "name": "上海"
    },
    {
        "id": 27,
        "name": "陕西"
    },
    {
        "id": 22,
        "name": "四川"
    },
    {
        "id": 3,
        "name": "天津"
    },
    {
        "areaCode": "886",
        "id": 32,
        "name": "台湾"
    },
    {
        "id": 26,
        "name": "西藏"
    },
    {
        "id": 31,
        "name": "新疆"
    },
    {
        "id": 25,
        "name": "云南"
    },
    {
        "id": 15,
        "name": "浙江"
    }
]
    };
  },
  methods: {
    getAddress() {
      axios.create.withCredentials = true; //设置跨域请求时是否发送cookie
      //发送ajax请求
      axios
        .request({
          //基础URL
          url: "/getAddress/area/get?fid=4744",
          //请求方式
          method: "get",
        })
        //失败回调函数
        .catch((error) => {
          console.log(error);

          //失败回调函数
        })
        //成功回调函数
        .then((data) => {
          console.log(data.data);
          this.options=data.data;
        });
    },
    handleChange(value) {
        console.log(value);
      }
  },

  mounted() {
    this.getAddress();
  },
};
</script>