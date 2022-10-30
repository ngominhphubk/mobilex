let header = document.querySelector('.header-container');
let backTop = document.querySelector('#scrollTop');
window.onscroll = () => {
    if(window.scrollY > 100)
    header.classList.add('pined')
    if(window.scrollY <= 0)
    header.classList.remove('pined')
    if(window.scrollY > 300)
    backTop.classList.add('show')
    else
    backTop.classList.remove('show')
}
//handle search form
let searchOpen = document.querySelector('#open-header-search')
let searchBox = document.querySelector('#searchbox-1')
let btnSearchClose = document.querySelector('#close-searchbox-1')
searchOpen.onclick = function(e) {
searchBox.classList.add('active')
};
btnSearchClose.onclick = function(e) {
searchBox.classList.remove('active')
};
// handle on sale > sale group
(_=>{
let root = document.querySelector('.sale-group')
if(!!root) {
let panes = root.querySelectorAll(".pannel-item");
let tabs = root.querySelectorAll(".tab-item");
let tabActive = root.querySelector(".tab-item.active");
panes.forEach((pane, index) => {
  const tab = tabs[index];

  pane.onclick = function () {
    root.querySelector(".pannel-item.active").classList.remove("active");
    root.querySelector(".tab-item.active").classList.remove("active");

    this.classList.add("active");
    tab.classList.add("active");
  };
});}
})()
//   on sale slider
 function onSaleSlider(){
    $(document).ready(function(){
      $('.sale-slider-1').slick({
       slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 100,
nextArrow: `<button class="slick-pre pull-left"><i class="fa fa-arrow-right"></i></button>`,
prevArrow: `<button class="slick-next pull-right"><i class="fa fa-arrow-left"></i></button>`,
responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
]
    });
  })
}
// mobile tasks
// m-menu handle
let mBtnOpen = document.querySelector('.m-main-menu')
let mMainNav = document.querySelector('.m-main-nav')
let mContent = document.querySelector('.m-main-nav >.content')
let mBtnClose = document.querySelector('.m-main-nav >.content #btn-close')
mBtnOpen.onclick = (e) => {
  mMainNav.classList.add('m-active')
}
mMainNav.onclick = (e) => {
e.target.classList.remove('m-active')
}
mContent.onclick = (e) => {
  e.stopPropagation()
}
mBtnClose.onclick = (e) => {
mMainNav.classList.remove('m-active')
}
// sub-menu handle
var btnOpen = document.querySelectorAll('.m-nav-item.open-more');
var btnClose = document.querySelectorAll('.m-sub-menu .btn-back');
var mSubMenu = document.querySelectorAll('.m-nav-item .m-sub-menu');
for(let index=0; index< btnOpen.length; index++) {
  btnOpen[index].onclick = (e)=>{
    mSubMenu[index].classList.add('m-active')
  }
  btnClose[index].onclick = (e)=>{
    e.stopPropagation()
    mSubMenu[index].classList.remove('m-active')
  }
  }
//cart preview handle
let btnOpenCart = document.querySelector('#m-open-cart')
let btnCloseCart = document.querySelector('#cart-close')
let cart = document.querySelector('#cart-preview')
let cartWrapper = document.querySelector('.cart-preview-wrapper')
btnOpenCart.onclick = (e)=> {
  if(window.innerWidth < 1200)
  {
    e.preventDefault()
    cart.classList.add('m-active')
  }
}
cartWrapper.onclick = (e) => e.stopPropagation() 
cart.onclick = (e)=> {
  cart.classList.remove('m-active')
}
btnCloseCart.onclick = (e)=> {
  cart.classList.remove('m-active')
}
//shop page
// shop setup view handle
function setupViewHandle(){
  var btnOpen = document.querySelector('.pro-view-section #m-setup__btn-open')
  if(!!btnOpen) {
  var btnClose = document.querySelector('.pro-view-section .m-setup-tab .btn-close')
  var tab = document.querySelector('.pro-view-section .m-setup-tab')
  var tabInner = document.querySelector('.pro-view-section .m-setup-tab >.inner')
  btnOpen.onclick = e => tab.classList.add('m-active')
  tabInner.onclick = e => e.stopPropagation()
  btnClose.onclick = e => tab.classList.remove('m-active')
  tab.onclick = e => tab.classList.remove('m-active')
}
}
// preview product handle 
function previewProduct(){
  var btnOpens = document.querySelectorAll('a.btn-show[id^="btn-preview-box"]')
  var len = btnOpens.length
  if(len){
    btnOpens.forEach(btnOpen => {
    var previewBox = btnOpen.parentElement.parentElement.querySelector('.pro-preview')
    var inner = previewBox.querySelector('.inner')
    var btnClose = previewBox.querySelector('.btn-close')
    btnOpen.onclick = e=> {
      e.preventDefault()
      previewBox.classList.add('active')
    }
    inner.onclick = e=> e.stopPropagation()
    btnClose.onclick = e=> previewBox.classList.remove('active')
    previewBox.onclick = e=> e.target.classList.remove('active')
  })
    }
}