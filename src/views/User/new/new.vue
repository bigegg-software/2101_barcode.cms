<template>
  <div class="update-container">
    <beFrom 
    :columns="columns" 
    :data="data" 
    :options="options" 
    :setting="setting"
    :loading="loading"
    @handleForm='handleForm'></beFrom>
  </div>
</template>
<script>
import beFrom from "@/components/form";
import * as UserServer from "@/api/User";
import { columns, options, setting } from "./config";
export default {
  data() {
    return {
      columns,
      options,
      setting,
      loading: false,
      data:{
         
      }
    };
  },
  components: { beFrom },
  mounted(){
    
  },
  methods:{
     
      async handleForm(v){
          this.loading = true; 
          await UserServer.create(v)
          this.loading = false;
          this.$router.go(-1)
      }
  },
};
</script>
<style scoped>
.update-container {
  height: 500px;
  width: 500px;
  margin: auto;
}
</style>