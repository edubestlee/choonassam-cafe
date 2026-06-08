// @ts-nocheck
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- PRODUCT CATALOG DATABASE ---
const MENU_ITEMS = [
  // DRINKS
  {
    id: "d1",
    category: "drinks",
    nameKo: "시그니처 라떼",
    nameEn: "Lumina Signature Latte",
    price: 6.5,
    description: "루미나만의 깊은 에스프레소 풍미와 최고급 귀리유, 실크처럼 부드러운 스팀밀크의 만남",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWfhIQxf8wq7g7kPpTew9vBe4bW8lV5XOGP-JuO9M9AktGmFLz_-UrhehILBQbW1LAo1Seb9bNc29GolzZInvHKWTL5L6MrvNYYW8yhJq58lc8FIZQQhUNjdDduBDpotwp8v9CveYzgWhZZ67yFgNbY5qTETfPZBZ2-4MAnqBqFkb2X0WQfOvmw18PQ6-fhw2TwM8cm6kQDtuEqpDWJ-gv-hf3u49K12LniZOLJ4IIm0Wu9y_NlG7Kdqt1fJeheSfXXrRluh1eLk4O",
    options: { temp: true, sweet: true, extra: ["Extra Shot (+0.5)", "Oat Milk Swap (+0.5)"] }
  },
  {
    id: "d2",
    category: "drinks",
    nameKo: "에테리얼 콜드브루",
    nameEn: "Ethereal Cold Brew",
    price: 6.0,
    description: "장시간 저온 추출하여 쓴맛을 줄이고 화사한 아카시아 향과 초콜릿 뒷맛이 감도는 시그니처 브루",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjki-Eo93ywQ5vBwT0vWLXUWFoXPtfqQHLDpLrrP1Hnb5XH9Xo8jQB15lL0kAy_bxV2O81R2svlK1Ps5LaT7DpHgmiYQgwMKLyFLEG_ayfMlloyi1ga5z_Fsh3OToEmU9sKLhahM52bU-csNs-AeGK6f0dnt1D4lCKh9BF81YekjAXmknuT1hAvgvzimPGaYNlS3GaS5YEgWKS9e0NIXZCrfiy5wgKG-o4UwV0jn9x6AjrHQYzA5l7XwcnOIUD27aX10EyRtUGF3uc",
    options: { temp: false, sweet: false, extra: ["Extra Ice", "Vanilla Syrup Add (+0.5)"] }
  },
  {
    id: "d3",
    category: "drinks",
    nameKo: "선셋 히비스커스 티",
    nameEn: "Sunset Hibiscus Tea",
    price: 6.5,
    description: "상큼한 유기농 히비스커스 베이스에 달콤한 청귤 청과 프레시 시트러스 민트 생잎을 레이어링한 시그니처 블렌드 티",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd9j_tSoEYJE8kXnD4bkY90l0mLkhC3sKMtvTwcVZS453Pz0ebfg60thUzMjF_NhClkab-12rzro9MPI1qrincMU3nmh_m_Lqqeb6bWtfMNyF3H5FHipaxgurTFpF2A3Dln-sOjAU5xOcMbizBhGruiVP0Kk2zuuOUdSn0J200oXI0GOBL1ADIvTzGWNIzvkgzvNsvUHqSMf4LkJGK3Nj42X491l5N63Src5Us8R59yUJvlTj6F3YzEgIO5HQ6WWo94f8vIGykPXub",
    options: { temp: true, sweet: true, extra: ["Less Sweet", "Sparkling Soda Add (+0.5)"] }
  },
  {
    id: "d4",
    category: "drinks",
    nameKo: "싱글 오리진 게이샤 드립",
    nameEn: "Single Origin Geisha Pour-Over",
    price: 8.5,
    description: "파나마 라 에스메랄다 농장의 최상급 게이샤 원두가 가진 재스민 향, 복숭아 밀크 카라멜의 복합적 산미",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL1CT0KSOZmD7XYfJDkWZ_1tQBVo6jTtycfm5r4oRvPOxGjrhV9OecXk7JU5oJBRG6860RhPl1m02dnFcjrywpq0MgmjiWk-4cnOk1gJ0e1WxcjyZpj71nXrAxGhFXBT7anFn4uQjiOrmZHouY3tKqD6DrRAoF2lXeVlnsRHNjC9AAbu6OuUclMDkYH3O_x-e9VnfJGn4vfY9Ng9LosRmI41F-yTDKpvUVbwM65EeYHDvm56zSyR0bcnpF90nbPu7M8OshEXLOkVYx",
    options: { temp: true, sweet: false, extra: ["Hot Hand-Drip", "Ice Hand-Drip"] }
  },

  // FOOD
  {
    id: "f1",
    category: "food",
    nameKo: "아보카도 사워도우 토스트",
    nameEn: "Avocado Sourdough Toast",
    price: 12.0,
    description: "천연 발효 효모종 호밀브레드 위에 풍성하게 얹은 생 아보카도 무스, 레드향 가루, 구운 토마토와 미세 무농약 순",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1Mp7kfxJsETqDJu8ms902o7_mAPFuEgpH5FlIj-2qVMWYUfjh4nAZHegCTR-Qp6YBB4Bft1dGcnrNoB615gzkXKM69HT9yKudvIDPbNa58wCUso3YSb-t5HpGDSZVBVS8X-YW5O3UylQ2xzW0fYItPoESkpQ2eNn5lDCWDyMgd6RlgEyrOR6L6s02LatjXydvjB9YSrB6oGfEiP0p3ht1X9q7fR1SMgrldq8V6wvOG9urek_I-Eda57bKgxrI6d4zOU7siIO7wmlE",
    options: { temp: false, sweet: false, extra: ["Add Poached Egg (+1.5)", "Extra Avocado Wrap (+3.0)"] }
  },
  {
    id: "f2",
    category: "food",
    nameKo: "트러플 에그 야생버섯 파니니",
    nameEn: "Truffle Mushroom Panini",
    price: 13.5,
    description: "로즈마리 치아바타에 훈연 브리 치즈, 양송이 와 야생 버섯 뒤셀, 고급 이탈리아산 유기농 블랙 트러플 페이스트의 풍요로움",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQqkRQmhZ1LbJ-44DsIPSI8TsrEl0YVU81hw7-UkpbWyO2kwHVlJ6qE_Z_22MeJAG5j4iDVq0I66qMV3MwbXFKveLDp5VxyY5q8wyQmyvhaIeAQjIch2zoD84tdBXKAJUyzfRCn7HaFYL7UWUx6vOFhQwPaYE9YnQr9VyGa9VHLPkhwdr0ehif4duJ0tqY9WIUFFtoowDR6Nc2OGlFvAk_jbtqJ8f_kfCbuxIweqBcDmHCARHPCQS4KSRCqPCQHfctVm0Tk4U1yHis",
    options: { temp: false, sweet: false, extra: ["Warmly Pressed", "Side Garden Salad"] }
  },
  {
    id: "f3",
    category: "food",
    nameKo: "크리스피 리코타 가든 샐러드",
    nameEn: "Crispy Ricotta Garden Salad",
    price: 14.0,
    description: "바삭하게 구운 오가닉 가든 야채 믹스, 수제 레몬 허브 리코타 치즈볼, 구운 유기농 생 견과류와 메이플 드레싱",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop",
    options: { temp: false, sweet: false, extra: ["Add Chicken Breast (+2.5)", "Extra dressing (-0.0)"] }
  },

  // DESSERTS
  {
    id: "de1",
    category: "desserts",
    nameKo: "수제 바스크 치즈케이크",
    nameEn: "Handmade Basque Cheesecake",
    price: 7.5,
    description: "스페인 바스크 스타일 프리미엄 크림치즈를 밀가루 없이 고온에서 스모키하게 촉촉하게 구워낸 인생 치즈케이크",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQqkRQmhZ1LbJ-44DsIPSI8TsrEl0YVU81hw7-UkpbWyO2kwHVlJ6qE_Z_22MeJAG5j4iDVq0I66qMV3MwbXFKveLDp5VxyY5q8wyQmyvhaIeAQjIch2zoD84tdBXKAJUyzfRCn7HaFYL7UWUx6vOFhQwPaYE9YnQr9VyGa9VHLPkhwdr0ehif4duJ0tqY9WIUFFtoowDR6Nc2OGlFvAk_jbtqJ8f_kfCbuxIweqBcDmHCARHPCQS4KSRCqPCQHfctVm0Tk4U1yHis",
    options: { temp: false, sweet: false, extra: ["Add Fresh Cream (+1.0)", "Vanilla Gelato Add (+2.0)"] }
  },
  {
    id: "de2",
    category: "desserts",
    nameKo: "발로나 다크 브라우니 & 하겐다즈",
    nameEn: "Valrhona Dark Brownie & Gelato",
    price: 8.0,
    description: "프랑스산 최고급 발로나 과나하 초콜릿으로 깊고 진하게 베이크한 뒤 하겐다즈 프리미엄 바닐라 빈 젤라또를 가득 얹은 디저트",
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=600&auto=format&fit=crop",
    options: { temp: false, sweet: false, extra: ["Warm Serving", "With Chocolate Drizzle"] }
  },
  {
    id: "de3",
    category: "desserts",
    nameKo: "유기농 레몬 필링 타르트",
    nameEn: "Organic Lemon Thyme Tart",
    price: 7.0,
    description: "입에서 살살 녹는 부드러운 사브레 타르트지 속에 생 레몬즙의 생기 가득한 맛을 담아낸 타르트",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=600&auto=format&fit=crop",
    options: { temp: false, sweet: false, extra: ["Slightly Chilled"] }
  },
  {
    id: "de4",
    category: "desserts",
    nameKo: "피스타치오 크렘 브륄레 Financier",
    nameEn: "Pistachio Creme Brulee Financier",
    price: 3.8,
    description: "구운 원버터 풍향 가득한 쫀득 구움과자에 바삭한 피스타치오 캐러멜 토핑과 수제 바닐라 필링 아키텍처",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop",
    options: { temp: false, sweet: false, extra: ["Box of 4 Swap (+14.0)", "Single financier"] }
  }
];

