<template>
  <div>
    <a-input placeholder="setting.placeholder" :disabled="setting.disabled" v-model="user.username" class="login-form-item">
      <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
    </a-input>
  </div>
</template>
<script>
export default {
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
    }
</script>