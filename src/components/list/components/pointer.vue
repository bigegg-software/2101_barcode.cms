<template>
  <div>
      <div>
          <span @click="jumpTo(data)" >{{ setting.valueKey ? data[setting.valueKey] : data.objectId}}</span>
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
  },
  methods:{
      jumpTo(data){
          if(this.setting.baseLink){
              this.$router.push(`${this.setting.baseLink}/${data.objectId}`)
          }      
      }
  }
};
</script>