// --- APP STATE ---
let cart = [];
let dbReservations = [];
let currentCategory = "drinks";
let currentDetailItem = null;

// Load existing cart from Local Storage
try {
  const savedCart = localStorage.getItem("lumina_cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
} catch (e) {
  console.error("Local storage read error, initializing empty cart/reservations", e);
}

// Ensure DOM Elements are loaded
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  // Initialize Theme (Dark/Light Mode)
  initTheme();

  // Load Interactive components
  initDrawer();
  initMenuRenderer();
  initCartEngine();
  initReservationsEngine();
  initGalleryLightbox();
  initInteractiveMap();
  initScrollAnimations();
  initNewsletterForm();

  // Show welcome toast
  showToast("LUMINA CAFE에 오신 것을 환영합니다.");
}

// --- Dynamic Theme (Light / Dark Mode Persistent Selection) ---
function initTheme() {
  const rootHtml = document.documentElement;
  const themeToggleContainer = document.getElementById("theme-toggle-container");
  
  if (!themeToggleContainer) return;

  // Insert a stylized Sun/Moon icon toggle beside shopping cart in the menu bar.
  themeToggleContainer.innerHTML = `
    <button id="theme-mode-btn" class="text-primary dark:text-primary-fixed hover:opacity-75 transition-all duration-300 flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10" aria-label="Toggle Dark Mode">
      <span class="material-symbols-outlined text-[24px]">dark_mode</span>
    </button>
  `;

  const themeBtn = document.getElementById("theme-mode-btn");
  const iconSpan = themeBtn.querySelector("span");

  // Load saved theme
  const savedTheme = localStorage.getItem("lumina_theme") || "light";
  applyTheme(savedTheme);

  themeBtn.addEventListener("click", () => {
    const isDarkNow = rootHtml.classList.contains("dark");
    const nextTheme = isDarkNow ? "light" : "dark";
    applyTheme(nextTheme);
    showToast(nextTheme === "dark" ? "고요한 밤의 우드가 감싸는 분위기로 전환되었습니다." : "화사한 크림 톤의 분위기로 전환되었습니다.");
  });

  function applyTheme(theme) {
    if (theme === "dark") {
      rootHtml.classList.add("dark");
      localStorage.setItem("lumina_theme", "dark");
      iconSpan.innerText = "light_mode";
      iconSpan.className = "material-symbols-outlined text-[24px] text-yellow-400";
    } else {
      rootHtml.classList.remove("dark");
      localStorage.setItem("lumina_theme", "light");
      iconSpan.innerText = "dark_mode";
      iconSpan.className = "material-symbols-outlined text-[24px] text-primary";
    }
  }
}

// --- NAVIGATION DRAWER (Curtain Navigation Overlay) ---
function initDrawer() {
  const menuBtn = document.getElementById("menu-mobile-btn");
  const drawer = document.getElementById("drawer");
  const drawerOverlay = document.getElementById("drawer-overlay");
  const closeDrawerBtn = document.getElementById("drawer-close-btn");

  if (!menuBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.remove("-translate-x-full");
    if (drawerOverlay) drawerOverlay.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  function closeDrawer() {
    drawer.classList.add("-translate-x-full");
    if (drawerOverlay) drawerOverlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  menuBtn.addEventListener("click", openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);

  // Link sub navigation anchors beautifully
  const navLinks = drawer.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetHash = link.getAttribute("href");
      closeDrawer();

      if (targetHash && targetHash !== "#") {
        const targetSection = document.querySelector(targetHash);
        if (targetSection) {
          // Smooth custom scroll logic
          setTimeout(() => {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 300);
        }
      }
    });
  });
}

// --- DYNAMIC MENU FILTERING AND CARD RENDERING ---
function initMenuRenderer() {
  const menuGrid = document.getElementById("menu-grid");
  const filterButtons = document.querySelectorAll(".menu-filter-btn");

  if (!menuGrid) return;

  // Initial render representing initial category "drinks"
  renderMenuElements(currentCategory);

  // Bind category filter click triggers
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");
      if (category === currentCategory) return;

      currentCategory = category;

      // Class update for active category tab indicators smoothly
      filterButtons.forEach(b => {
        b.className = "font-label-sm text-label-sm uppercase text-secondary hover:text-primary dark:text-secondary dark:hover:text-primary-fixed hover:-translate-y-0.5 transition-all duration-300 pb-2 border-b-2 border-transparent whitespace-nowrap menu-filter-btn";
      });
      btn.className = "font-label-sm text-label-sm uppercase text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed -translate-y-0.5 transition-all duration-300 pb-2 whitespace-nowrap menu-filter-btn";

      // Apply gorgeous transition animation
      menuGrid.classList.add("opacity-0", "translate-y-4");
      
      setTimeout(() => {
        renderMenuElements(currentCategory);
        menuGrid.classList.remove("opacity-0", "translate-y-4");
      }, 300);
    });
  });
}

function renderMenuElements(category) {
  const menuGrid = document.getElementById("menu-grid");
  if (!menuGrid) return;

  const items = MENU_ITEMS.filter(item => item.category === category);

  menuGrid.innerHTML = items.map((item, i) => {
    return `
      <div class="group cursor-pointer flex flex-col justify-between h-full bg-white dark:bg-surface-dim p-4 rounded bg-surface-container hover:shadow-lg dark:hover:bg-zinc-900 transition-all duration-500 reveal-on-scroll active" data-id="${item.id}">
        <div class="relative aspect-square overflow-hidden mb-6 rounded-sm bg-surface-dim/40">
          <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
               src="${item.image}" alt="${item.nameKo}">
          <div class="absolute bottom-3 right-3 bg-primary/95 text-on-primary px-3 py-1.5 rounded-full scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow">
            <span class="font-label-sm text-[10px] tracking-wider uppercase">Quick Add +</span>
          </div>
        </div>
        <div>
          <div class="dot-leader mb-2">
            <span class="font-headline font-semibold text-[18px] text-primary dark:text-primary-fixed group-hover:text-primary-fixed-dim transition-colors">${item.nameKo}</span>
            <span class="font-body text-[15px] font-semibold text-primary dark:text-primary-fixed">₩${item.price.toFixed(1)}k</span>
          </div>
          <span class="font-body text-xs italic text-secondary dark:text-secondary-fixed-dim mb-2.5 block">${item.nameEn}</span>
          <p class="font-body text-[13px] text-on-surface-variant dark:text-zinc-300 leading-relaxed line-clamp-2">${item.description}</p>
        </div>
      </div>
    `;
  }).join("");

  // Bind individual card click triggers and modal detail displays
  const cards = menuGrid.querySelectorAll('.group');
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const itemId = card.getAttribute("data-id");
      openDetailModal(itemId);
    });
  });
}

