<template>
  <div class="notFoundComponent">
    <img src="../../assets/img/timg.jpg" alt />
    <div class="notFoundBTN">
        <span @click="goBrack">返回上一页</span>
        <span @click="goHome">返回首页</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "notFoundComponent",
  data: () => {
    return {
      timeout: null
    };
  },
  created() {
    clearTimeout(this.timeout);
    this.$message.error({
        center: true,
        message:'页面丢失'
    });
  },
  updated() {},
  methods: {
    // setTimeout(() => {}, this.timeout);
    goBrack() {
        this.$router.back();
    },
    goHome(){
        this.$router.push({path:'/dashboard'})
    }
  }
};
</script>
<style scoped lang="scss">
.notFoundComponent {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .notFoundComponent > img {
    width: 100%;
  }
  .notFoundBTN {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      width: 160px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
      background-color: #000;
    }
    span:nth-child(1) {
      background: #f8f8f8;
    }
    span:nth-child(2) {
      background: linear-gradient(left top, #7cf3d6, #20ee49);
      color: #fff;
      margin-left: 50px;
    }
  }
}
</style>