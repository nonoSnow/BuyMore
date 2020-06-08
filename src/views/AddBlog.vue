<template>
  <div style="background:#f7f7f8;">
    <!--第一部分-->
    <div class="container">
      <div id="my-float" class="blog-top position-relative m-auto blog-r">
        <div class="float-left">
          <h5 class="my-color font-weight-bold pt-3">购物博客</h5>
        </div>
        <div class="float-right"> 
          <ul class="breadcrumb bg-transparent blog-a">
            <li class="breadcrumb-item"><a class="font-italic text-small" href="">购物博客</a></li>
            <li class="breadcrumb-item"><a class="font-italic text-small" href="">发布博客</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!--第二部分-->
    <div class="container">
      <div class="row mt-5 no-gutters justify-content-center">
        <div class="col-lg-9 col-sm-12">
          <div class="row">
            <div class="col-sm-12 ml-lg-3 mb-3 p-5" style="background: #fff;box-shadow: 0 1px 4px 0 rgba(0,0,0,0.1);">
              <div class="d-flex flex-column">
                <!-- <form method="post" enctype="multipart/form-data" action="http://127.0.0.1:4000/single">
                  <div class="d-flex mb-2">
                    <label class="col-2">图片：</label>
                    <p><input type="file"  id="imageFile" class="my-color" name="imageFile"></p>
                    <p><input type="submit" class="btn my-color" value="上传"></p>
                  </div>
                </form> -->
                <form>
                  <div class="d-flex mb-2">
                    <label class="col-2">图片：</label>
                    <p><input type="file"  id="imageFile" class="my-color" name="imageFile" @change="getFile($event)"></p>
                  </div>
                
                  <div class="d-flex mb-2">
                    <label class="col-2">类型：</label>
                    <label class="my-color"><input type="radio" class="m-2" name="season" value="春日爆款" checked>春日爆款</label>
                    <label class="my-color"><input type="radio" class="m-2" name="season" value="夏日爆款">夏日爆款</label>
                    <label class="my-color"><input type="radio" class="m-2" name="season" value="秋日爆款">秋日爆款</label>
                    <label class="my-color"><input type="radio" class="m-2" name="season" value="冬日爆款">冬日爆款</label>
                  </div>
                  <div class="d-flex mb-5">
                  <label class="col-2">主题：</label><textarea maxlength="200" placeholder="最多200字" class="form-control" rows="3"  v-model="blogcomment"></textarea>
                  </div>
                  <div class="d-flex justify-content-end mt-2 mb-2">
                    <input type="reset" name="reset" style="display: none;" />
                    <button type="button" @click="submitBlog" class="btn my-color">发表博客</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      blogcomment:'',
      file:'' //上传图片
    }
  },
  methods:{
    //上传图片
    getFile(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },
    
    //发表博客
    submitBlog(){
      var fileBlog=document.getElementById('imageFile').value;
      var season=document.querySelector('input[name="season"]:checked').value;
      console.log(season);
      if(this.file==''){
        this.$message({
          message: '请选择图片！',
          type: 'warning'
        });
        return
      }else if(!this.blogcomment){
        this.$message({
          message: '请输入博客内容！',
          type: 'warning'
        });
        return
      }

      let formData = new FormData();
      formData.append('imageFile', this.file); //图片
      formData.append('season', season); //类型
      formData.append('userImg', ''); //用户头像
      formData.append('userName', ''); //用户名
      formData.append('blogcomment', this.blogcomment); //博客主题

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      this.axios.post('/addblog',formData,config).then(res=>{
        console.log(res.data);
          if(res.data.code){
          this.$confirm('发布博客成功', '提示', {
            confirmButtonText: '返回博客',
            cancelButtonText: '继续发布',
            type: 'success'
          }).then(() => {
            this.$router.push('/blog')
          }).catch(() => {
            $("input[type=reset]").trigger("click");
          });
        }
      })
    }
  }
}
</script>
<style scoped>
.my-black{background-color: #343a40;}
/*第一部分*/
.my-background-color{background-color: #ea2c58;}
.my-color{color: #ea2c58;}
.blog-button-1{color: #ea2c58;background-color:#fff;border:1px solid #ea2c58;margin-left: 10px;}
.blog-router{
  color: #ea2c58;background-color:#fff;border:1px solid #fff;margin-left: 10px;
  padding: 5px 10px;
  border-radius: 5px;
}
.blog-router:hover{
  border:1px solid #ea2c58;
}
.text-small{font-size: 0.8rem;}
.btn-black{background-color: #424242;color: #fff;font-weight: bold;}
.btn-black:hover,.btn-black:active{background-color: #ea2c58;}
/*第二部分*/
#my-float:after{
	content: "";
	display: block;
	clear: both;
}
a{text-decoration: none;vertical-align: middle;}
.blog-a a:link,.blog-a a:visited{color: #aaa;}
.blog-a a:hover,.blog-a a .active{color: #ea2c58;text-decoration: none;}

.blog-a a span{color: #aaa;}
.blog-a a span:hover,.blog-a a span .active{color: #ea2c58;text-decoration: none;}
.blog-blog{padding:10px;background: #fff;margin-bottom:10px;box-shadow: 0 1px 4px 0 rgba(0,0,0,0.1);}
.blog-top{padding-left:10px;background: #fff;margin-bottom:10px;box-shadow: 0 1px 4px 0 rgba(0,0,0,0.1);}

.blog-comment{
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
/*第三部分*/
.bg-grey{background-color: #eee;}
.navbar-light .navbar-nav .nav-link:hover,.navbar-light .navbar-nav .nav-link.active{color: #ea2c58;}
/*第四部分*/
.my-bg-img{
	background-image: url(../assets/images/header-title.jpg);
	background-repeat: no-repeat;
	background-size: cover;
}
.my-bg-img .my-rgb{background-color: rgba(19, 17, 17, 0.5);height: 250px;position: relative;}
/*第五部分*/
@media (min-width: 992px){
	.blog-r{
		top: -20px; width: 90%;
	}
}
.blog-a .breadcrumb-item+.breadcrumb-item::before{content: ">>";color: #aaa;font-size: 0.8rem;}
/*第六部分*/
.my_card{background-color: rgba(19, 17, 17, 0.5);left: 0;top:-67px;color: #fff;width: 48%;
border-top: 3px solid #ea2c58;}

.btn-hover:link,.btn-hover:visited{color: #aaa;}
.btn-hover:hover,.btn-hover .active{color: #fff;background-color: #ea2c58;}

.relative-top{margin-top: -50px;align-items: center;justify-content: space-between;}
/*第七部分*/
.page-link{border-radius: 0.25rem;border-color:#aaa; background:transparent; }
.page-link:hover:not(:disabled){background-color: #ea2c58;color: #fff;}
.page-link:disabled{color: #aaa;}
.page-link:active{background-color: #ea2c58;color: #fff;}
.page-item+.page-item{margin-left: 1rem;}

.my_header{
	width: 100%;
	border:0;
}
.my_footer{
	width: 100%;
	border:0;
}
@media (max-width: 575px){
	.my_footer{height:2712px;}
	.my_header{height:521px;}
}
@media (min-width: 576px){
	.my_footer{height:2712px;}
	.my_header{height:497px;}
}
@media (min-width: 768px){
	.my_header{height:473px;}
	.my_footer{height: 1600px;}
}
@media (min-width: 992px){
	.my_header{height:387px;}
	.my_footer{height: 1012px;}
}
</style>