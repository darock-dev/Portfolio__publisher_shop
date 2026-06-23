// 상품 데이터
const prodData = [
  {id: 1, category: 'fabric', img: '../images/product/f_01.png', color: 'white', name: '부드러운 이불', price: '40,000'},
  {id: 2, category: 'fabric', img: '../images/product/f_02.png', color: 'ivory', name: '포근한 베개', price: '27,000'},
  {id: 3, category: 'fabric', img: '../images/product/f_03.png', color: 'ivory', name: '푹신한 쿠션', price: '13,000'},
  {id: 4, category: 'fabric', img: '../images/product/f_04.png', color: 'lightgray', name: '침구 세트(GRAY)', price: '104,000'},
  {id: 5, category: 'fabric', img: '../images/product/f_05.png', color: 'white', name: '침구 세트(WHITE)', price: '104,000'},
  {id: 6, category: 'fabric', img: '../images/product/f_06.png', color: 'ivory', name: '침구 세트(IVORY)', price: '104,000'},
  {id: 7, category: 'furniture', img: '../images/product/g_01.png', color: 'ivory', name: '편안한 소파', price: '61,000'},
  {id: 8, category: 'furniture', img: '../images/product/g_02.png', color: 'burlywood', name: '수납이 좋은 책장', price: '86,000'},
  {id: 9, category: 'furniture', img: '../images/product/g_03.png', color: 'burlywood', name: '의자 세트(3)', price: '75,000'},
  {id: 10, category: 'furniture', img: '../images/product/g_04.png', color: 'burlywood', name: '간이 테이블', price: '45,000'},
  {id: 11, category: 'furniture', img: '../images/product/g_05.png', color: 'white', name: '옷 걸기에 좋은행거', price: '75,000'},
  {id: 12, category: 'stationery', img: '../images/product/m_01.png', color: 'ivory', name: '수납력이 좋은 필통', price: '8,000'},
  {id: 13, category: 'stationery', img: '../images/product/m_02.png', color: 'burlywood', name: '수납력이 좋은 박스', price: '8,000'},
  {id: 14, category: 'stationery', img: '../images/product/m_03.png', color: 'white', name: '테이프 및 펜 거치대', price: '12,000'},
  {id: 15, category: 'storage', img: '../images/product/s_01.png', color: 'white', name: '다용도 상자', price: '6,000'},
  {id: 16, category: 'storage', img: '../images/product/s_02.png', color: 'burlywood', name: '2단 우드 수납 박스', price: '12,000'},
  {id: 17, category: 'storage', img: '../images/product/s_03.png', color: 'white', name: '투명 수납함', price: '5,000'},
  {id: 18, category: 'storage', img: '../images/product/s_04.png', color: 'white', name: '철제 바구니', price: '5,000'},
  {id: 19, category: 'storage', img: '../images/product/s_05.png', color: 'ivory', name: '수건 바구니', price: '10,000'},
]

/**
 * 메인비주얼 Swiper
 */
const mainVisualSwiper = new Swiper('.main-visual-swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
  },
});

/**
 * 인기상품 Swiper
 */
const bestItemSwiper = new Swiper('.best-item-swiper', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 5,
  spaceBetween: 30
});

/**
 * 상품 목록 표시
 */
document.addEventListener('DOMContentLoaded', () => {
  const prodItemWrap = document.querySelector('.prod-item-wrap');
  const prodTabMenuItems = document.querySelectorAll('.prod-tabmenu-item');

  prodTabMenuItems.forEach(menu => {
    menu.addEventListener('click', () => {
      // 활성화 active 클래스 추가/제거
      prodTabMenuItems.forEach(item => {
        item.classList.remove('active');
      });
      menu.classList.add('active');

      // 클릭한 탭메뉴의 data-category 속성에 따라 데이터 필터링
      const selectedCategory = menu.getAttribute('data-category');
      console.log(selectedCategory);

      if (selectedCategory) {
        let filteredData = [];
        
        if(selectedCategory === 'all') {
          filteredData = prodData;
        } else {
          filteredData = prodData.filter(item => item.category === selectedCategory);
        }
  
        let htmlContent = '';
  
        filteredData.forEach(item => {
          htmlContent += `
            <li data-category="${item.category}">
              <a href="#">
                <img src="${item.img}" alt="${item.name}">
                <div class="prod-color" style="background-color: ${item.color}"></div>
                <div class="prod-name">${item.name}</div>
                <div class="prod-price">${item.price}원</div>
              </a>
            </li>
          `
        });
  
        prodItemWrap.innerHTML = htmlContent;
      }
    });
  });

  // 기본적으로 전체가 클릭되도록 하기
  document.querySelector('.prod-tabmenu-item[data-category="all"]').click();
});