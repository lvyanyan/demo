<template>
  <div class="header">
    <img class="banner" src="@/assets/banner.jpg" alt="logo">
    <div class='native'>
      <Plus style="float:right; width:28px;height:28px;"></Plus>
      <div class="search-icon" style="float:right; width:28px;height:28px;">
       <img src="@/assets/search.png" alt="" @click="openSearch" width="100%" height="100%">
      </div>
    </div>
    <note-list></note-list>
  </div>
</template>

<script>
import Search from '@/components/search'
import Plus from '@/components/plus'
import noteList from '@/components/noteList'
export default {
  name: 'homeHeader',
  components:{
    Search,Plus,noteList
  },
  data () {
    return {
      
    }
  },
  methods:{
    openSearch:function(){
      this.$router.push('/home/search')
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.header{
  width: 100%;
}
img.banner{
  width: 100%;
  display: block;
  margin-bottom: 20px;
}
.search-icon img{
        widows: 26px;
        height: 26px;
    }
</style>
