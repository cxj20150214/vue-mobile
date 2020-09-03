<template>
  <div>
    <div class="box1">
      <div class="tx">
        <img src="../../../assets/img/tx.jpg" alt />
      </div>
      <div class="txtbox">
        <p>用户姓名：{{name}}</p>
        <p>用户等级：新人</p>
      </div>
    </div>
    <div class="box2">
      <ul>
         <li @click="upload">
          <img src="../../../assets/img/sccp.png" alt />
          <p>上传食谱</p>
        </li>
        <li @click="open">
          <img src="../../../assets/img/tc.png" alt />
          <p>退出登录</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "foodlist",
  data() {
    return {
      name: this.$store.state.user.centername
    };
  },
  methods: {
    open() {
      this.$confirm("是否确认退出?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.logout();
        })
        .catch(() => {});
    },
    logout() {
      this.$store.dispatch("user/logout").then(() => {
        this.$router.push(`/login?redirect=${this.$route.fullPath}`);
      });
    },
    upload(){
      this.$router.push('/upload')
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  padding: 0px;
}
li {
  list-style: none;
}
.box1 {
  width: 100vw;
  height: 25vh;
  background: #ecb120;
  padding: 50px;
  display: flex;
  flex-direction: row;
  .tx {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background: #fff;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 2px solid #fff;
    img {
      width: 100%;
    }
  }
  .txtbox {
    color: #fff;
    font-size: 28px;
    margin-left: 30px;
  }
}
.box2 {
  position: absolute;
  top: 20vh;
  width: 94vw;
  height: 30vh;
  background-color: #fff;
  left: 3vw;
  border-radius: 15px;
  box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 15px;
  ul {
    width: 100%;
    li {
      width: 25%;
      float: left;
      text-align: center;
      img {
        width: 70px;
        margin: 0px auto;
      }
      p {
        font-size: 26px;
        text-align: center;
        color: #666;
      }
    }
  }
}
</style>
<style lang="scss">
.el-message-box {
  .el-button--primary {
    background-color:#ecb120;
    border-color:#ecb120
  }
  width: 70vw;
  font-size: 32px;
  .el-message-box__content {
    font-size: 28px;
    padding: 20px 35px;
  }
}
.el-button--mini,
.el-button--small {
  font-size: 26px;
}
.el-button--small,
.el-button--small.is-round {
  padding: 20px 45px;
}
.el-message-box__btns {
  text-align: center;
  justify-content: space-between;
}
.el-message-box__btns button:nth-child(2) {
  margin-left: 50px;
}
</style>