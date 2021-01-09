<template>
  <div>
    <a-form
      @submit="handleForm"
      class="login-form"
      :labelAlign="setting.labelAlign || 'left'"
      :label-col="{ span: setting.labelCol||5 }"
      :wrapper-col="{ span: setting.wrapperCol||19}"
    >
      <a-form-item v-for="item in columns" :key="item.key" :label="item.title">
        <formText
          v-if="item.type == 'text'"
          :setting="setting[item.key]"
          :item.sync="data[item.key]"
        ></formText>
        <formInput
          v-if="item.type == 'input'"
          :setting="setting[item.key]"
          :item.sync="data[item.key]"
        ></formInput>
        <formNumber
          v-if="item.type == 'number'"
          :setting="setting[item.key]"
          :item.sync="data[item.key]"
        ></formNumber>
        <formSelect
          v-if="item.type == 'select'"
          :setting="setting[item.key]"
          :options="options[item.key]"
          :item.sync="data[item.key]"
          @changeOptions="changeOptions"
        ></formSelect>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: setting.labelCol||5,span: setting.wrapperCol||19}">
        <a-button type="primary" html-type="submit" class="login-form-button" :loading="loading">{{setting.formButtonText || '确定'}}</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import formInput from "./components/input";
import formText from "./components/text";
import formNumber from "./components/number";
import formSelect from "./components/select";
export default {
  props: {
    setting: {
      type: Object,
      default() {
        return {
          labelCol: 5,
          wrapperCol: 19,
          labelAlign: "left"
        };
      }
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  watch: {
    data: {
      handler() {
        this.$emit("update:data", this.data);
      },
      deep: true
    },
    loading:{
       handler() {
         console.log('========')
        
      },
    }
  },
  methods: {
    handleForm(e) {
      e.preventDefault();
      this.$emit('handleForm', this.data)
      
    },
    changeOptions(v) {
      console.log("======", v);
    }
  },
  components: {
    formInput,
    formText,
    formNumber,
    formSelect
  }
};
</script>

<style scoped>
.login-form-item {
  height: 40px;
}
.login-form .login-form-button {
  width: 100%;
  height: 40px;
}
</style>