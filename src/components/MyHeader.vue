<template>
  <div>
    <!-- top-header -->
    <div class=" top-header row no-gutters">
      <!-- top-header-left -->
      <ul class="list-unstyled d-flex col-4 top-header-left">
        <li class="ml-3"><a href="#">Facebook</a></li>
        <li class="ml-3"><a href="#">Wechat</a></li>
        <li class="ml-3"><a href="#">Twitter</a></li>
      </ul>
      <!-- top-header-right -->
      <ul class="top-header-right  breadcrumb bg-transparent col-lg-4 col-sm-6 ">
        <li class="breadcrumb-item">
          <a href="">
            <img src="../assets/images/care.png" alt="">
          </a>
        </li>
        <li class="breadcrumb-item">
          <a href="">
            <img src="../assets/images/order.png" alt="">
          </a>
        </li>
        <li class="breadcrumb-item">
          <a href="">
            <img src="../assets/images/shop_car.png" alt="">
          </a>
        </li>
        <li class="breadcrumb-item">
          <a class="text-muted text_small font-weight-bold" href="">Login</a>
        </li>
        <li class="breadcrumb-item">
          <a class="text-muted text_small font-weight-bold" href="">Register</a>
        </li>
      </ul>
    </div>
  <!-- middle-header -->
    <div class="row no-gutters justify-content-between mt-5 mb-3">
      <!-- middle-header-left -->
      <div class="col-lg-3 col-md-6 col-sm-12">
        <a class="text-danger font-weight-bold buy1" href="">BUY
          <span class="more">MORE</span>
        </a>
      </div>
      <div class="col-lg-3 col-md-4">
        <div class="dropdown mt-1">
          <a data-toggle="dropdown" class="btn btn-light" href="">Shopping Cart 
            <img class="pl-3" src="../assets/images/shop_car.png">
            <span class="shopping-car ml-3">3</span>
          </a>
          <ul class="dropdown-menu">
            <li class="shop-content"><a href="#">Cart Empty !!!</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- bottom-header -->
    <div class="row no-gutters justify-content-between mt-2">
      <div class="navbar btn-light navbar-light navbar-expand-lg col-lg-8  ">
        <!-- 在小屏下显示，大屏隐藏的按钮(折叠部分的触发按钮) -->
        <button data-toggle="collapse" data-target="#content" class="navbar-toggler">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- 在大屏横向显示，在小屏纵向显示的导航菜单 -->
        <div id="content" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a data-toggle="dropdown" class="nav-link font-weight-bold" href="#">HOME</a>
              <ul class="dropdown-menu">
                <li><a href="" target="_top">Home 1</a></li>
                <li><a href="#">Home 2</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a data-toggle="dropdown" class="nav-link font-weight-bold" href="">PRODUCTS</a>
              <ul class="dropdown-menu">
                <li><a href="" target="_top">Product Grid</a></li>
                <li><a href="" target="_top">Product List</a></li>
                <li><a href="#">Recommended Item</a></li>
                <li><a href="" target="_top">Single Product</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a data-toggle="dropdown" class="nav-link font-weight-bold" href="">BLOG</a>
              <ul class="dropdown-menu">
                <li><a href="" target="_top">Blog page 1</a></li>
                <li><a href="">Blog page 2</a></li>
                <li><a href="">Blog page 3</a></li>
                <li><a href="">single page 1</a></li>
                <li><a href="">single page 2</a></li>
              </ul>
            </li>
            <li class="nav-item"><a class="nav-link font-weight-bold" href="">FAQ</a></li>
            <li class="nav-item"><a class="nav-link font-weight-bold" href="">ABOUT</a></li>
            <li class="nav-item"><a class="nav-link font-weight-bold" href="">CONTACT</a></li>
          </ul>
        </div>
      </div>
      <div class=" input-group col-lg-4 col-md-6 col-sm-8">
        <div class="row no-gutters w-100">
          <input class="bg-danger nav-search form-control" type="text" placeholder="Search Your Item Here">
        </div>
      </div>
    </div>
    <div class="header-title">
      <div class="card bg-transparent text-center pb-5">
        <h2 class="pt-5 text-white">SINGLE PRODUCT</h2>
        <span class="text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Donec odio.</span><span class="text-white">Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
/*top-header样式*/
.top-header{
    background: #333333;
	min-height: 35px;
    position: relative;
}
a,a:hover{
    color: #fff;
    text-decoration: none;
}
.top-header-left{
    position: absolute;
    top: 5px;
    left: 10px;
}
.top-header-right{
    position: absolute;
    top: -5px;
    right: 10px;
}
.breadcrumb-item + .breadcrumb-item::before{
	content:"|";
}
.text_small{
	font-size: 0.8rem;
}
@media (max-width: 576px){
	.top-header-right{
		display: none;
	}
}
/*middle-header样式*/
.buy1,.more{
	font-size: 30px;
	color: #000;
}
.shopping-car{
	width: 25px;
	height: 25px;
	background-color: #ea2c58;
	border-radius: 50%;
	color: #fff;
	display: inline-block;
	padding-top: 1px;
	text-align: center;
}
.shop-content>a{
	color: #faa;
	font-size: 16px;
	text-decoration: none;
}
/*bottom-header样式*/
.nav-item{
	position: relative;
}
#content .dropdown-menu{
	position: absolute;
	left: 0;
	top: 40px;
}
#content .dropdown-menu a{
	font-size: 15px;
	color: #333;
	font-weight: 500;
	text-decoration: none;
		}
#content>ul>li>a{
	font-size: 13px;
	color: #333;
}
#content>ul a:hover{
	background-color: transparent;
	color: #ea2c58;
}
/*header-title样式*/
.header-title{
	background: url(../assets/images/header-title.jpg);
	background-size: 100%;
}
</style>