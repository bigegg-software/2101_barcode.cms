<template>
  <div>
    <a-select :default-value="data" :disabled="setting && setting.disabled"  :placeholder="placeholder" @change="handleChange" class="form-select">
      <a-select-option
        v-for="option in (options||[])"
        :key="option.key"
      >{{ option.title}}</a-select-option>
    </a-select>
  </div>
</template>
<script>
export default {
    props:['options','item','placeholder','setting'],
    data(){
      return {
        data : this.item
      }
    },
    mounted(){
         this.$emit('changeOptions',this.data)
    },
    methods:{
        handleChange(v){
          this.data = v
          this.$emit('update:item', this.data)
            this.$emit('changeOptions',this.data)
        }
    }

}
</script>
<style scoped>
    .form-select{
        width: 100%;
        height: 40px;
    }
</style>