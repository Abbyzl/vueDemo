<template>
	<div class="container page">
		<nav-bar class="home-bar">
			<nav-item path="/rank" labelTitle="排行榜" icon="rank"></nav-item>
			<nav-item path="/user/tasks" labelTitle="我的任务" icon="task"></nav-item>
			<nav-item path="/invite" labelTitle="邀请有奖" icon="invitefriend"></nav-item>
		</nav-bar>
		<div class="content-container">
			<card class="style-1">
				<card-item type="item">					
					<card-item type="header">
						<card-item type="avatar-wrap">
							<img class="avatar" src="../assets/images/avatar/abby.png" alt="">
						</card-item>						
						<card-item type="inner-item">
							<h3 class="title">Abby</h3>
							<p class="txt-desc">August 6,1990</p>
						</card-item>
					</card-item>					
					<card-item type="content">
						<img class="thums" src="../assets/images/banner/banner6.png" alt="">
						<p class="desc-box">Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>
					</card-item>
				</card-item>
				<card-item type="item">
					<card-item class="card-title text-upper" type="header">Wait a minute.</card-item>
					<card-item type="content">
						<img class="thums" src="../assets/images/banner/banner2.png" alt="">
						<p class="desc-box">It’s often necessary to create social cards within an application. Using a combination of different items in a card you can achieve this.</p>
					</card-item>
				</card-item>
				<card-item type="item">
					<card-item type="header">
						<card-item type="avatar-wrap">
							<img class="avatar" src="../assets/images/avatar/avatar2.png" alt="">
						</card-item>						
						<card-item type="inner-item">
							<h3 class="title">mooseki</h3>
							<p class="txt-desc">January 15,1989</p>
						</card-item>
					</card-item>					
					<card-item type="content">
						<img class="thums" src="../assets/images/banner/banner3.png" alt="">
						<p class="desc-box">Many icons have both Material Design and iOS versions. Ionic will automatically use the correct version based on the platform.</p>
					</card-item>
					<card-item type="footer">
						<card-item type="footer-item">Love</card-item>
						<card-item type="footer-item">hate</card-item>
						<card-item type="footer-item">just so so</card-item>
					</card-item>
				</card-item>
			</card>
		</div>
	</div>
</template>
<script>
import NavBar from '@/components/NavBar'
import NavItem from '@/components/NavItem'
import Card from '@/components/Card'
import CardItem from '@/components/CardItem'

export default {
	name: 'home',
	components:{
  	NavBar,
  	NavItem,
  	Card,
  	CardItem
  }
}
</script>