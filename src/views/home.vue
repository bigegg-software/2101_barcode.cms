<template>
 <div>
  home
 </div>
</template>
<script>

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      targetTime: new Date().getTime() + 3900000,
      tagCloudData: []
    }
  }  
}
</script>

<style scoped>
  .home {
    width: 900px;
    margin: 0 auto;
    padding: 25px 0;
  }
  .home > .banner {
    text-align: center;
    padding: 25px 0;
    margin: 25px 0;
  }
</style>
