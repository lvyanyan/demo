<template>
    <div>
        <span @click="clickPlus">+</span>
        <div class="plus-box" v-for="(item,index) in boxList" :key="index" v-show="openBox">
            <!-- 内含功能：添加好友，二维码识别，名片 -->
            <div @click="transfer(item.path)">{{item.name}}</div>
        </div>
    </div>
</template>
<script>
import AddFriend from '@/components/addFriend'
import CODE from '@/components/code'
import CARD from '@/components/card'
export default {
    name: "plus",
    comments:{
        AddFriend,CODE,CARD
    },
    data (){
        return {
            openBox:false,
            boxList:[
                {
                    name:"添加好友",
                    path:'/addfriend',
                    component:AddFriend
                },
                {
                    name:"二维码识别",
                    path:'/code',
                    component:CODE
                },
                {
                    name:"名片",
                    path:'/card',
                    component:CARD
                }
            ],

        }
    },
    methods:{
        clickPlus:function(){
            this.openBox = !this.openBox;
        },
        transfer:function(url){
            this.$router.push({path:url})
        }
    }
}
</script>
<style lang="scss">
    span{
        font-size:26px;
        line-height: 26px;
    }
</style>