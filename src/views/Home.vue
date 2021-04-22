<template>
  <div class="home">
    <!-- <v-leftcard></v-leftcard> -->
    <v-leftcard v-if="!isPortrait && isPhone === false"></v-leftcard>
    <div style="width: 98%">
      <el-row align="middle" style="width: 100%; margin-top: 10px">
        <el-button> <a href="./#self">Homepage</a></el-button>
        <el-button><a href="./#research">Research</a></el-button>
        <el-button><a href="./#publications">Publications</a></el-button>
        <el-button><a href="./#services">Services</a></el-button>
        <el-button><a href="./#people">People</a></el-button>
      </el-row>
      <el-divider></el-divider>

      <div
        :style="
          'height:' +
          windowHeight +
          'px;' +
          'overflow: auto;text-align: left;font-size: 20px;line-height: 1.8;padding: 0 3% 0 3%;overflow-y: scroll;'
        "
        id="#top"
      >
        <v-centercard
          v-if="isPortrait === true || isPhone === true"
          style=""
        ></v-centercard>
        <!-- <el-backtop target="#top" :visibility-height="100"></el-backtop> -->
        <v-self id="self"></v-self>
        <v-research id="research"></v-research>
        <v-publications id="publications"></v-publications>
        <v-services id="services"></v-services>
        <v-people id="people"></v-people>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    let that = this;
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      ) != null
    ) {
      this.isPhone = true;
    } else {
      this.isPhone = false;
    }
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight;
        window.fullWidth = document.documentElement.clientWidth;
        that.windowHeight = window.fullHeight - 100; // 高
        that.windowWidth = window.fullWidth; // 宽
        console.log("实时屏幕高度：", that.windowHeight);
        console.log("实时屏幕宽度：", that.windowWidth);
        if (that.windowWidth < 1200) {
          that.isPortrait = true;
        } else {
          that.isPortrait = false;
        }
      })();
    };
  },
  data() {
    return {
      isPhone: false,
      isPortrait: false,
      windowWidth: document.documentElement.clientWidth, //实时屏幕宽度
      windowHeight: document.documentElement.clientHeight - 100, //实时屏幕高度
    };
  },
  watch: {
    isPhone(val) {
      console.log("shit", val);
    },
  },
  windowWidth(val) {
    if (this.windowWidth < 1500) {
      this.isPortrait = true;
    } else {
      this.isPortrait = false;
    }
    console.log(val);
  },
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
}
.el-divider {
  margin: 5px;
}
a:link,
a:visited {
  color: #1279f8;
  text-decoration: none;
  margin: 3%;
  text-decoration: none;
  color: #444;
  padding: 6px;
}
.el-button {
  // background-color: Transparent;
  width: 130px;
  height: 40px;
  font-size: 16px;
  border-style: none; //无边框
  // outline: none; //获得焦点也无边框
}
</style>
