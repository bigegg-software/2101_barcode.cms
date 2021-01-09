<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item v-for="menu in MeneMap" :key="menu.key" @click='handleClick(menu)'>
          <a-icon :type="menu.icon" />
          <span>{{menu.title}}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0"></a-layout-header>
      <a-layout-content style="margin: 0 16px;padding: 10px">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import {MeneMap} from '../config/menu'
export default {
  data() {
    return {
      collapsed: false,
      MeneMap: MeneMap
    };
  },
  methods:{
    handleClick(v){
      this.$router.push({
        path: v.path
      })
  }
  }
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>