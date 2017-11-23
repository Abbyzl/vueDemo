<template>
	<header :class="classes">
		<h1 class="title"> {{headerTitle}} </h1>	
		<a v-if="isShowIcon" class="icon icon-home" href="javascript:;"></a>
	</header>
</template>

<script>
import cx from 'classnames'

export default {
	props: {
		headerTitle: '',
		defaultCls: {
      type: String,
      default: 'header'
    },
    className: {
      type: String,
      default: ''
    }
	},
	data(){
		return {
			isShowIcon: false
		}
	},
	computed: {
		classes() {
			return cx({
				[this.className]: !!this.className,
        [this.defaultCls]: 1
			})
		}
	}
}

</script>