// --- ITEM CONFIGURATION & DETAIL MODAL (ADD TO BAG) ---
function openDetailModal(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  currentDetailItem = item;

  // Create highly animated details overlay modal
  const modalContainer = document.createElement("div");
  modalContainer.id = "detail-modal";
  modalContainer.className = "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/50 backdrop-blur-md transition-opacity duration-300";
  
  const optionsHtml = generateOptionsFormHtml(item);

  modalContainer.innerHTML = `
    <div class="relative bg-surface dark:bg-zinc-900 w-full max-w-2xl rounded shadow-2xl overflow-hidden scale-95 opacity-0 animate-[fadeInUp_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards] flex flex-col md:flex-row max-h-[90vh]">
      <!-- Picture -->
      <div class="md:w-1/2 aspect-square md:aspect-auto relative bg-zinc-800">
        <img src="${item.image}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6 text-white text-left">
          <p class="font-label-sm text-[11px] uppercase tracking-widest text-primary-fixed-dim border-b border-white/20 pb-1 mb-2 inline-block">${item.category}</p>
          <h3 class="font-headline text-2xl font-bold">${item.nameKo}</h3>
          <p class="font-body text-xs italic tracking-wide text-white/70">${item.nameEn}</p>
        </div>
      </div>
      <!-- Configurations & Content -->
      <div class="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
        <button id="modal-close-btn" class="absolute top-4 right-4 text-primary dark:text-primary-fixed hover:opacity-70 p-2 rounded-full cursor-pointer hover:bg-black/5 dark:hover:bg-white/10 z-10">
          <span class="material-symbols-outlined">close</span>
        </button>

        <div class="space-y-6 text-left">
          <div>
            <p class="font-body text-sm text-on-surface-variant dark:text-zinc-300 mb-3 leading-relaxed">${item.description}</p>
            <p class="font-headline text-xl font-bold text-primary dark:text-primary-fixed">₩${item.price.toFixed(1)}k</p>
          </div>

          <div class="w-full h-px bg-outline-variant/30"></div>

          <!-- Dynamic Options Form -->
          <form id="item-configuration-form" class="space-y-5">
            ${optionsHtml}

            <!-- Quantity Counter Container -->
            <div>
              <label class="font-label-sm text-xs uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim block mb-2">Quantity</label>
              <div class="flex items-center gap-3">
                <button type="button" id="config-qty-minus" class="w-8 h-8 rounded border border-outline/40 flex items-center justify-center text-primary dark:text-primary-fixed hover:bg-black/5 dark:hover:bg-white/5 font-semibold text-lg cursor-pointer">-</button>
                <input type="number" id="config-qty-input" value="1" min="1" max="10" readonly class="w-12 text-center font-body font-bold text-primary dark:text-primary-fixed bg-transparent border-none focus:ring-0">
                <button type="button" id="config-qty-plus" class="w-8 h-8 rounded border border-outline/40 flex items-center justify-center text-primary dark:text-primary-fixed hover:bg-black/5 dark:hover:bg-white/5 font-semibold text-lg cursor-pointer">+</button>
              </div>
            </div>
          </form>
        </div>

        <div class="mt-8 pt-4 border-t border-outline-variant/30 flex flex-col gap-3">
          <button id="add-to-cart-submit" class="w-full cursor-pointer bg-primary dark:bg-primary-fixed text-on-primary dark:text-on-primary-fixed rounded font-label-md py-3.5 px-6 uppercase tracking-[0.15em] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-[18px]">shopping_bag</span>
            Add to Bag — ₩<span id="computed-modal-total">${item.price.toFixed(1)}</span>k
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modalContainer);
  document.body.classList.add("overflow-hidden");

  // Interaction handlers
  const closeBtn = document.getElementById("modal-close-btn");
  const qtyMinus = document.getElementById("config-qty-minus");
  const qtyPlus = document.getElementById("config-qty-plus");
  const qtyInput = document.getElementById("config-qty-input");
  const computedField = document.getElementById("computed-modal-total");
  const formValues = document.getElementById("item-configuration-form");
  const submitBtn = document.getElementById("add-to-cart-submit");

  function destroyModal() {
    modalContainer.classList.add("opacity-0");
    document.body.classList.remove("overflow-hidden");
    setTimeout(() => {
      modalContainer.remove();
    }, 300);
  }

  closeBtn.addEventListener("click", destroyModal);
  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) destroyModal();
  });

  // Hot/Ice switch options logic
  qtyMinus.addEventListener("click", () => {
    let val = parseInt(qtyInput.value);
    if (val > 1) {
      qtyInput.value = val - 1;
      updateRunningTotal();
    }
  });

  qtyPlus.addEventListener("click", () => {
    let val = parseInt(qtyInput.value);
    if (val < 10) {
      qtyInput.value = val + 1;
      updateRunningTotal();
    }
  });

  // Calculate dynamics based on selected checks
  const formInputs = formValues.querySelectorAll("input");
  formInputs.forEach(input => {
    input.addEventListener("change", updateRunningTotal);
  });

  function updateRunningTotal() {
    let quantity = parseInt(qtyInput.value);
    let extraCosts = 0;

    // Check extra check boxes
    const extras = formValues.querySelectorAll("input[name='extra-options']:checked");
    extras.forEach(box => {
      const match = box.value.match(/\(\+(\d+\.\d+)\)/);
      if (match) {
        extraCosts += parseFloat(match[1]);
      }
    });

    const singlePrice = item.price + extraCosts;
    const finalTotal = singlePrice * quantity;
    computedField.innerText = finalTotal.toFixed(1);
  }

  // Submission
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Compile options data
    const tempChoice = formValues.querySelector("input[name='drink-temp']:checked")?.value || null;
    const sweetChoice = formValues.querySelector("input[name='drink-sweet']:checked")?.value || null;
    const extraChecked = Array.from(formValues.querySelectorAll("input[name='extra-options']:checked")).map(bx => bx.id);

    const configObject = {
      image: item.image,
      id: item.id + "_" + Date.now(), // Unique cart line item ID
      productId: item.id,
      nameKo: item.nameKo,
      nameEn: item.nameEn,
      basePrice: item.price,
      quantity: parseInt(qtyInput.value),
      configStrings: [],
      addedCost: 0
    };

    if (tempChoice) configObject.configStrings.push(tempChoice);
    if (sweetChoice) configObject.configStrings.push(`당도: ${sweetChoice}`);
    
    // Process add costs
    const extras = formValues.querySelectorAll("input[name='extra-options']:checked");
    extras.forEach(box => {
      configObject.configStrings.push(box.id);
      const match = box.value.match(/\(\+(\d+\.\d+)\)/);
      if (match) {
        configObject.addedCost += parseFloat(match[1]);
      }
    });

    addItemToCart(configObject);
    destroyModal();
  });
}

function generateOptionsFormHtml(item) {
  let html = "";

  // 1. Drinks Temp Filter (Hot vs. Ice)
  if (item.options.temp) {
    html += `
      <div>
        <label class="font-label-sm text-xs uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim block mb-2">Options (Temperature)</label>
        <div class="flex gap-4">
          <label class="flex-1 cursor-pointer">
            <input type="radio" value="HOT" name="drink-temp" checked class="sr-only peer">
            <span class="w-full text-center border border-outline-variant peer-checked:border-primary dark:peer-checked:border-primary-fixed peer-checked:bg-primary/5 dark:peer-checked:bg-white/5 py-2.5 px-4 block text-sm transition-all focus:outline-none dark:text-zinc-300">HOT</span>
          </label>
          <label class="flex-1 cursor-pointer">
            <input type="radio" value="ICED" name="drink-temp" class="sr-only peer">
            <span class="w-full text-center border border-outline-variant peer-checked:border-primary dark:peer-checked:border-primary-fixed peer-checked:bg-primary/5 dark:peer-checked:bg-white/5 py-2.5 px-4 block text-sm transition-all focus:outline-none dark:text-zinc-300">ICED</span>
          </label>
        </div>
      </div>
    `;
  }

  // 2. Sweetness choices
  if (item.options.sweet) {
    html += `
      <div>
        <label class="font-label-sm text-xs uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim block mb-2">Options (Sweetness)</label>
        <div class="flex gap-2">
          <label class="flex-1 cursor-pointer">
            <input type="radio" value="기본" name="drink-sweet" checked class="sr-only peer">
            <span class="w-full text-center text-xs border border-outline-variant/60 peer-checked:border-primary dark:peer-checked:border-primary-fixed peer-checked:bg-primary/5 dark:peer-checked:bg-white/5 py-2 block transition-all dark:text-zinc-300">기본</span>
          </label>
          <label class="flex-1 cursor-pointer">
            <input type="radio" value="덜달게" name="drink-sweet" class="sr-only peer">
            <span class="w-full text-center text-xs border border-outline-variant/60 peer-checked:border-primary dark:peer-checked:border-primary-fixed peer-checked:bg-primary/5 dark:peer-checked:bg-white/5 py-2 block transition-all dark:text-zinc-300">덜달게</span>
          </label>
          <label class="flex-1 cursor-pointer">
            <input type="radio" value="단맛없음" name="drink-sweet" class="sr-only peer">
            <span class="w-full text-center text-xs border border-outline-variant/60 peer-checked:border-primary dark:peer-checked:border-primary-fixed peer-checked:bg-primary/5 dark:peer-checked:bg-white/5 py-2 block transition-all dark:text-zinc-300">단맛없음</span>
          </label>
        </div>
      </div>
    `;
  }

  // 3. Extra adds checkboxes
  if (item.options.extra && item.options.extra.length > 0) {
    html += `
      <div>
        <label class="font-label-sm text-xs uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim block mb-2">Custom Additions</label>
        <div class="space-y-2">
          ${item.options.extra.map((opt, i) => {
            return `
              <label class="flex items-center gap-3 cursor-pointer select-none">
                <input type="checkbox" id="${opt}" name="extra-options" value="${opt}" class="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary">
                <span class="font-body text-sm text-on-surface-variant dark:text-zinc-300">${opt}</span>
              </label>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  return html;
}

// --- PERSISTENT SHOPPING CART STATE ENGINE ---
function initCartEngine() {
  const openCartBtn = document.querySelector('button[data-icon="shopping_bag"]');
  const cartDrawer = document.getElementById("cart-drawer");
  const closeCartBtn = document.getElementById("cart-close-btn");
  const cartOverlay = document.getElementById("cart-overlay");
  
  if (!openCartBtn || !cartDrawer) return;

  function openCart() {
    renderCartListHtml();
    cartDrawer.classList.remove("translate-x-full");
    if (cartOverlay) cartOverlay.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  function closeCart() {
    cartDrawer.classList.add("translate-x-full");
    if (cartOverlay) cartOverlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    // Minimize checkout panel context if open
    document.getElementById("checkout-panel").classList.add("hidden");
  }

  openCartBtn.addEventListener("click", openCart);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

  // Sync initial badge indicator count
  updateCartBadge();

  // Connect Checkout Panel slide interactions
  const checkoutToggleBtn = document.getElementById("cart-checkout-trigger");
  const checkoutPanel = document.getElementById("checkout-panel");

  if (checkoutToggleBtn && checkoutPanel) {
    checkoutToggleBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        showToast("장바구니가 비어 있습니다.", "error");
        return;
      }
      checkoutPanel.classList.remove("hidden");
      // Scroll to bottom of panel
      checkoutPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const closeCheckBtn = document.getElementById("checkout-close-btn");
    closeCheckBtn.addEventListener("click", () => {
      checkoutPanel.classList.add("hidden");
    });

    // Transaction form submission
    const checkoutInvoiceForm = document.getElementById("checkout-invoice-form");
    checkoutInvoiceForm.addEventListener("submit", (e) => {
      e.preventDefault();
      processCartCheckout();
    });
  }
}

function addItemToCart(item) {
  // Check if identical item configuration exists
  const existingIndex = cart.findIndex(c => {
    return c.productId === item.productId && 
           JSON.stringify(c.configStrings) === JSON.stringify(item.configStrings);
  });

  if (existingIndex > -1) {
    cart[existingIndex].quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCart();
  updateCartBadge();
  showToast(`성공적으로 장바구니에 담겼습니다. (+${item.quantity})`);
}

function saveCart() {
  localStorage.setItem("lumina_cart", JSON.stringify(cart));
}

function updateCartBadge() {
  // Update header cart counter indicator
  const badge = document.querySelector('button[data-icon="shopping_bag"]');
  if (!badge) return;

  const totalQty = cart.reduce((count, item) => count + item.quantity, 0);

  // Clear existing indicator
  const existingCount = badge.querySelector('.cart-qty-indicator');
  if (existingCount) {
    existingCount.remove();
  }

  if (totalQty > 0) {
    const el = document.createElement("span");
    el.className = "cart-qty-indicator absolute top-3.5 right-1.5 md:right-[54px] w-4.5 h-4.5 rounded-full bg-primary-fixed text-on-primary-fixed font-bold text-[10px] md:text-[10px] text-center flex items-center justify-center font-body shadow-sm border border-surface scale-90 md:scale-100";
    el.innerText = totalQty;
    badge.appendChild(el);
    badge.classList.add("relative");
  }
}

function renderCartListHtml() {
  const container = document.getElementById("cart-items-container");
  const toggleTrigger = document.getElementById("cart-checkout-trigger");
  const computedSubTotalSpan = document.getElementById("computed-cart-subtotal");
  const computedTotalSpan = document.getElementById("computed-cart-total");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center space-y-4">
        <span class="material-symbols-outlined text-4xl text-outline/50 scale-125">shopping_bag</span>
        <p class="font-body text-sm text-secondary">장바구니가 비어 있습니다.</p>
      </div>
    `;
    if (toggleTrigger) toggleTrigger.disabled = true;
    computedSubTotalSpan.innerText = "0.0";
    computedTotalSpan.innerText = "0.0";
    return;
  }

  if (toggleTrigger) toggleTrigger.disabled = false;

  let subtotal = 0;

  container.innerHTML = cart.map((item, idx) => {
    const itemCost = (item.basePrice + item.addedCost) * item.quantity;
    subtotal += itemCost;

    const extrasHtml = item.configStrings.length > 0 
      ? `<div class="flex flex-wrap gap-1 mt-1">${item.configStrings.map(str => `<span class="bg-outline-variant/30 text-on-primary-container text-[10px] font-medium font-body py-0.5 px-2 rounded-sm">${str}</span>`).join("")}</div>`
      : "";

    return `
      <div class="flex gap-4 p-4 items-center bg-surface-container-low/60 rounded">
        <!-- Thumbnail -->
        <img src="${item.image}" class="w-16 h-16 object-cover rounded-sm border border-outline-variant/20 bg-zinc-700">
        <!-- Info -->
        <div class="flex-1 text-left min-w-0">
          <h4 class="font-headline font-semibold text-sm text-primary dark:text-primary-fixed truncate">${item.nameKo}</h4>
          <p class="font-body text-[11px] text-secondary truncate">${item.nameEn}</p>
          ${extrasHtml}
          <!-- Adjustments and remove control -->
          <div class="flex justify-between items-center mt-3">
            <div class="flex items-center gap-2">
              <button class="w-6 h-6 rounded border border-outline-variant/40 flex items-center justify-center font-bold text-xs text-primary dark:text-primary-fixed cursor-pointer hover:bg-black/5" onclick="adjustCartItemQty('${item.id}', -1)">-</button>
              <span class="font-body text-xs font-bold text-primary dark:text-primary-fixed w-5 text-center">${item.quantity}</span>
              <button class="w-6 h-6 rounded border border-outline-variant/40 flex items-center justify-center font-bold text-xs text-primary dark:text-primary-fixed cursor-pointer hover:bg-black/5" onclick="adjustCartItemQty('${item.id}', 1)">+</button>
            </div>
            <span class="font-body text-xs font-bold text-primary dark:text-primary-fixed">₩${itemCost.toFixed(1)}k</span>
          </div>
        </div>
        <!-- Delete Button -->
        <button class="text-on-error-container hover:opacity-75 transition-opacity cursor-pointer p-1 rounded hover:bg-red-50 dark:hover:bg-red-950/20" onclick="removeCartItemById('${item.id}')">
          <span class="material-symbols-outlined text-[18px]">delete</span>
        </button>
      </div>
    `;
  }).join("");

  computedSubTotalSpan.innerText = subtotal.toFixed(1);
  computedTotalSpan.innerText = subtotal.toFixed(1); // Standard free vat representation
}

// Global functions exposed directly to window context so inline buttons can trigger
window.adjustCartItemQty = function(id, offset) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx > -1) {
    const nextQty = cart[idx].quantity + offset;
    if (nextQty <= 0) {
      cart.splice(idx, 1);
      showToast("상품이 제거되었습니다.");
    } else if (nextQty <= 10) {
      cart[idx].quantity = nextQty;
    }
    saveCart();
    updateCartBadge();
    renderCartListHtml();
  }
};

