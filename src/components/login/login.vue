<template>
    <div>
        <a-form model="" @submit="handleForm" class="login-form">
            <a-form-item >
                <a-input placeholder="用户名" v-model="user.username" class="login-form-item">
                    <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>

            <a-form-item >
                <a-input placeholder="密码" type="password" v-model="user.password" class="login-form-item">  
                    <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>

            <a-form-item>
                <a-checkbox v-model="rememberMe" >记住密码</a-checkbox>
                <a-button type="primary" html-type="submit" class="login-form-button">登录</a-button>
            </a-form-item>

        </a-form>
    </div>
</template>

<script>
export default {
    props: ['logIn', 'rule'],

    data(){
        return {
            user: {
                username: '',
                password: ''
            },
            rememberMe: true
        }
    },
    methods:{
        async handleForm(e){
            e.preventDefault();

            if(!this.user.username){
                return this.$message.error(this.$tips.username_cant_empty);
            }
            if(!this.user.password){
                return this.$message.error(this.$tips.password_cant_empty);
            }

            let state = false;
            if(this.rule){
                for(let key of Object.keys(this.rule)){
                  state = this.user[key].test(this.rule[key].rule)
                  if(state){
                        this.$message.error(this.rule[key].message);
                        break
                  }
                }
            }
            if(state) return;
            
            await this.logIn(this.user)
        }
    }
}
</script>

<style scoped>

.login-form-item{
    height: 50px;
}
.login-form .login-form-button {
  width: 100%;
  height: 50px;
}
</style>