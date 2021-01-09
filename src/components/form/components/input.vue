<template>
  <div>
    <a-input :placeholder="setting.placeholder" v-model="model" class="form-input">
      <a-icon v-if="setting.icon" slot="prefix" :type="setting.icon" style="color:rgba(0,0,0,.25)" />
    </a-input>
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
      type: String,
      default: ''
    }
  },
  data(){
    return {
      model: this.item
    }
  },
  watch:{
    model(){
      this.$emit('update:item', this.model)
    },
    item(){
      this.model = this.item
    }
  }
};
</script>
<style scoped>
.form-input{
  height: 40px;
}
</style>