// 상품 데이터
const prodData = [
  {id: 1, category: 'fabric', img: '../images/product/f_01.png', color: 'white', name: '부드러운 이불', price: 40000},
  {id: 2, category: 'fabric', img: '../images/product/f_02.png', color: 'ivory', name: '포근한 베개', price: 27000},
  {id: 3, category: 'fabric', img: '../images/product/f_03.png', color: 'ivory', name: '푹신한 쿠션', price: 13000},
  {id: 4, category: 'fabric', img: '../images/product/f_04.png', color: 'lightgray', name: '침구 세트(LIGHT GRAY)', price: 104000},
  {id: 5, category: 'fabric', img: '../images/product/f_05.png', color: 'white', name: '침구 세트(WHITE)', price: 104000},
  {id: 6, category: 'fabric', img: '../images/product/f_06.png', color: 'ivory', name: '침구 세트(IVORY)', price: 104000},
  {id: 20, category: 'fabric', img: '../images/product/f_07.png', color: 'lightgray', name: '침구 세트(GRAY)', price: 104000},
  {id: 7, category: 'furniture', img: '../images/product/g_01.png', color: 'ivory', name: '편안한 소파', price: 61000},
  {id: 8, category: 'furniture', img: '../images/product/g_02.png', color: 'burlywood', name: '수납이 좋은 책장', price: 86000},
  {id: 9, category: 'furniture', img: '../images/product/g_03.png', color: 'burlywood', name: '의자 세트(3)', price: 75000},
  {id: 10, category: 'furniture', img: '../images/product/g_04.png', color: 'burlywood', name: '간이 테이블', price: 45000},
  {id: 11, category: 'furniture', img: '../images/product/g_05.png', color: 'white', name: '옷 걸기에 좋은행거', price: 75000},
  {id: 21, category: 'furniture', img: '../images/product/g_06.png', color: 'burlywood', name: '식탁의자 세트', price: 215000},
  {id: 22, category: 'furniture', img: '../images/product/g_07.png', color: 'burlywood', name: '옷 수납장', price: 85000},
  {id: 23, category: 'furniture', img: '../images/product/g_08.png', color: 'burlywood', name: '물품 수납장', price: 75000},
  {id: 24, category: 'furniture', img: '../images/product/g_09.png', color: 'burlywood', name: '편안한 의자', price: 55000},
  {id: 12, category: 'stationery', img: '../images/product/m_01.png', color: 'ivory', name: '수납력이 좋은 필통', price: 8000},
  {id: 13, category: 'stationery', img: '../images/product/m_02.png', color: 'burlywood', name: '수납력이 좋은 박스', price: 8000},
  {id: 14, category: 'stationery', img: '../images/product/m_03.png', color: 'white', name: '테이프 및 펜 거치대', price: 12000},
  {id: 25, category: 'stationery', img: '../images/product/m_04.png', color: 'burlywood', name: '다용도 거치대', price: 16000},
  {id: 15, category: 'storage', img: '../images/product/s_01.png', color: 'white', name: '다용도 상자', price: 6000},
  {id: 16, category: 'storage', img: '../images/product/s_02.png', color: 'burlywood', name: '2단 우드 수납 박스', price: 12000},
  {id: 17, category: 'storage', img: '../images/product/s_03.png', color: 'white', name: '투명 수납함(S)', price: 5000},
  {id: 18, category: 'storage', img: '../images/product/s_04.png', color: 'white', name: '철제 바구니', price: 5000},
  {id: 19, category: 'storage', img: '../images/product/s_05.png', color: 'ivory', name: '수건 바구니', price: 10000},
  {id: 26, category: 'storage', img: '../images/product/s_06.png', color: 'white', name: '투명 수납함(L)', price: 5000},
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
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  }
});

/**
 * 아코디언 메뉴 표시/숨김
 */
const accordionTitles = document.querySelectorAll('.accordion-title');
accordionTitles.forEach(title => {
  title.addEventListener('click', () => {
    const currentItem = title.parentElement;  // 선택된 아코디언메뉴의 부모요소
    const isActive = currentItem.classList.contains('active');  // 해당 부모요소에서 active 클래스가 있는지 확인

    // 선택된 아코디언 메뉴의 Active 여부에 따라 클래스명 추가/제거
    if(!isActive) {
      currentItem.classList.add('active');
    } else {
      currentItem.classList.remove('active');
    }
  });
});

/**
 * 상품 목록 표시
 */
document.addEventListener('DOMContentLoaded', () => {
  const prodItemWrap = document.querySelector('.prod-item-wrap');
  const prodTabMenuItems = document.querySelectorAll('.prod-tabmenu-item');
  const allCategoryButtons = document.querySelectorAll('[data-category]');

  // 모든 data-category 속성을 가진 요소를 불러와서 순환
  allCategoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedCategory = button.getAttribute('data-category');  // 선택된 카테고리

      if (selectedCategory) {
        // 탭메뉴에서 활성화 active 클래스 제거
        prodTabMenuItems.forEach(item => {
          item.classList.remove('active');
        });

        // 탭메뉴에서 선택된 카테고리 속성을 가진 요소를 변수에 담음
        const targetTab = document.querySelector(`.prod-tabmenu-item[data-category="${selectedCategory}"]`);
        if (targetTab) {
          // 해당 변수에 avtice 클래스 추가
          targetTab.classList.add('active');
        }

        // 필터링된 상품 데이터를 담을 변수
        let filteredData = [];
        
        // 카테고리 필터링
        if(selectedCategory === 'all') {
          filteredData = prodData;
        } else {
          filteredData = prodData.filter(item => item.category === selectedCategory);
        }

        // 색상 필터링
        const checkedColors = Array.from(document.querySelectorAll('input[name=color]:checked')).map(cb => cb.value);
        if (checkedColors.length > 0) {
          filteredData = filteredData.filter(item => checkedColors.includes(item.color));
        }

        // 가격 필터링
        const priceInputs = document.querySelectorAll('.price-input');
        const minPrice = priceInputs[0].value ? priceInputs[0].value : 0;
        const maxPrice = priceInputs[1].value ? priceInputs[1].value : Infinity;

        filteredData = filteredData.filter(item => {
          return item.price >= minPrice && item.price <= maxPrice;
        })
  
        let htmlContent = '';
  
        // 필터링된 데이터를 htmlContent에 넣음
        if (filteredData.length === 0 ) {
          htmlContent = '<li class="prod-list-none">조건에 맞는 상품이 없습니다.</li>'
        } else {
          filteredData.forEach(item => {
            htmlContent += `
              <li data-category="${item.category}">
                <a href="#">
                  <div class="prod-image"><img src="${item.img}" alt="${item.name}"></div>
                  <div class="prod-color" style="background-color: ${item.color}"></div>
                  <div class="prod-name">${item.name}</div>
                  <div class="prod-price">${item.price.toLocaleString()}원</div>
                </a>
              </li>
            `
          });
        }

  
        prodItemWrap.innerHTML = htmlContent;
      }
    });
  });

  // 상품보기 버튼 클릭
  // (필터링이 카테고리 버튼 클릭시 작동중이기 때문에 참고하여 로직을 짬)
  const filterSubmitButton = document.querySelector('.filter-footer button');
  filterSubmitButton.addEventListener('click', () => {
    const activeTab = document.querySelector('.prod-tabmenu-item.active');
    if (activeTab) {
      activeTab.click();
    }
  })

  // 기본적으로 전체 카테고리가 클릭되도록 하기
  document.querySelector('.prod-tabmenu-item[data-category="all"]').click();
});