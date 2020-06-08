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
            <li class="breadcrumb-item"><a class="font-italic text-small" href="">首页</a></li>
            <li class="breadcrumb-item"><a class="font-italic text-small active" href="">购物博客</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!--第二部分-->
    <div class="container">
      <div class="row mt-5 no-gutters">
        <!--左边列表-->
        <div class="col-lg-3 col-sm-12 mb-3 pr-lg-3 blog-a">
          <div class="list-group">
            <li class="bg-grey font-weight-bold list-group-item"><span class="my-color">...</span>  操作指南</li>
            <router-link to="/addblog" class="list-group-item my-background-color"><img style="float: left;" src="../assets/images/fabu.png" alt=""><span style="float: right;color:#fff">发布博客</span></router-link>
            <!-- <a href="#" class="list-group-item">春装<span style="float: right;">></span></a>
            <a href="#" class="list-group-item">夏装<span style="float: right;">></span></a>
            <a href="#" class="list-group-item">秋装<span style="float: right;">></span></a>
            <a href="#" class="list-group-item">冬装<span style="float: right;">></span></a>
            <a href="#" class="list-group-item">全部<span style="float: right;">></span></a> -->
          </div>
          <div class="list-group my-3">
            <li class="font-weight-bold list-group-item"><span class="my-color">...</span>  SIZE</li>
            <li class="list-group-item">
              <div class="d-flex justify-content-center">
                <button class="btn btn-sm btn-light btn-hover">XS</button>
                <button class="btn btn-sm btn-light btn-hover">SM</button>
                <button class="btn btn-sm btn-light btn-hover">MD</button>
                <button class="btn btn-sm btn-light btn-hover">LG</button>
                <button class="btn btn-sm btn-light btn-hover">XL</button>
              </div>
            </li>
          </div>
          <div class="list-group my-3">
            <li class="bg-grey font-weight-bold list-group-item"><span class="my-color">...</span>  ON SALE</li>
            <ul class="list-unstyled px-3 my-2 lh50">
              <li class="font13 h124 d-flex justify-content-start border-bottom color444" v-for="(p,i) of littlelist" :key="i">
                <div><img :src="'http://127.0.0.1:8080/assets'+p.pic" :data-lid="p.lid" @click="todetails"></div>
                <div class="w100h73">
                  <p class="h17">{{p.title}}</p>
                  <small class="h17">¥{{p.price}}</small>
                </div>
              </li>
            </ul>
          </div>
          <div class="list-group">
            <li class="bg-grey font-weight-bold list-group-item"><span class="my-color">...</span>  DISCOUNT OFFER</li>
            <li class="list-group-item p-0 position-relative">
              <!-- <img class="w-100" src="../assets/img/50off.png"> -->
              <div class="my-background-color text-white text-center position-absolute w-75" style="bottom: 0;left: 10%;">
                <h6 class="pt-2">50% OFF SHIRTS</h6>
              </div>
            </li>
          </div>
        </div>
        <!--右边内容-->
        <div class="col-lg-9 col-sm-12">
          <div class="row">
            <div class="col-md-6 col-sm-12" v-for="(item,index) of blogLists" :key="index">
              <div class="d-flex flex-column blog-blog">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex p-1" style="align-items: center;">
                    <img style="width: 60px;height: 60px;border-radius: 50px;margin-right:10px;" :src="item.blog_shop_user_img">
                    <span v-text="item.blog_shop_user_name"></span>
                  </div>
                  <!-- <div class="d-flex">
                    <button class="btn blog-button-1">关注 TA</button>
                  </div> -->
                </div>
                <img class="w-100" :src="item.blog_product_img">
                <div class="position-relative my_card text-center font-weight-bold px-3">
                  <p class="mb-0 h4" v-text="item.blog_product_day"></p>
                  <p class="h4 my-color" v-text="`${item.blog_product_year}/${item.blog_product_month}`"></p>
                </div>
                <div class="d-flex relative-top">
                  <div class="d-flex" style="align-items: center;">
                    <span class="ml-2 my-color" style="background:rgba(255, 102, 153,0.2);padding:0 5px;" v-text="`#${item.blog_grade}#`"></span>
                  </div>
                  <div class="d-flex">
                    <button class="blog-router" @click="addZan(item.id,item.blog_zan)"><img src="../assets/images/zan.png"> <span v-text="item.blog_zan"></span></button>
                  </div>
                </div>
                <p class="text-muted text-small p-0" v-text="item.blog_comment"></p>
              </div>
            </div>
            
          </div>
          <!--分页-->
          <ul class="pagination">
            <li class="page-item">
              <button class="page-link my-color" v-if="page!==1" @click="loadData(page-1)">上一页</button>
              <button class="page-link" disabled v-else>上一页</button>
            </li>
            <li class="page-item" v-for="index of pagecount" :key="index" :class="page==index?'active':''">
              <button class="page-link" @click="loadData(index)">{{index}}</button>
            </li>
            <li class="page-item">
              <button class="page-link my-color" v-if="page!==pagecount"  @click="loadData(page+1)">下一页</button>
              <button class="page-link" disabled v-else>下一页</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      blogLists:[{
        id:"",  //产品id
        blog_product_img:"",  //产品图片
        blog_product_year:"", //评论年份
        blog_product_month:"", //评论月份
        blog_product_day:"", //评论日期
        blog_shop_user_img:"", //用户头像
        blog_shop_user_name:"", //用户姓名
        blog_grade:"", //用户打分
        blog_zan:"", //点赞数量
        blog_comment:"",  //评论
      }],
      //存储默认的页码(或者说是页码的初始值)
      page:1,
      //存储总页数
      pagecount:0,
      //左边栏
      littlelist:[]
    }
  },
  methods:{
    // 左边栏请求
    todetails(event){
      var lid=event.target.dataset.lid
      this.$router.push('/details/'+lid);
    },
    getlittlelist(){
      var obj={num:2}
      this.axios.get("/getlittlelist",{params:obj}).then(res=>{
        var data=res.data.result;
        this.littlelist = data;
        console.log(this.littlelist)
      })
    },

    // 增加 点赞
    addZan(id,value){
      let val=parseInt(value)+1;
      this.axios.get('/addZan',{params:{id:id,zan:val}}).then(res=>{
        if(res.data.code==1){
          this.axios.get('/blog',{params:{page:1}}).then(res=>{
            let blogLists=res.data.result;
            this.blogLists=blogLists;
          })
        }
      })
    },
    //加载数据
    loadData(page){
      console.log(page);
      this.page=page;
      this.axios.get('/blog',{params:{page}}).then(res=>{
        console.log(res.data.result);
        let blogLists=res.data.result;
        this.blogLists=blogLists;
      })
    }
  },
  mounted(){
    // 渲染blogLists数据
    this.axios.get('/blog',{params:{page:1}}).then(res=>{
      console.log(res.data);
      this.pagecount=res.data.pagecount;
      let blogLists=res.data.result;
      this.blogLists=blogLists;
    })

    //左边栏请求
    this.getlittlelist();
  }
}
</script>

<style scoped>
/* 左边栏样式 */
.lh50{line-height: 50px;}
.font13{font-size: 13px;}
.h124{height: 124px;}
.color444{color: #444444;}
div:nth-child(3) li img{
    width: 4.375rem;
    height: 4.475rem;
    margin-top: 25px;
    margin-right: 10px;
}
.w100h73{
	width: 6.25rem;
	/* height: 4.5625rem; */
	display: flex;
	flex-wrap:wrap;
	flex-direction: column;
	margin-top: 16px;
}
.h17{
	height: 17px;
}

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
/* 限制显示字数 */
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