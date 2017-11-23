<style scoped lang="less">
	.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active 在低于版本 2.1.8 中 */ {
	  opacity: 0
	}
</style>
<template>
	<div class="page">
		<template id="myComponent">
		  <header class="header" id="header">
				<h1 class="title"> {{msg}} </h1>	
				<a class="icon icon-home" href="javascript:;"></a>
			</header>
		</template>
		<div class="content">	
			<my-component-1 hint-sumary="hello beauty" sub-sumary="hi, world"></my-component-1>	
			<my-component-2></my-component-2>	
			<button class="btn btn-default" v-on:click="show = !show">Toggle</button>
		  <transition name="fade">
		    <p v-if="show">hello</p>
		  </transition>
		  <simple-counter></simple-counter>
		  <simple-counter></simple-counter>
		  <simple-counter></simple-counter>
		  <router-link class="btn btn-warning" to="/HelloWorld/1">Go to hello world</router-link>
		</div>
		<router-link tag="li" to="/HelloWorld">
		  <a>/HelloWorld</a>
		</router-link>
	</div>
</template>
<script>
import Vue from 'vue'
	Vue.component('my-component-1',{
		template:'<div class="sumary-title">{{hintSumary}}<span>{{subSumary}}</span></div>',
		props:['hintSumary','subSumary'],
		data(){
			return{
				sumary: 'this is my first component!'
			}
		},
		beforeRouteEnter (to, from, next) {
			console.log(to);
		},
		created(){
			console.log('created');
		},
		mounted(){
			console.log('mounted');
		},
		update(){
			console.log('update');
		},
		destroyed(){
			console.log('destroyed');
		}
	})

	Vue.component('simple-counter',{
		template: '<button class="btn btn-info" v-on:click="counter += 1">{{ counter }}</button>',
		data(){
			return{
				counter: 0
			}
		}
	})

	var Child = {
		template: '<div class="sumary-title">child component!</div>'
	}

	export default {
		name: 'HelloAbby',
		data(){
			return {
				msg: 'welcome to Vue world',
		    isSeen: false,
		    show: true
		  }
		},
		components:{
			'my-component-2': Child
		},
		computed:{
			reverseMsg: function(){
				return this.msg.split('').reverse().join('');
			}
		}
	};
  
</script>