window.removeCartItemById = function(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartBadge();
  renderCartListHtml();
  showToast("상품이 제거되었습니다.");
};

// --- MOCK TRANS CART CHECKOUT AND RECEIPT GENERATION ---
function processCartCheckout() {
  const form = document.getElementById("checkout-invoice-form");
  const name = document.getElementById("checkout-name").value.trim();
  const table = document.getElementById("checkout-table").value.trim();
  const phone = document.getElementById("checkout-phone").value.trim();

  if (!name || !phone) {
    showToast("모든 필수 입력 값을 기입해주세요.", "error");
    return;
  }

  // Pre-loader trigger within Checkout Dialog animations
  const checkoutBtn = form.querySelector("button[type='submit']");
  checkoutBtn.disabled = true;
  checkoutBtn.innerHTML = `<span class="material-symbols-outlined animate-spin-slow">refresh</span> 결제 처리 중...`;

  setTimeout(() => {
    // Computes prices
    const subtotal = cart.reduce((tot, item) => tot + (item.basePrice + item.addedCost) * item.quantity, 0);
    const receiptNum = `LMC-${Math.floor(Math.random() * 90000) + 10000}`;
    const dateFormatted = new Date().toLocaleString();

    // Spawn Receipt popup element
    spawnReceiptModal({
      num: receiptNum,
      date: dateFormatted,
      custName: name,
      tableLoc: table || "테이크아웃",
      phone: phone,
      items: [...cart],
      total: subtotal
    });

    // Reset shopping basket completely
    cart = [];
    saveCart();
    updateCartBadge();

    // Close Cart Panel Drawer gracefully
    document.getElementById("cart-drawer").classList.add("translate-x-full");
    document.getElementById("cart-overlay").classList.add("hidden");
    document.getElementById("checkout-panel").classList.add("hidden");

    // Clean checkout forms
    form.reset();
    checkoutBtn.disabled = false;
    checkoutBtn.innerText = "결제 및 주문";
  }, 1500);
}

