
const SwiperTag = [
    ["상품명1","상품설명","상품가격"],
    ["상품명2","상품설명","상품가격"],
    ["상품명3","상품설명","상품가격"],
    ["상품명4","상품설명","상품가격"],
    ["상품명5","상품설명","상품가격"],
    ["상품명6","상품설명","상품가격"],
    ["상품명7","상품설명","상품가격"],
    ["상품명8","상품설명","상품가격"]
  ]
  const SwiperImg = [
    ["section11"],
    ["section22"],
    ["section33"],
    ["section44"],
    ["section55"],
    ["section66"],
    ["section77"],
    ["section88"]
]
  let swiper1 = '';
  for(var i=0; i< 8; i++){
    swiper1 += ` 
    <div class="swiper-slide">
    <div class="">
    <img src="img/${SwiperImg[i]}.jpg" alt="" class="img-fluid">
    </div>
    <ul class="d-flex flex-column align-items-center">
    <li class="S-font1">${SwiperTag[i][0]}</li>
    <li class="S-font1">${SwiperTag[i][1]}</li>
    <li class="S-font1">${SwiperTag[i][2]}</li>
    </ul>
    </div>
  `}
  
  var swiperWrapper = document.getElementsByClassName("swiper-wrapper")[0];
swiperWrapper.innerHTML = swiper1;
  // $(".swiper-wrapper").html(swiper1);

  // document.



var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopedSlides : 3,
    slidesPerView: 4,
    grabCursor: true,
    slidesPerGroup : 1,
   
    centeredSlides: true,
    spaceBetween: -150,
  });