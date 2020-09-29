<template>
  <div>
    <div class="imgbox">
       <img class="topImg" :src="detail.url" alt />
    </div>
    <p class="title">{{detail.name}}</p>
    <p class="bz">烹饪步骤</p>
    <div v-html="detail.content"></div>
  </div>
</template>
<script>
import { detail } from "@/api/user";
export default {
  name: "detail",
  data() {
    return {
      thisId: {
        id: this.$route.query.id
      },
      detail: ""
    };
  },
  methods: {
    // 添加步骤
  },
  created() {
    detail(this.thisId).then(res => {
      this.detail = res.data[0];
    });
  }
};
</script>
<style lang="scss" >
ul {
  padding: 0px;
}
li {
  list-style: none;
}
.demo-ruleForm {
  margin-top: 30px;
  .foodInput {
    &.noborder {
      border-bottom: 0px;
    }
    font-size: 36px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
    .el-input__inner {
      height: 80px;
      border: 0px !important;
    }
    .el-textarea__inner {
      height: 300px;
      border: 0px !important;
    }
  }
}
.formborder {
  width: 100%;
  height: 20px;
  background-color: #f3f3f3;
}
.formBox {
  padding: 20px;
}
.tp_txt {
  font-size: 32px;
  color: #999;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
}
.foodButton {
  width: 80%;
  height: 80px;
  margin-left: 10%;
  font-size: 36px;
  letter-spacing: 2px;
  background-color: #ecb120;
  border: 1px solid #ecb120;
}
.el-button--primary:focus,
.el-button--primary:hover {
  background: #ecb120;
  border-color: #ecb120;
}
.success {
  width: 60vw;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 26px;
  color: #fff;
  position: fixed;
  left: 20vw;
  top: 35vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999999;
  transition: all 0.3s;
}
.uploadBox {
  padding: 20px;
  display: flex;
  flex-direction: column;
  .txt {
    font-size: 32px;
  }
  img {
    width: 100%;
    margin: 0px auto;
  }
}
.addBz {
  font-size: 32px;
  color: #ecb120;
  margin: 40px 0px;
}
.topImg{
  width:100%;
  position: absolute;
  left:50%;
  top:0%;
  margin-left:-50%;
}
.imgbox{
  width: 100%;
  height: 350px;
  position: relative;
  overflow: hidden;
}
.title{
  width:100%;
  text-align: center;
  font-size: 48px;
}
.bz{
  font-size: 28px;
  padding-left:20px;
  margin:0px;
  font-weight: 700;
}
</style>