<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <div>{{item.friendName}}</div>
                <div>{{item.lastDate}}</div>
                <div>{{item.lastInfo}}</div>
                <div>{{item.lastTime}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'noteList',
    data(){
        return{
            list:[]
        }
    }
}
</script>
