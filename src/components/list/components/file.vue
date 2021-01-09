<template>
  <div>
      <div>
          <div v-if='!setting.isImage'>{{data.name}}</div>
          <div v-if='setting.isImage'><img :src='data.url' /></div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    setting:{
      type: Object,
      default: function(){
        return {}
      }
    },
    data: {
        type: Object,
        default: function() {
            return {}
        }
    }
  },
  data() {
    return {};
  }
};
</script>