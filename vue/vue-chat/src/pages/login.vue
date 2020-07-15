<template>
  <div class="login">
    	<div class="scrollbar-macosx">
		<div class="main container ">
			<div class="jumbotron">
				<h1></h1>
				<p class="user_portrait">
					<img portrait_id="1" :src="'/static/images/user/'+targetId+'.png'" alt="portrait_1">
				</p>
				<p class="select_portrait">
					<img v-for="id in imgList" :key="id"  :portrait_id="id" @click="setImg(id)" :src="'/static/images/user/'+id+'.png'" alt="portrait_1" :class="id==targetId?'t':''">
				</p>
					<div class="input-group">
						<input type="text" class="form-control" placeholder="输入你的昵称，不填随机昵称……">
						<span class="input-group-btn">
							<button id="login" class="btn btn-default" type="button">
								<span class="glyphicon glyphicon-arrow-right"></span>
							</button>
						</span>
					</div>
			</div>
			<div class="footer">
				<!-- <span>21274</span>人在线热聊中！ -->
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      targetId:1,
      imgList:[1,2,3,4,5,6,7,8,9,10,11,12]
    }
  },
  methods:{
    setImg(id){
      this.targetId = id
    }
  }
}
</script>

<style>
</style>