function spawnReceiptModal(receiptDetails) {
  const modal = document.createElement("div");
  modal.className = "fixed inset-0 z-[120] flex items-center justify-center p-4 bg-primary/60 backdrop-blur-md";

  const totalWong = Math.floor(receiptDetails.total * 1000).toLocaleString();

  modal.innerHTML = `
    <div class="relative bg-white text-zinc-900 w-full max-w-md p-6 rounded shadow-2xl overflow-hidden font-body scale-95 opacity-0 animate-[fadeInUp_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]">
      <div class="text-center pb-6 border-b border-dashed border-zinc-300">
        <h3 class="font-headline text-3xl tracking-widest text-[#140804] uppercase font-bold">LUMINA CAFE</h3>
        <p class="text-xs uppercase tracking-[0.2em] mt-1 text-zinc-500">Order Receipt</p>
      </div>

      <div class="py-4 space-y-1.5 text-xs text-zinc-600 border-b border-dashed border-zinc-300">
        <div class="flex justify-between"><span>주문 번호</span><span class="font-bold text-zinc-900">${receiptDetails.num}</span></div>
        <div class="flex justify-between"><span>결제 일자</span><span>${receiptDetails.date}</span></div>
        <div class="flex justify-between"><span>주문 고객</span><span>${receiptDetails.custName} 님</span></div>
        <div class="flex justify-between"><span>수령 방법</span><span class="font-bold text-zinc-900">${receiptDetails.tableLoc}</span></div>
      </div>

      <!-- Receipt items -->
      <div class="py-4 border-b border-dashed border-zinc-300 max-h-48 overflow-y-auto space-y-3">
        ${receiptDetails.items.map(it => {
          const formattedConfig = it.configStrings.length > 0 ? ` <span class="text-[10px] text-zinc-400">(${it.configStrings.join(", ")})</span>` : "";
          return `
            <div class="flex justify-between items-start text-xs">
              <div class="text-left font-medium">
                ${it.nameKo}${formattedConfig}
                <div class="text-[11px] text-zinc-500">₩${(it.basePrice + it.addedCost).toFixed(1)}k × ${it.quantity}</div>
              </div>
              <span class="font-bold whitespace-nowrap">₩${((it.basePrice + it.addedCost) * it.quantity).toFixed(1)}k</span>
            </div>
          `;
        }).join("")}
      </div>

      <div class="py-4 space-y-2 mb-6">
        <div class="flex justify-between text-sm font-bold text-zinc-900">
          <span>합계 금액</span>
          <span>₩${receiptDetails.total.toFixed(1)}k</span>
        </div>
        <div class="flex justify-between text-xs text-zinc-500">
          <span>실결제 환산액 (KRW)</span>
          <span class="font-semibold text-zinc-800">~ ₩${totalWong} 원</span>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center p-4 bg-zinc-50 rounded-md border border-zinc-100 gap-2 mb-6">
        <!-- SVG Generated Mock QR -->
        <svg class="w-24 h-24 text-[#140804]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M5 5h30v30H5zm5 5v20h20V10zM12 12h16v16H12zm53-7h30v30H65zm5 5v20h20V10zM72 12h16v16H72zM5 65h30v30H5zm5 5v20h20V70zM12 72h16v16H12zm38-34h10v10H43zm10-14h10v10H53zm10 14h10v10H63zm10 0h12v12H73zm0 24h10v12h10v10H63zm-38 10h10v10H25zm14-24h14v10H39z" />
          <p class="text-[10px] text-zinc-400 mt-2">QR을 통해 매장 모니터 수령 현황을 연동하세요.</p>
        </svg>
      </div>

      <button id="receipt-dismiss-btn" class="w-full bg-primary text-white rounded font-label-md py-3 text-center uppercase tracking-[0.14em] hover:brightness-115 active:scale-95 transition-all cursor-pointer">
        주문 완료 및 닫기
      </button>
    </div>
  `;

  document.body.appendChild(modal);

  const dismiss = document.getElementById("receipt-dismiss-btn");
  dismiss.addEventListener("click", () => {
    modal.classList.add("opacity-0");
    setTimeout(() => {
      modal.remove();
    }, 300);
  });
}

// --- BOOKING ENGINE / RESERVATIONS PORTAL ---
function initReservationsEngine() {
  const reserveButtons = document.querySelectorAll("button:has(span:contains('Reservations')), button.visit-reservations-btn, a[href='#reservations']");
  const quickBookBtn = document.querySelector('button.visit-reservations-btn');

  // Since we also have footer contact pointers, let's create a dynamic Modal reservation system
  const reservationsTrigger = document.querySelector('button:contains("Reservations")') || document.querySelector('.bg-primary:has-text("Reservations")') || document.querySelector('.bg-primary:contains("Reservations")');

  // Let's attach globally to search elements with Reservations text
  document.body.addEventListener("click", (e) => {
    const textContext = e.target.textContent || e.target.innerText;
    if (textContext && textContext.toLowerCase().includes("reservations")) {
      e.preventDefault();
      openBookingModal();
    }
  });
}

