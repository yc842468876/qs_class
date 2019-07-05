<template>
  <div class="over_due">
    <h3>该问卷已过期</h3>
    <van-button @touchstart="closePage" type="info" size="small">关闭</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    closePage() {
      try {
        WeixinJSBridge.call('closeWindow');
      } catch(e) {
        console.log(e);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .over_due {
    padding-top: 200px;
  }
  
</style>
