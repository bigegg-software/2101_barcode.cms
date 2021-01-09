<template>
  <div>
    <div v-for="item in data" :key="item">
      {{setting.handleInfo(item)}}
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
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
  }
};
</script>