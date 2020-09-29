<template>
  <div>
    <div class="formborder"></div>
    <div class="formBox">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-input class="foodInput" placeholder="食材名称" v-model="ruleForm.name"></el-input>
        <div class="showbox" ref="showbox">
          <div class="uploadBox">
            <ul>
              <li v-for="item in bzlist">
                <p class="txt">{{item.content}}</p>
                <img :src="item.url" alt />
              </li>
            </ul>
          </div>
        </div>
        <el-input
          class="foodInput noborder"
          type="textarea"
          placeholder="在此写下食材步骤.."
          v-model="ruleForm.contentbz"
        ></el-input>
        <el-upload
          action="http://www.kuaiwan.club/index.php/index/index/upload/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-success="uploadSuccess"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <p class="tp_txt">(上传图片)</p>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
        <p class="addBz" @click="thisContent">+添加步骤</p>
        <el-upload
          action="http://www.kuaiwan.club/index.php/index/index/upload/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview1"
          :on-remove="handleRemove"
          :on-success="uploadSuccess1"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <p class="tp_txt">上传成品图片</p>
        <el-dialog :visible.sync="dialogVisible1">
          <img width="100%" :src="dialogImageUrl1" alt />
        </el-dialog>
        <el-button class="foodButton" type="primary" @click="submitForm('ruleForm')">上传食谱</el-button>
      </el-form>
      <div class="success" v-show="loginSuccess">上传成功</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { upload } from "@/api/user";
export default {
  name: "upload",
  data() {
    return {
      dialogImageUrl: "",
      dialogImageUrl1: "",
      dialogVisible: false,
      dialogVisible1: false,
      loginSuccess: false,
      bzlist: [],
      ruleForm: {
        name: "",
        content: "",
        contentbz: "",
        url: "",
        bzurl: ""
      }
    };
  },
  mounted:{
    
  },
  methods: {
    // 添加步骤
    thisContent() {
      var thisData = {
        content: this.ruleForm.contentbz,
        url: this.ruleForm.bzurl
      };
      this.bzlist.push(thisData);
      console.log(this.bzlist);
      this.ruleForm = {
        name: this.ruleForm.name,
        contentbz: "",
        url: this.ruleForm.url
      };
      this.dialogImageUrl == "";
      console.log(this.ruleForm);
    },
    intoHtml() {
      this.ruleForm.content = this.$refs.showbox.innerHTML;
      console.log(this.ruleForm.content);
    },
    // 提交
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.$refs.showbox.innerHTML);
          this.ruleForm.content = this.$refs.showbox.innerHTML;
          upload(this.ruleForm).then(res => {
            if (res.code == 200) {
              this.ruleForm.content = "";
              console.log(res);
              this.loginSuccess = true;
              setTimeout(() => {
                this.loginSuccess = false;
                this.$router.push('/food');
              }, 1500);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      console.log(file);
    },
    handlePictureCardPreview1(file) {
      this.ruleForm.url = file.url;
      console.log(file);
    },
    uploadSuccess(res) {
      this.ruleForm.bzurl = res.data.image;
      console.log(res);
    },
    uploadSuccess1(res) {
      this.ruleForm.url = res.data.image;
      console.log(res);
    }
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
</style>