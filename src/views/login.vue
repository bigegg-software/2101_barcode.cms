<template>
    <div >
        <beLogin class="login-container" :logIn='logIn' ></beLogin>
    </div>
</template>
<script>
import beLogin from '../components/login'
import * as User  from '@/api/User'
export default { 
    components:{
        beLogin,
    },
    data(){
        return {
            
        }
    },
    methods: {
        async logIn(v){
           await User.logIn(v.username, v.password) 
           this.$router.push({
                path: '/dashboard'
            })
        }
    }
    
}
</script>
<style scoped>
.login-container{
    height: 300px;
    width: 400px;
    margin: 50px auto;
}
</style>