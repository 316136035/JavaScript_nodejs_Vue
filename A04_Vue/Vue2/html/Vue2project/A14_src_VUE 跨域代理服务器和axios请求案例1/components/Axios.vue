<template>
  <div>
    <button @click="AxiosGet">AxiosGet请求</button>
    <button @click="stop">停止</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Jd",
  data() {
    return {
      timer: "",
    };
  },

  methods: {
    AxiosGet() {
      //带着cookies请求请到引包处配置axios.defaults.withCredentials = true; //配置可以使用cookies请求
      axios.defaults.withCredentials = true; //配置可以使用cookies请求
      this.timer = setInterval(() => {
        //需要定时执行的代码
        const url = `/getname/?appid=pc-item-soa&functionId=pc_detailpage_wareBusiness&client=pc&clientVersion=1.0.0&t=1682232859506&body=%7B%22skuId%22%3A25897006189%2C%22cat%22%3A%22670%2C671%2C673%22%2C%22area%22%3A%2219_1601_50258_129167%22%2C%22shopId%22%3A%221000350143%22%2C%22venderId%22%3A1000350143%2C%22paramJson%22%3A%22%7B%5C%22platform2%5C%22%3A%5C%221%5C%22%2C%5C%22specialAttrStr%5C%22%3A%5C%22p0pppppppppp1ppppppppppppp%5C%22%2C%5C%22skuMarkStr%5C%22%3A%5C%2200%5C%22%7D%22%2C%22num%22%3A1%7D&h5st=20230423145419528;3299150847091990;fb5df;tk03w9d031c4918nrCi7N2Rx6lp0vT0szJc6AEzZFxVLTbEC6cwIH_jw10L4Y_JRYy7aMz3Fz3_ujmPuTXYHfRALxZbr;a16e735922233933bd887303662227d70c30619566e8446b6804446799fabc56;3.1;1682232859528;24c9ee85e67cf80746dd82817ecbeafc7a829b35c7f446a4c7d476cc9faa1d8834a93323ad7bce9bef1bba682b93d2e329eb3a1461120861e947ad6af0105620797b7b0e7663a50feb7065467b99dcf38db581c67bb8686408804f718bb63dbe14eaec77d2682f702ad8cedb1ee6acce&x-api-eid-token=jdd03Z5BUAUO3JOTLATWUIMQY75BKHXLZZRXLYNFZAIUYT7F452XOIXNZFW2QMIDXHS7L4T4B7HZZFUOU3VCE2MGPZXGLOAAAAAMHVT3DLDIAAAAAC54PLS4QQM4XEQX&loginType=3&uuid=122270672.16822235340841718632670.1682223534.1682230294.1682232830.4`;
        //  const ur2 = `/getname/?appid=pc-item-soa&functionId=pc_detailpage_wareBusiness&client=pc&clientVersion=1.0.0&t=1682228379621&body=%7B%22skuId%22%3A100007673377%2C%22cat%22%3A%22670%2C686%2C690%22%2C%22area%22%3A%2219_1601_50258_129167%22%2C%22shopId%22%3A%221000000158%22%2C%22venderId%22%3A1000000158%2C%22paramJson%22%3A%22%7B%5C%22platform2%5C%22%3A%5C%22100000000001%5C%22%2C%5C%22specialAttrStr%5C%22%3A%5C%22p0pppppppppp1ppppppppppppp%5C%22%2C%5C%22skuMarkStr%5C%22%3A%5C%2200%5C%22%7D%22%2C%22num%22%3A1%7D&h5st=20230423133939645%3B3299150847091990%3Bfb5df%3Btk03w9d031c4918nrCi7N2Rx6lp0vT0szJc6AEzZFxVLTbEC6cwIH_jw10L4Y_JRYy7aMz3Fz3_ujmPuTXYHfRALxZbr%3Bb6177efec2f1d617f4e5175ba945966b85a9a031ec5ebe2458eb9883249131d1%3B3.1%3B1682228379645%3B24c9ee85e67cf80746dd82817ecbeafc7a829b35c7f446a4c7d476cc9faa1d8834a93323ad7bce9bef1bba682b93d2e355d6e8e5dd59f86cf6366b81c51e383adb96f5daf4b2d7af0284ebe1039f084122774b75933a727217e36a93e0f07d39`;
        axios.get(url).then(
          (response) => {
            console.log(response.data);

            console.log("price.id", response.data.price.id);
            console.log("wareInfo.wname", response.data.wareInfo.wname);
            console.log("price.epp:", response.data.price.p);
            console.log("price.epp：", response.data.price.epp);
          },

          (error) => {
            console.log("请求失败...", error);
          }
        );
      }, 500);
    },
    stop() {
      clearInterval(this.timer);
    },
  },
};
</script>



<style>
</style>