function openBookingModal() {
  const modal = document.createElement("div");
  modal.id = "booking-modal";
  modal.className = "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/50 backdrop-blur-md";

  const today = new Date().toISOString().split('T')[0];

  modal.innerHTML = `
    <div class="relative bg-surface dark:bg-zinc-900 w-full max-w-xl p-8 rounded shadow-2xl overflow-y-auto max-h-[90vh] flex flex-col justify-between text-left scale-95 opacity-0 animate-[fadeInUp_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]">
      <button id="booking-close-btn" class="absolute top-4 right-4 text-primary dark:text-primary-fixed hover:opacity-70 p-2 rounded-full cursor-pointer hover:bg-black/5 dark:hover:bg-white/10 z-10">
        <span class="material-symbols-outlined">close</span>
      </button>

      <div class="space-y-6">
        <div class="border-b border-outline-variant/30 pb-4">
          <h3 class="font-headline text-3xl font-bold text-primary dark:text-primary-fixed uppercase tracking-widest mb-1">RESERVATIONS</h3>
          <p class="font-body text-xs text-secondary dark:text-secondary-fixed-dim uppercase tracking-wider">Lumina Sanctuary Seating Planner</p>
        </div>

        <form id="sanctuary-booking-form" class="space-y-5 font-body">
          <!-- Name and mobile input -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="font-label-sm text-[11px] uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim block mb-2">Full Name *</label>
              <input type="text" id="book-name" required placeholder="홍길동" class="w-full bg-transparent border-b border-outline focus:border-primary dark:focus:border-primary-fixed focus:outline-none py-2 text-sm text-primary dark:text-primary-fixed">
            </div>
            <div>
              <label class="font-label-sm text-[11px] uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim block mb-2">Phone Number *</label>
              <input type="tel" id="book-phone" required placeholder="010-1234-5678" class="w-full bg-transparent border-b border-outline focus:border-primary dark:focus:border-primary-fixed focus:outline-none py-2 text-sm text-primary dark:text-primary-fixed">
            </div>
          </div>

          <!-- Number of Guests, Seating Zone choices -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="font-label-sm text-[11px] uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim block mb-2">Number of Guests *</label>
              <select id="book-guests" required class="w-full bg-surface dark:bg-zinc-800 border border-outline-variant/60 rounded py-2.5 px-3 text-sm text-primary dark:text-primary-fixed focus:outline-none">
                <option value="1">1 Guest</option>
                <option value="2" selected>2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5-6">5-6 Guests (Group table)</option>
              </select>
            </div>
            <div>
              <label class="font-label-sm text-[11px] uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim block mb-2">Seating Area Preference *</label>
              <select id="book-zone" required class="w-full bg-surface dark:bg-zinc-800 border border-border rounded py-2.5 px-3 text-sm text-primary dark:text-primary-fixed focus:outline-none">
                <option value="Ethereal Garden">에테리얼 야외 정원 (Glass Greenhouse)</option>
                <option value="Espresso Sanctuary" selected>내부 에스프레소 북앤라운지</option>
                <option value="Panoramic Terrace">2층 테라스 전경 라운지</option>
              </select>
            </div>
          </div>

          <!-- Calendar slot date and Hour selections -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="font-label-sm text-[11px] uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim block mb-2">Date *</label>
              <input type="date" id="book-date" min="${today}" value="${today}" required class="w-full bg-surface dark:bg-zinc-800 border border-outline-variant/60 rounded py-2 px-3 text-sm text-primary dark:text-primary-fixed focus:outline-none">
            </div>
            <div>
              <label class="font-label-sm text-[11px] uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim block mb-2">Time Slot *</label>
              <select id="book-time" required class="w-full bg-surface dark:bg-zinc-800 border border-border rounded py-2.5 px-3 text-sm text-primary dark:text-primary-fixed focus:outline-none">
                <option value="10:00">10:00 AM</option>
                <option value="11:30">11:30 AM</option>
                <option value="13:00" selected>01:00 PM</option>
                <option value="14:30">02:30 PM</option>
                <option value="16:00">04:00 PM</option>
                <option value="17:30">05:30 PM</option>
                <option value="19:00">07:00 PM</option>
                <option value="20:30">08:30 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label class="font-label-sm text-[11px] uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim block mb-2">Special Notes & Dietary Restrictions</label>
            <textarea id="book-notes" placeholder="특별 요구사항(조용하고 아늑한 구석 자리, 휠체어 전용 경사로, 알레르기 유의사항 등)이 있다면 자유롭게 적어주세요." rows="2" class="w-full bg-transparent border border-outline/30 rounded py-2 px-3 text-sm text-primary dark:text-primary-fixed placeholder:text-secondary/40 focus:outline-none focus:border-primary dark:focus:border-primary-fixed"></textarea>
          </div>

          <button type="submit" class="w-full cursor-pointer bg-primary dark:bg-primary-fixed text-on-primary dark:text-on-primary-fixed font-label-md py-4 rounded uppercase tracking-[0.2em] hover:brightness-115 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg">
            <span>Confirm Sanctuary Booking</span>
          </button>
        </form>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.classList.add("overflow-hidden");

  const closeBtn = document.getElementById("booking-close-btn");
  closeBtn.addEventListener("click", () => {
    modal.remove();
    document.body.classList.remove("overflow-hidden");
  });

  const form = document.getElementById("sanctuary-booking-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("book-name").value.trim();
    const phone = document.getElementById("book-phone").value.trim();
    const guests = document.getElementById("book-guests").value;
    const zone = document.getElementById("book-zone").value;
    const date = document.getElementById("book-date").value;
    const time = document.getElementById("book-time").value;
    const notes = document.getElementById("book-notes").value.trim();

    if (!name || !phone) return;

    // Simulate database write
    const ticketId = `RSV-${Math.floor(Math.random() * 900000) + 100000}`;
    const newBookingObj = { ticketId, name, phone, guests, zone, date, time, notes };

    dbReservations.push(newBookingObj);

    // Fade out booking and show Ticket
    modal.classList.add("opacity-0");
    setTimeout(() => {
      modal.remove();
      spawnReservationTicketModal(newBookingObj);
    }, 300);
  });
}

function spawnReservationTicketModal(resObj) {
  const modal = document.createElement("div");
  modal.className = "fixed inset-0 z-[120] flex items-center justify-center p-4 bg-primary/60 backdrop-blur-md";

  modal.innerHTML = `
    <div class="relative bg-[#fff8f4] text-zinc-900 w-full max-w-md p-8 rounded-lg shadow-2xl overflow-hidden font-body text-center scale-95 opacity-0 animate-[fadeInUp_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]">
      <div class="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
        <span class="material-symbols-outlined text-3xl">verified</span>
      </div>

      <h3 class="font-headline text-3xl mt-2 font-bold text-[#140804] uppercase tracking-wider">BOOKING CONFIRMED</h3>
      <p class="text-xs uppercase tracking-[0.15em] text-emerald-600 font-bold mb-6">루미나 예약이 최종 확정되었습니다.</p>

      <div class="bg-surface border border-outline-variant/30 rounded-md p-4 text-xs space-y-3 text-zinc-700 text-left mb-6">
        <div class="flex justify-between border-b border-dashed border-zinc-200 pb-2">
          <span class="text-zinc-500">예약 넘버</span>
          <span class="font-bold text-zinc-900">${resObj.ticketId}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-zinc-500">성함</span>
          <span class="font-semibold text-zinc-900">${resObj.name} 님</span>
        </div>
        <div class="flex justify-between">
          <span class="text-zinc-500">인원 수</span>
          <span class="font-semibold text-zinc-900">${resObj.guests} 명</span>
        </div>
        <div class="flex justify-between">
          <span class="text-zinc-500">좌석 에리어</span>
          <span class="font-bold text-zinc-900 text-primary">${resObj.zone}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-zinc-500">예약 일자</span>
          <span class="font-semibold text-zinc-900">${resObj.date}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-zinc-500">예약 시간</span>
          <span class="font-bold text-zinc-900 text-primary">${resObj.time} PM</span>
        </div>
      </div>

      <p class="text-xs text-zinc-500 mb-6 leading-relaxed">
        * 예약 당일 10분 이상 공지 없이 지각 하시는 경우 테이블 슬롯 배정이 원활하지 못하거나 자동 예약 취소 처리가 일어날 수도 있습니다.
      </p>

      <button id="ticket-close-btn" class="w-full bg-[#140804] text-white rounded font-label-md py-3 text-center uppercase tracking-[0.14em] hover:opacity-90 active:scale-95 transition-all cursor-pointer">
        예약창 닫기
      </button>
    </div>
  `;

  document.body.appendChild(modal);

  const close = document.getElementById("ticket-close-btn");
  close.addEventListener("click", () => {
    modal.remove();
    document.body.classList.remove("overflow-hidden");
    showToast("예약 확정 코드가 저장되었습니다. 예약일에 방문하여 확인해 주세요.");
  });
}

// --- IMMERSIVE GALLERY LIGHTBOX PANEL ---
function initGalleryLightbox() {
  const images = document.querySelectorAll("section:has(h2:contains('GALLERY')) img, section:has(h2:contains('INSTAGRAM')) img");

  // Keep a pool of all found gallery images to support swipe slides next/prev
  const imgPool = Array.from(images).map(img => {
    return {
      src: img.getAttribute("src"),
      alt: img.getAttribute("data-alt") || img.getAttribute("alt") || "Lumina Lifestyle Space"
    };
  });

  images.forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      const src = img.getAttribute("src");
      const foundIdx = imgPool.findIndex(item => item.src === src);
      openLightboxAt(foundIdx);
    });
  });

  function openLightboxAt(index) {
    if (index < 0 || index >= imgPool.length) return;

    let currentIndex = index;

    const lightbox = document.createElement("div");
    lightbox.className = "fixed inset-0 z-[110] bg-black/95 flex flex-col items-center justify-between p-6 overflow-hidden select-none";

    lightbox.innerHTML = `
      <!-- Toolbar -->
      <div class="w-full flex justify-between items-center text-white/70">
        <span class="font-body text-xs tracking-widest uppercase"><span id="lightbox-counter">${currentIndex + 1}</span> / ${imgPool.length}</span>
        <button id="lightbox-close" class="hover:text-white pointer-events-auto p-2 cursor-pointer transition-colors">
          <span class="material-symbols-outlined text-[28px]">close</span>
        </button>
      </div>

      <!-- Main Slider Area -->
      <div class="flex-1 w-full max-w-4xl flex items-center justify-between gap-4">
        <button id="lightbox-prev" class="text-white/60 hover:text-white p-3 hover:bg-white/10 rounded-full cursor-pointer transition-colors">
          <span class="material-symbols-outlined text-[36px]">chevron_left</span>
        </button>

        <div class="flex-1 flex flex-col items-center justify-center max-h-[70vh]">
          <img id="lightbox-img" src="${imgPool[currentIndex].src}" class="max-w-full max-h-[60vh] object-contain rounded-sm shadow-2xl scale-95 opacity-0 transition-all duration-300">
          <p id="lightbox-caption" class="text-white/80 font-body text-sm mt-6 text-center max-w-xl leading-relaxed">${imgPool[currentIndex].alt}</p>
        </div>

        <button id="lightbox-next" class="text-white/60 hover:text-white p-3 hover:bg-white/10 rounded-full cursor-pointer transition-colors">
          <span class="material-symbols-outlined text-[36px]">chevron_right</span>
        </button>
      </div>

      <!-- Thumbnails Track bar -->
      <div class="w-full max-w-2xl overflow-x-auto no-scrollbar flex justify-center gap-3 py-2 border-t border-white/10">
        ${imgPool.map((item, i) => `
          <button class="lightbox-thumb-btn w-12 h-12 rounded-sm overflow-hidden flex-shrink-0 cursor-pointer border-2 transition-all ${i === currentIndex ? 'border-primary-fixed scale-110' : 'border-transparent opacity-60'}" data-idx="${i}">
            <img src="${item.src}" class="w-full h-full object-cover">
          </button>
        `).join("")}
      </div>
    `;

    document.body.appendChild(lightbox);
    document.body.classList.add("overflow-hidden");

    const imgElement = document.getElementById("lightbox-img");
    const captionElement = document.getElementById("lightbox-caption");
    const counterElement = document.getElementById("lightbox-counter");

    // Trigger initial fade-in transition
    setTimeout(() => {
      imgElement.classList.remove("scale-95", "opacity-0");
    }, 50);

    function updateSlide(nextIndex) {
      if (nextIndex < 0 || nextIndex >= imgPool.length) return;
      currentIndex = nextIndex;

      imgElement.classList.add("opacity-0", "scale-95");

      setTimeout(() => {
        imgElement.src = imgPool[currentIndex].src;
        captionElement.innerText = imgPool[currentIndex].alt;
        counterElement.innerText = currentIndex + 1;

        // Thumb bar sync
        lightbox.querySelectorAll(".lightbox-thumb-btn").forEach((btn, idx) => {
          if (idx === currentIndex) {
            btn.className = "lightbox-thumb-btn w-12 h-12 rounded-sm overflow-hidden flex-shrink-0 cursor-pointer border-2 border-primary-fixed scale-110";
          } else {
            btn.className = "lightbox-thumb-btn w-12 h-12 rounded-sm overflow-hidden flex-shrink-0 cursor-pointer border-2 border-transparent opacity-60";
          }
        });

        imgElement.classList.remove("opacity-0", "scale-95");
      }, 250);
    }

    // Prev/Next handlers
    document.getElementById("lightbox-prev").addEventListener("click", () => {
      const idx = currentIndex === 0 ? imgPool.length - 1 : currentIndex - 1;
      updateSlide(idx);
    });

    document.getElementById("lightbox-next").addEventListener("click", () => {
      const idx = currentIndex === imgPool.length - 1 ? 0 : currentIndex + 1;
      updateSlide(idx);
    });

    // Close
    document.getElementById("lightbox-close").addEventListener("click", () => {
      lightbox.remove();
      document.body.classList.remove("overflow-hidden");
    });

    // Thumb clicks
    lightbox.querySelectorAll(".lightbox-thumb-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-idx"));
        updateSlide(idx);
      });
    });

    // Keyboard controls
    const keyHandler = (e) => {
      if (!document.body.contains(lightbox)) {
        document.removeEventListener("keydown", keyHandler);
        return;
      }
      if (e.key === "ArrowLeft") {
        const idx = currentIndex === 0 ? imgPool.length - 1 : currentIndex - 1;
        updateSlide(idx);
      } else if (e.key === "ArrowRight") {
        const idx = currentIndex === imgPool.length - 1 ? 0 : currentIndex + 1;
        updateSlide(idx);
      } else if (e.key === "Escape") {
        lightbox.remove();
        document.body.classList.remove("overflow-hidden");
        document.removeEventListener("keydown", keyHandler);
      }
    };
    document.addEventListener("keydown", keyHandler);
  }
}

// --- CUSTOM INTERACTIVE MAP NODE (LOCATIONS / WALKING DIRECTIONS) ---
const LANDMARKS = [
  { id: "cafe", name: "LUMINA CAFE", type: "cafe", icon: "water_drop", cx: 50, cy: 50 },
  { id: "station", name: "압구정로데오역 5번 출구", type: "metro", icon: "subway", cx: 20, cy: 20, dir: "도보 8분 : 수령 직진 후 한밭타워 삼거리 우회전 오백미터 직진" },
  { id: "park", name: "도산공원 산책로 정문", type: "nature", icon: "park", cx: 80, cy: 30, dir: "도보 3분 : 공원 입구 사잇길 로데오 명품 골목 자전거 보도 이용" },
  { id: "valet", name: "루미나 발레파킹 부스", type: "parking", icon: "local_parking", cx: 48, cy: 75, dir: "자차 운행 시 : 부스 앞에 발레 키를 맡기시고 옐로 보도 진입" }
];

function initInteractiveMap() {
  const mapContainer = document.querySelector('div[data-location]');
  if (!mapContainer) return;

  // Let's replace the whole placeholder container with a beautiful, highly detailed SVG grid and Landmark directory.
  mapContainer.innerHTML = `
    <div class="w-full h-full flex flex-col md:flex-row relative">
      <!-- SVG Map Grid (70%) -->
      <div class="relative flex-1 bg-[#fff8f4] dark:bg-zinc-800 border-r border-[#dbc1b6]/30 overflow-hidden h-72 md:h-full">
        <!-- SVG Canvas -->
        <svg id="interactive-map-canvas" class="w-full h-full text-zinc-900" viewBox="0 0 100 100" preserveAspectRatio="none">
          <!-- Background Grid lines -->
          <defs>
            <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#d2c3be" stroke-width="0.15" stroke-opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid-pattern)"/>

          <!-- Stylized Road Blocks drawing -->
          <rect x="5" y="5" width="40" height="30" rx="2" fill="#dbc1b6" fill-opacity="0.1" stroke="#d2c3be" stroke-width="0.25"/>
          <rect x="55" y="5" width="40" height="35" rx="2" fill="#dbc1b6" fill-opacity="0.1" stroke="#d2c3be" stroke-width="0.25"/>
          <rect x="5" y="45" width="35" height="50" rx="2" fill="#dbc1b6" fill-opacity="0.1" stroke="#d2c3be" stroke-width="0.25"/>
          <rect x="50" y="60" width="45" height="35" rx="2" fill="#dbc1b6" fill-opacity="0.1" stroke="#d2c3be" stroke-width="0.25"/>

          <!-- Main Roads corridors (dashed grid lines) -->
          <line x1="0" y1="40" x2="100" y2="40" stroke="#817570" stroke-width="0.5" stroke-dasharray="1,1" stroke-opacity="0.6"/>
          <line x1="48" y1="0" x2="48" y2="100" stroke="#817570" stroke-width="0.5" stroke-dasharray="1,1" stroke-opacity="0.6"/>

          <!-- Render Directions SVG path overlays dynamically here -->
          <path id="direction-svg-path" d="" fill="none" class="stroke-primary dark:stroke-primary-fixed" stroke-width="0.8" stroke-dasharray="2,2" stroke-opacity="0.9" style="transition: d 0.6s ease;"></path>
        </svg>

        <!-- Vector Pins Absolute markers -->
        ${LANDMARKS.map(lm => {
          const colorClass = lm.id === 'cafe' ? 'bg-primary text-on-primary' : 'bg-surface border border-outline-variant text-[#140804]';
          const shadowStyle = lm.id === 'cafe' ? 'shadow-lg ring-4 ring-primary-fixed/40 scale-110' : 'shadow hover:scale-105';
          return `
            <button id="map-pin-${lm.id}" class="map-interactive-pin absolute -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center p-2.5 ${colorClass} ${shadowStyle}" 
                    style="left: ${lm.cx}%; top: ${lm.cy}%;" data-idx="${lm.id}" title="${lm.name}">
              <span class="material-symbols-outlined text-[18px] md:text-[20px] pb-[1px]">${lm.icon}</span>
            </button>
          `;
        }).join("")}
      </div>

      <!-- Directory Sidebar elements (30%) -->
      <div class="w-full md:w-56 p-4 md:p-6 bg-surface dark:bg-zinc-900 border-t md:border-t-0 flex flex-col justify-between text-left h-48 md:h-full overflow-y-auto">
        <div class="space-y-4">
          <h4 class="font-headline font-bold text-sm tracking-wide text-primary dark:text-primary-fixed uppercase border-b border-outline-variant/30 pb-2">Location Directory</h4>
          <div class="flex flex-col gap-2.5">
            ${LANDMARKS.map(lm => {
              const activeClass = lm.id === 'cafe' ? 'border-[#140804] bg-[#140804]/5' : '';
              return `
                <button class="map-sidebar-nav-btn text-left p-2.5 rounded border border-transparent hover:border-outline-variant hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer flex items-center gap-3 min-w-0" data-idx="${lm.id}">
                  <span class="material-symbols-outlined text-[18px] text-primary dark:text-primary-fixed">${lm.icon}</span>
                  <div class="truncate">
                    <p class="font-body text-xs font-semibold text-primary dark:text-primary-fixed truncate">${lm.name}</p>
                    <p class="font-body text-[10px] text-secondary truncate uppercase tracking-widest">${lm.type}</p>
                  </div>
                </button>
              `;
            }).join("")}
          </div>
        </div>

        <div id="map-direction-box" class="mt-4 p-3 bg-primary-fixed/20 dark:bg-yellow-950/20 rounded border border-outline-variant/30 text-xs text-primary dark:text-primary-fixed text-left leading-relaxed">
          <p class="font-bold mb-1 font-body">📍 안내 정보</p>
          <p id="map-direction-text" class="text-[11px] font-body text-secondary dark:text-zinc-300">경로를 선택하시면 압구정 로데오 명사로부터 루미나 카페까지의 도보 보행 실시간 추천 길안내 라인이 SVG 맵위에 그려집니다.</p>
        </div>
      </div>
    </div>
  `;

  // Interaction handlers
  const pins = mapContainer.querySelectorAll(".map-interactive-pin");
  const listItems = mapContainer.querySelectorAll(".map-sidebar-nav-btn");
  const path = mapContainer.querySelector("#direction-svg-path");
  const text = mapContainer.querySelector("#map-direction-text");

  function activateMapLandmark(id) {
    // Reset active elements styling
    pins.forEach(p => {
      const isCafe = p.getAttribute("data-idx") === "cafe";
      p.className = `map-interactive-pin absolute -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center p-2.5 ${isCafe ? "bg-primary text-on-primary shadow-lg ring-4 ring-primary-fixed/40 scale-110" : "bg-surface border border-outline-variant text-[#140804] shadow hover:scale-105"}`;
    });
    listItems.forEach(li => {
      li.className = "map-sidebar-nav-btn text-left p-2.5 rounded border border-transparent hover:border-outline-variant hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer flex items-center gap-3 min-w-0";
    });

    const activePin = mapContainer.querySelector(`#map-pin-${id}`);
    const activeItem = mapContainer.querySelector(`.map-sidebar-nav-btn[data-idx="${id}"]`);
    const landmark = LANDMARKS.find(lm => lm.id === id);

    if (activePin) {
      activePin.classList.add("scale-125");
      if (id !== "cafe") {
        activePin.className += " border-primary dark:border-primary-fixed ring-2 ring-primary-fixed/30";
      }
    }
    if (activeItem) {
      activeItem.className += " border-outline dark:border-primary-fixed bg-black/5 dark:bg-white/5";
    }

    // Draw dynamic route from active element to Cafe (cx: 50, cy: 50)
    if (landmark) {
      if (landmark.id === 'cafe') {
        path.setAttribute("d", "");
        text.innerText = "루미나 카페는 서울 강남 도산대로 명품거리 중심가에 입점해 있어 자차 혹은 대중교통 발레 접근이 용이합니다.";
      } else {
        // Draw elegant curve to 50,50
        const startX = landmark.cx;
        const startY = landmark.cy;
        const midX = (startX + 50) / 2;
        const midY = (startY + 50) / 2 + (startY > 50 ? -12 : 12); // subtle bend curve
        const d = `M ${startX} ${startY} Q ${midX} ${midY} 50 50`;
        path.setAttribute("d", d);
        // Display guide directions
        text.innerText = landmark.dir;
      }
    }
  }

  pins.forEach(pin => {
    pin.addEventListener("click", () => {
      const idx = pin.getAttribute("data-idx");
      activateMapLandmark(idx);
    });
  });

  listItems.forEach(item => {
    item.addEventListener("click", () => {
      const idx = item.getAttribute("data-idx");
      activateMapLandmark(idx);
    });
  });

  // Activate cafe default
  activateMapLandmark("cafe");
}

