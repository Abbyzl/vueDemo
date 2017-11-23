<template>
	<router-link class="nav-item" :to='{path: path}' replace>
		<i class="icon" :class="iconClass"></i>
		<span class="nav-title" v-text="labelTitle"></span>
	</router-link>
</template>

<script>
	export default {
		props: {
			path: '',
			icon: '',
			labelTitle: ''
		},
		computed: {
			iconClass(){
				return `icon-${this.icon}`
			}
		}
	}
</script>