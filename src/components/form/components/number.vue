<template>
  <div>
    <a-input-number  :disabled="setting.disabled" :min="-1" :max="10"  v-model="model" class="form-input" @change="change">
      <!-- <a-icon v-if="setting.icon" slot="prefix" :type="setting.icon" style="color:rgba(0,0,0,.25)" /> -->
    </a-input-number>
  </div>
</template>
<script>
export default {
  props: {
    setting: {
      type: Object,
      default: function() {
        return {};
      }
    },
    item: {
      type: Number,
      default: 0
    }
  },
  data(){
    return {
      model: this.item
    }
  },
  watch:{
    item(){
      this.model = this.item
    }
  },
  methods:{
      change(){
        this.$emit('update:item', this.model)
      }
  }
    
};
</script>
<style scoped>
.form-input{
  height: 40px;
  width: 100%;
}
</style>