// --- VIEWPORT SCROLL ANIMATIONS ENTRANCE DETECTION ---
function initScrollAnimations() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  
  if (elements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  elements.forEach(el => {
    observer.observe(el);
  });
}

// --- FOOTER NEWSLETTER SUBSCRIPTION COMPONENT ---
function initNewsletterForm() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = form.querySelector("input[type='email']");
    if (!emailInput) return;

    const email = emailInput.value.trim();
    if (email) {
      showToast("뉴스레터 구독이 성공적으로 완료되었습니다! 매주 에테리얼 커피 가이드가 제공됩니다.");
      form.reset();
    }
  });
}

// --- DYNAMIC REUSABLE TOAST NOTIFICATION ENGINE ---
function showToast(message, type = "success") {
  let container = document.getElementById("toast-holder");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-holder";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toastCard = document.createElement("div");
  // Material symbols
  const icon = type === "success" ? "done" : "priority_high";
  const bgStyle = type === "success" ? "bg-[#140804] text-white" : "bg-red-900 text-white";

  toastCard.className = `p-4 max-w-sm rounded shadow-xl flex items-center gap-3 font-body text-xs leading-normal transform translate-y-4 opacity-0 animate-[fadeInUp_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards] ${bgStyle}`;
  toastCard.innerHTML = `
    <span class="material-symbols-outlined text-[18px]">${icon}</span>
    <span class="font-medium flex-1 text-left">${message}</span>
  `;

  container.appendChild(toastCard);

  // Auto-dismiss timers
  setTimeout(() => {
    toastCard.classList.add("opacity-0", "translate-y-[-10px]");
    setTimeout(() => {
      toastCard.remove();
    }, 400);
  }, 4000);
}
