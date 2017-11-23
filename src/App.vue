<template>
  <div class="app" id="app">  	
    <router-view/>
    <nav-bar v-if="isIndex">
      <nav-item path="/home" labelTitle="首页" icon="home"></nav-item>
      <nav-item path="/tasks" labelTitle="任务" icon="tasks"></nav-item>
      <nav-item path="/list" labelTitle="列表" icon="mytask"></nav-item>
      <nav-item path="/user" labelTitle="我自己" icon="me"></nav-item>
      <nav-item path="/more" labelTitle="更多" icon="more"></nav-item>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import NavItem from '@/components/NavItem'

export default {
  name: 'app',
  data() {
  	return {
  		isIndex: true
  	}
  },
  components:{
  	NavBar,
  	NavItem
  }
}
</script>

