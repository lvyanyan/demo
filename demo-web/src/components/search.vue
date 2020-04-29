<template>
    <div> 
        <div class="search-box">
            <input placeholder="请输入要查找的内容或按下方关键字查找"/>
            <ul v-for="(item,index) in searchKey" :key="index">
                <li>{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'search',
    data(){
        return{
            searchKey:[
                {
                    name:"昵称/备注",
                    path:''
                },
                {
                    name:"日期",
                    path:''
                }
            ]
        }
    },
    methods:{
        
    }
}
</script>
<style lang="scss" scopde>
    
</style>