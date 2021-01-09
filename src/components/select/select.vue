<template>
    <a-select :default-value="data" style="width: 120px" @change="handleOptionChange">
      <a-select-option v-for="option in options" :key="option.key">
        {{ option.title }}
      </a-select-option>
    </a-select>
</template>
<script>
export default {
    props:["options", "data"],
    mounted(){
        this.$emit('changeOption', this.data)
    },
    methods:{
        handleOptionChange(v){
            this.$emit('changeOption', v)
        }
    }
}
</script>