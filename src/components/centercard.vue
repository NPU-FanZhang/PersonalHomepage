
<template>
  <div style="margin: auto; padding-top: 1%; width: 460px; ">
    <div style="width: 320px; height: 380px">
      <el-image
        style="width: 300px; height: 300px; border-radius: 5%; margin-left: 10%"
        :src="require('./../assets/NWPU.png')"
        fit="cover"
      ></el-image>
      <h2 style="margin-left: 30%">DU, Lei (杜磊)</h2>
    </div>
    <el-divider style="margin: 0px 0px"></el-divider>
   <div class="box">
        <p>Associate Professor</p>
        <p>School of Automation</p>
        <p>Northwestern Polytechnical University</p>
        <p><b>Contact</b></p>
        <p>dulei (at) nwpu (dot) edu (dot) cn</p>
      </div>
    <el-divider style="margin: 0px 0px"></el-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.box {
  width: 500px;
  //height: 250px;
  padding:  0 20px;
  text-align: left;
  //border-top: 1px solid #eee;
  position: relative;
}
a:link,
a:visited {
  color: #1279f8;
  text-decoration: none;
}
</style>
