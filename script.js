"use strict";

/* =========================================================
   StayHaven Pro - script.js

   EASY CUSTOMIZATION: for a new hotel, only edit CONFIG below
   (name, phone, WhatsApp, rooms, prices, menu, offers, reviews).
   To use real photos, put the image path/URL in any "img" field.
   ========================================================= */
const CONFIG = {
  name: "StayHaven",
  phone: "+91 00000 00000",
  whatsapp: "910000000000",            // country code + number, no + or spaces
  email: "hello@stayhaven.com",
  address: "12 Lake View Road, Your City, 000000",
  checkInTime: "12:00 PM",
  checkOutTime: "11:00 AM",
  currency: "₹",
  gst: 12,                             // GST % added on top of room charges

  // Demo coupon codes: pct = discount %, minNights = minimum stay
  coupons: {
    STAY10:      { pct: 10, minNights: 1 },
    WEEKEND15:   { pct: 15, minNights: 2 },
    HONEYMOON20: { pct: 20, minNights: 3 }
  },

  hero: [
    { title: "Your home away from home", sub: "Comfortable rooms, delicious food and warm hospitality. Book direct and enjoy the best rates.", g: "linear-gradient(135deg,#7a5a1e,#2a1f10)", img: "" },
    { title: "Luxury that feels effortless", sub: "Spacious suites, a relaxing pool and a spa to help you unwind after a long day.", g: "linear-gradient(135deg,#2f4a3b,#0f1d16)", img: "" },
    { title: "Plan your perfect getaway", sub: "Weekend breaks, family holidays and honeymoon packages with exclusive direct-booking offers.", g: "linear-gradient(135deg,#4a2f3b,#1d0f16)", img: "" }
  ],

  rooms: [
    { id: "standard", type: "Standard", name: "Standard Room", tag: "Best value", price: 1800, guests: 2, size: "220 sq ft", bed: "Queen bed", view: "Garden view", icon: "🛏️", img: "",
      short: "A cozy, comfortable room with everything you need for a short stay.",
      desc: "A neat and cozy room with soft lighting, a comfortable queen bed and all the essentials. Perfect for solo travellers, couples and short business trips.",
      features: ["Air conditioning", "Free Wi-Fi", "40-inch Smart TV", "Attached bathroom", "Hot water 24x7", "Tea / coffee maker", "Daily housekeeping", "Work desk"] },
    { id: "deluxe", type: "Deluxe", name: "Deluxe Room", tag: "Most popular", price: 2800, guests: 3, size: "320 sq ft", bed: "King bed", view: "City view", icon: "🏙️", img: "",
      short: "Spacious room with city views, a work desk and complimentary breakfast.",
      desc: "A spacious room with a king bed, a sitting corner and large windows with city views. Includes complimentary breakfast for all guests.",
      features: ["Air conditioning", "Free Wi-Fi", "Complimentary breakfast", "Sitting area", "Mini fridge", "Smart TV", "Rain shower", "Work desk"] },
    { id: "family", type: "Family", name: "Family Room", tag: "For families", price: 3800, guests: 4, size: "450 sq ft", bed: "King + 2 single", view: "Pool view", icon: "👨‍👩‍👧‍👦", img: "",
      short: "Extra space for the whole family, with two sleeping areas and a pool view.",
      desc: "Designed for families, with a king bed and two single beds, extra storage and a pool-facing balcony. Kids stay free up to 8 years.",
      features: ["Air conditioning", "Free Wi-Fi", "Complimentary breakfast", "Private balcony", "Extra beds", "Smart TV", "Mini fridge", "Kids stay free (under 8)"] },
    { id: "suite", type: "Suite", name: "Luxury Suite", tag: "Premium", price: 4500, guests: 4, size: "520 sq ft", bed: "King bed", view: "Panoramic view", icon: "👑", img: "",
      short: "Premium suite with a lounge area, bathtub and panoramic views.",
      desc: "Our signature suite with a separate lounge, king bed, luxury bathtub and panoramic views. Includes breakfast, welcome drinks and late check-out.",
      features: ["Separate lounge", "Bathtub & rain shower", "Complimentary breakfast", "Welcome drinks", "Late check-out", "Nespresso machine", "Smart TV", "Priority room service"] },
    { id: "presidential", type: "Suite", name: "Presidential Suite", tag: "Ultra luxury", price: 7500, guests: 5, size: "850 sq ft", bed: "King + sofa bed", view: "Skyline view", icon: "🏆", img: "",
      short: "Our finest suite with a private dining area and butler service.",
      desc: "The ultimate stay, with a master bedroom, living room, private dining area and a personal butler. Ideal for celebrations and VIP guests.",
      features: ["Master bedroom + living room", "Private dining area", "Butler service", "Airport pickup included", "Jacuzzi", "Complimentary breakfast & dinner", "Smart home controls", "Late check-out"] }
  ],

  offers: [
    { icon: "🌅", title: "Weekend Getaway", text: "Book a 2-night weekend stay and enjoy 15% off plus a complimentary welcome drink.", code: "WEEKEND15" },
    { icon: "💕", title: "Honeymoon Special", text: "3+ nights in a suite with 20% off, flower decoration and a candle-light dinner.", code: "HONEYMOON20" },
    { icon: "🎁", title: "Direct Booking Bonus", text: "Book directly on our website or WhatsApp and get 10% off on any room.", code: "STAY10" }
  ],

  amenities: [
    { icon: "📶", title: "Free Wi-Fi", text: "High-speed, everywhere" },
    { icon: "🏊", title: "Swimming Pool", text: "Open 7 AM - 8 PM" },
    { icon: "🍽️", title: "Restaurant", text: "Multi-cuisine, in-house" },
    { icon: "🧖", title: "Spa & Wellness", text: "Massage and therapies" },
    { icon: "🏋️", title: "Fitness Centre", text: "Modern gym equipment" },
    { icon: "🚗", title: "Free Parking", text: "Safe, covered parking" },
    { icon: "🛎️", title: "24x7 Room Service", text: "Anytime you need" },
    { icon: "🚖", title: "Airport Pickup", text: "On request" },
    { icon: "💼", title: "Business Centre", text: "Meeting & event rooms" },
    { icon: "🧺", title: "Laundry", text: "Same-day service" },
    { icon: "🔒", title: "Safe & Secure", text: "CCTV and in-room safe" },
    { icon: "🎉", title: "Banquet Hall", text: "Weddings & parties" }
  ],

  menu: {
    Breakfast: [
      { n: "Aloo Paratha with Curd", d: "Stuffed whole-wheat paratha, butter, pickle", p: 180, v: true },
      { n: "Masala Omelette Toast", d: "Two-egg omelette, toast and tea / coffee", p: 220, v: false },
      { n: "Poha & Jalebi", d: "Classic breakfast with hot jalebi", p: 150, v: true },
      { n: "Continental Platter", d: "Eggs, sausage, toast, fruit and juice", p: 320, v: false }
    ],
    Lunch: [
      { n: "Paneer Butter Masala Thali", d: "Paneer, dal, rice, roti, salad, dessert", p: 380, v: true },
      { n: "Chicken Biryani", d: "Aromatic basmati, raita and salan", p: 420, v: false },
      { n: "Dal Makhani & Jeera Rice", d: "Slow-cooked black lentils", p: 280, v: true },
      { n: "Grilled Fish with Herbs", d: "Fresh fish, lemon butter, sautéed veggies", p: 480, v: false }
    ],
    Dinner: [
      { n: "Butter Chicken & Naan", d: "Creamy tomato gravy, butter naan", p: 450, v: false },
      { n: "Veg Kolhapuri & Roti", d: "Spicy mixed vegetable curry", p: 320, v: true },
      { n: "Tandoori Platter", d: "Assorted kebabs with mint chutney", p: 560, v: false },
      { n: "Gulab Jamun with Ice Cream", d: "Warm, soft and sweet", p: 160, v: true }
    ]
  },

  attractions: [
    { icon: "🛕", name: "Heritage Temple", dist: "2 km", text: "A famous 400-year-old temple with beautiful architecture." },
    { icon: "🏞️", name: "Lake View Point", dist: "3 km", text: "Sunset views, boating and local street food." },
    { icon: "🛍️", name: "Main Market", dist: "1.5 km", text: "Handicrafts, local snacks and souvenirs." },
    { icon: "🏰", name: "Old Fort", dist: "8 km", text: "A historic fort with guided tours and panoramic views." },
    { icon: "🚆", name: "Railway Station", dist: "4 km", text: "Quick cab pickup available any time." },
    { icon: "✈️", name: "Airport", dist: "18 km", text: "Pickup and drop service on request." }
  ],

  gallery: [
    { icon: "🏨", cap: "Hotel exterior", cat: "Hotel", img: "" },
    { icon: "🛏️", cap: "Deluxe room", cat: "Rooms", img: "" },
    { icon: "🍽️", cap: "In-house restaurant", cat: "Dining", img: "" },
    { icon: "🏊", cap: "Swimming pool", cat: "Hotel", img: "" },
    { icon: "👑", cap: "Luxury suite", cat: "Rooms", img: "" },
    { icon: "🧖", cap: "Spa", cat: "Hotel", img: "" },
    { icon: "🍛", cap: "Signature dishes", cat: "Dining", img: "" },
    { icon: "🛋️", cap: "Lobby lounge", cat: "Hotel", img: "" },
    { icon: "🌇", cap: "Evening terrace", cat: "Dining", img: "" },
    { icon: "🛁", cap: "Suite bathroom", cat: "Rooms", img: "" }
  ],

  // NOTE: these are sample reviews for the demo. Replace with the hotel's real reviews.
  reviews: [
    { name: "Vikram S.", city: "Delhi", stay: "Business trip", stars: 5, text: "Spotless rooms and very friendly staff. Booking directly on WhatsApp was quick and cheaper than the apps." },
    { name: "Meera D.", city: "Mumbai", stay: "Family weekend", stars: 5, text: "The kids loved the pool and the breakfast was fantastic. The family room had plenty of space for all of us." },
    { name: "Arjun P.", city: "Pune", stay: "Honeymoon", stars: 5, text: "The suite was beautifully decorated and the candle-light dinner was a lovely surprise. Highly recommended." },
    { name: "Sneha K.", city: "Jaipur", stay: "Short break", stars: 4, text: "Great location, clean rooms and helpful front desk. Good value for money and easy check-in." }
  ],

  faqs: [
    { q: "What are the check-in and check-out times?", a: "Check-in is from 12:00 PM and check-out is until 11:00 AM. Early check-in and late check-out are available on request, subject to availability." },
    { q: "Can I cancel or change my booking?", a: "Yes. You can cancel free of charge up to 48 hours before check-in. Date changes are free subject to availability." },
    { q: "Is breakfast included?", a: "Breakfast is included with Deluxe, Family and Suite rooms. For Standard rooms it can be added for a small extra charge." },
    { q: "Do you offer airport or station pickup?", a: "Yes, we arrange pickup and drop on request at fixed rates. Please share your arrival details when booking." },
    { q: "Are children allowed? Is there an extra-bed charge?", a: "Children are welcome. Kids under 8 stay free in the Family Room. An extra bed can be added in most rooms for a small charge." },
    { q: "Is parking available?", a: "Yes, we have free, safe parking for guests." },
    { q: "How do I confirm my booking?", a: "Submit the booking form above. Your request opens in WhatsApp, and our team will confirm availability and the final rate within minutes." }
  ]
};

/* =========================================================
   Helpers
   ========================================================= */
const $  = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
const fmt = n => CONFIG.currency + Math.round(n).toLocaleString("en-IN");
const iso = d => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
const addDays = (s, n) => { const d = new Date(s + "T00:00:00"); d.setDate(d.getDate() + n); return iso(d); };
const nightsBetween = (a, b) => (a && b) ? Math.round((new Date(b) - new Date(a)) / 864e5) : 0;
const nice = s => new Date(s).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
const roomById = id => CONFIG.rooms.find(r => r.id === id);
const waLink = t => "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(t);
const PAL = [
  "linear-gradient(135deg,#e9d9b4,#c9a24a)", "linear-gradient(135deg,#d9c3a0,#8a6508)",
  "linear-gradient(135deg,#e6d5c3,#b08a5b)", "linear-gradient(135deg,#cfe0d4,#6e9a7e)",
  "linear-gradient(135deg,#d8d4ea,#7a6fb3)", "linear-gradient(135deg,#f0d6c9,#c97b57)"
];
const bg = (img, i) => img ? 'url("' + img + '") center/cover no-repeat' : PAL[i % PAL.length];

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 3200);
}

/* =========================================================
   Basic bindings (name, phone, links)
   ========================================================= */
function bindBasics() {
  $$("[data-bind]").forEach(el => { el.textContent = CONFIG[el.dataset.bind]; });
  $$("[data-link]").forEach(el => {
    const t = el.dataset.link;
    if (t === "tel")  el.href = "tel:" + CONFIG.phone.replace(/[^\d+]/g, "");
    if (t === "wa")   el.href = waLink("Hello! I would like to know more about " + CONFIG.name + ".");
    if (t === "mail") el.href = "mailto:" + CONFIG.email;
  });
  $$(".logo-mark").forEach(el => { el.textContent = CONFIG.name.charAt(0); });
  $("#year").textContent = new Date().getFullYear();
  document.title = CONFIG.name + " Hotel | Rooms, Dining & Direct Booking";
}

/* =========================================================
   Theme
   ========================================================= */
function initTheme() {
  let t = "light";
  try { t = localStorage.getItem("sh-theme") || "light"; } catch (e) { /* ignore */ }
  const apply = x => {
    document.documentElement.dataset.theme = x;
    $("#themeBtn").textContent = x === "dark" ? "☀️" : "🌙";
  };
  apply(t);
  $("#themeBtn").addEventListener("click", () => {
    t = t === "dark" ? "light" : "dark";
    apply(t);
    try { localStorage.setItem("sh-theme", t); } catch (e) { /* ignore */ }
  });
}

/* =========================================================
   Hero slider
   ========================================================= */
function initHero() {
  const box = $("#heroSlides"), dots = $("#heroDots");
  let cur = 0, timer;
  CONFIG.hero.forEach((h, i) => {
    const s = document.createElement("div");
    s.className = "slide" + (i ? "" : " on");
    s.style.background = h.img ? 'url("' + h.img + '") center/cover no-repeat' : h.g;
    box.appendChild(s);
    const b = document.createElement("button");
    b.className = "dot" + (i ? "" : " on");
    b.setAttribute("aria-label", "Slide " + (i + 1));
    b.addEventListener("click", () => { go(i); restart(); });
    dots.appendChild(b);
  });
  function go(i) {
    cur = i;
    $$(".slide", box).forEach((s, k) => s.classList.toggle("on", k === i));
    $$(".dot", dots).forEach((d, k) => d.classList.toggle("on", k === i));
    const t = $("#heroTitle"), p = $("#heroSub");
    t.classList.add("swap"); p.classList.add("swap");
    setTimeout(() => {
      t.textContent = CONFIG.hero[i].title;
      p.textContent = CONFIG.hero[i].sub;
      t.classList.remove("swap"); p.classList.remove("swap");
    }, 250);
  }
  function restart() {
    clearInterval(timer);
    timer = setInterval(() => go((cur + 1) % CONFIG.hero.length), 6500);
  }
  go(0); restart();
}

/* =========================================================
   Rooms + modal
   ========================================================= */
function roomCard(r, i) {
  return `<article class="card reveal" data-type="${r.type}">
    <div class="media" style="background:${bg(r.img, i)}">${r.img ? "" : r.icon}<span class="badge">${r.tag}</span></div>
    <div class="card-body">
      <h3>${r.name}</h3>
      <div class="meta"><span>👥 ${r.guests} guests</span><span>📐 ${r.size}</span><span>🛏️ ${r.bed}</span></div>
      <p>${r.short}</p>
      <div class="card-foot">
        <div class="price">${fmt(r.price)}<small> /night</small></div>
        <div class="row-btns">
          <button class="btn btn-line btn-sm" data-view="${r.id}">Details</button>
          <button class="btn btn-gold btn-sm" data-book="${r.id}">Book</button>
        </div>
      </div>
    </div>
  </article>`;
}

function fillRoomSelects() {
  const opts = CONFIG.rooms.map(r => `<option value="${r.id}">${r.name} - ${fmt(r.price)}/night</option>`).join("");
  $("#qRoom").innerHTML = opts;
  $("#bRoom").innerHTML = opts;
  $("#qRoom").value = "deluxe";
  $("#bRoom").value = "deluxe";
}

function initRooms() {
  const types = ["All", ...new Set(CONFIG.rooms.map(r => r.type))];
  const f = $("#roomFilters"), g = $("#roomGrid");
  f.innerHTML = types.map((t, i) => `<button class="chip${i ? "" : " on"}" data-f="${t}">${t}</button>`).join("");
  g.innerHTML = CONFIG.rooms.map(roomCard).join("");
  f.addEventListener("click", e => {
    const b = e.target.closest(".chip");
    if (!b) return;
    $$(".chip", f).forEach(c => c.classList.toggle("on", c === b));
    $$(".card", g).forEach(c => { c.hidden = !(b.dataset.f === "All" || c.dataset.type === b.dataset.f); });
  });
  g.addEventListener("click", e => {
    const v = e.target.closest("[data-view]"), k = e.target.closest("[data-book]");
    if (v) openRoom(v.dataset.view);
    if (k) chooseRoom(k.dataset.book);
  });
}

let lastFocus = null;
function openRoom(id) {
  const r = roomById(id), m = $("#roomModal");
  const media = $("#mMedia");
  media.style.background = bg(r.img, CONFIG.rooms.indexOf(r));
  media.textContent = r.img ? "" : r.icon;
  $("#mTitle").textContent = r.name;
  $("#mMeta").innerHTML = `<span>👥 Up to ${r.guests} guests</span><span>📐 ${r.size}</span><span>🛏️ ${r.bed}</span><span>🌅 ${r.view}</span>`;
  $("#mDesc").textContent = r.desc;
  $("#mFeat").innerHTML = r.features.map(f => `<li>${f}</li>`).join("");
  $("#mPrice").innerHTML = `${fmt(r.price)}<small> /night + taxes</small>`;
  $("#mBook").onclick = () => chooseRoom(id);
  lastFocus = document.activeElement;
  m.hidden = false;
  document.body.classList.add("noscroll");
  $(".modal-x", m).focus();
}
function closeModal() {
  $("#roomModal").hidden = true;
  if (!$("#lightbox") || $("#lightbox").hidden) document.body.classList.remove("noscroll");
  if (lastFocus) { try { lastFocus.focus(); } catch (e) { /* ignore */ } }
}
function chooseRoom(id) {
  $("#bRoom").value = id;
  $("#qRoom").value = id;
  if (!$("#roomModal").hidden) closeModal();
  calc();
  $("#booking").scrollIntoView({ behavior: "smooth" });
  toast("Selected: " + roomById(id).name);
}

/* =========================================================
   Offers, amenities, menu, attractions
   ========================================================= */
function initOffers() {
  const g = $("#offerGrid");
  g.innerHTML = CONFIG.offers.map(o => `<div class="offer reveal">
    <span class="offer-ic">${o.icon}</span><h3>${o.title}</h3><p>${o.text}</p>
    <div class="code"><code>${o.code}</code><button type="button" data-code="${o.code}">Use code</button></div></div>`).join("");
  g.addEventListener("click", e => {
    const b = e.target.closest("[data-code]");
    if (!b) return;
    $("#bCoupon").value = b.dataset.code;
    applyCoupon();
    $("#booking").scrollIntoView({ behavior: "smooth" });
    toast("Coupon " + b.dataset.code + " added");
  });
}

function initAmenities() {
  $("#amenityGrid").innerHTML = CONFIG.amenities.map(a =>
    `<div class="amen-item reveal"><span>${a.icon}</span><h4>${a.title}</h4><p>${a.text}</p></div>`).join("");
}

function initMenu() {
  const keys = Object.keys(CONFIG.menu), t = $("#menuTabs"), l = $("#menuList");
  t.innerHTML = keys.map((k, i) => `<button class="chip${i ? "" : " on"}" data-k="${k}">${k}</button>`).join("");
  const show = k => {
    l.innerHTML = CONFIG.menu[k].map(d =>
      `<div class="dish"><div><h4><i class="veg${d.v ? "" : " nv"}"></i>${d.n}</h4><p>${d.d}</p></div><b>${fmt(d.p)}</b></div>`).join("");
  };
  t.addEventListener("click", e => {
    const b = e.target.closest(".chip");
    if (!b) return;
    $$(".chip", t).forEach(c => c.classList.toggle("on", c === b));
    show(b.dataset.k);
  });
  show(keys[0]);
}

function initAttractions() {
  $("#attractGrid").innerHTML = CONFIG.attractions.map((a, i) => `<article class="card attr reveal">
    <div class="media" style="background:${PAL[(i + 3) % PAL.length]}">${a.icon}</div>
    <div class="card-body"><h3>${a.name}</h3><span class="dist">${a.dist} from hotel</span><p>${a.text}</p></div></article>`).join("");
}

/* =========================================================
   Gallery + lightbox
   ========================================================= */
let galItems = [], lbI = 0;
function initGallery() {
  const cats = ["All", ...new Set(CONFIG.gallery.map(g => g.cat))];
  const f = $("#galFilters"), grid = $("#galGrid");
  f.innerHTML = cats.map((c, i) => `<button class="chip${i ? "" : " on"}" data-c="${c}">${c}</button>`).join("");
  const render = cat => {
    galItems = CONFIG.gallery.filter(g => cat === "All" || g.cat === cat);
    grid.innerHTML = galItems.map((g, i) =>
      `<button class="shot s${i % 6}" style="background:${bg(g.img, i + 1)}" data-i="${i}" aria-label="${g.cap}">
        <span class="ic">${g.img ? "" : g.icon}</span><span class="cap">${g.cap}</span></button>`).join("");
  };
  f.addEventListener("click", e => {
    const b = e.target.closest(".chip");
    if (!b) return;
    $$(".chip", f).forEach(c => c.classList.toggle("on", c === b));
    render(b.dataset.c);
  });
  grid.addEventListener("click", e => {
    const s = e.target.closest(".shot");
    if (s) openLB(+s.dataset.i);
  });
  render("All");
  $("#lbClose").addEventListener("click", closeLB);
  $("#lbPrev").addEventListener("click", () => stepLB(-1));
  $("#lbNext").addEventListener("click", () => stepLB(1));
  $("#lightbox").addEventListener("click", e => { if (e.target.id === "lightbox") closeLB(); });
}
function showLB() {
  const g = galItems[lbI], m = $("#lbMedia");
  m.style.background = bg(g.img, lbI + 1);
  m.textContent = g.img ? "" : g.icon;
  $("#lbCap").textContent = g.cap + "  (" + (lbI + 1) + " / " + galItems.length + ")";
}
function openLB(i) { lbI = i; showLB(); $("#lightbox").hidden = false; document.body.classList.add("noscroll"); }
function closeLB() { $("#lightbox").hidden = true; document.body.classList.remove("noscroll"); }
function stepLB(d) { lbI = (lbI + d + galItems.length) % galItems.length; showLB(); }

/* =========================================================
   Reviews slider
   ========================================================= */
function initReviews() {
  const tr = $("#reviewTrack"), dots = $("#reviewDots"), len = CONFIG.reviews.length;
  tr.innerHTML = CONFIG.reviews.map(r => `<article class="review">
    <div class="stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
    <p>“${r.text}”</p>
    <div class="who"><span class="av">${r.name.charAt(0)}</span><div><b>${r.name}</b><small>${r.city} · ${r.stay}</small></div></div></article>`).join("");
  dots.innerHTML = CONFIG.reviews.map((_, i) => `<button class="dot${i ? "" : " on"}" aria-label="Review ${i + 1}"></button>`).join("");
  let i = 0, timer;
  const go = n => {
    i = (n + len) % len;
    tr.style.transform = "translateX(-" + (i * 100) + "%)";
    $$(".dot", dots).forEach((d, k) => d.classList.toggle("on", k === i));
  };
  const restart = () => { clearInterval(timer); timer = setInterval(() => go(i + 1), 6000); };
  dots.addEventListener("click", e => {
    const b = e.target.closest(".dot");
    if (b) { go($$(".dot", dots).indexOf(b)); restart(); }
  });
  let x0 = 0;
  tr.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
  tr.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) { go(i + (dx < 0 ? 1 : -1)); restart(); }
  });
  restart();
}

/* =========================================================
   FAQ
   ========================================================= */
function initFaq() {
  $("#faqList").innerHTML = CONFIG.faqs.map(f =>
    `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join("");
}

/* =========================================================
   Booking: dates, price calculator, coupon, WhatsApp
   ========================================================= */
let coupon = null;

function quote() {
  const r = roomById($("#bRoom").value) || CONFIG.rooms[0];
  const n = nightsBetween($("#bIn").value, $("#bOut").value);
  const q = +$("#bRooms").value || 1;
  const adults = +$("#bAdults").value || 1;
  const kids = +$("#bKids").value || 0;
  const base = r.price * Math.max(n, 0) * q;
  const disc = (coupon && n >= coupon.minNights) ? base * coupon.pct / 100 : 0;
  const taxable = base - disc;
  const gst = taxable * CONFIG.gst / 100;
  return { r, n, q, adults, kids, base, disc, gst, total: taxable + gst };
}

function calc() {
  const x = quote();
  const cap = $("#capNote"), cm = $("#couponMsg");
  const guests = x.adults + x.kids;
  if (guests > x.r.guests * x.q) {
    const need = Math.ceil(guests / x.r.guests);
    cap.textContent = "This room sleeps " + x.r.guests + ". For " + guests + " guests please select " + need + " rooms.";
    cap.className = "note warn";
  } else { cap.textContent = ""; cap.className = "note"; }

  $("#sumRoom").textContent = x.r.name + (x.q > 1 ? " × " + x.q : "");
  $("#sumGstLabel").textContent = "GST (" + CONFIG.gst + "%)";
  if (x.n <= 0) {
    $("#sumNights").textContent = "Select valid dates";
    ["#sumBase", "#sumGst", "#sumTotal"].forEach(s => { $(s).textContent = "-"; });
    $("#sumDiscRow").hidden = true;
    return;
  }
  $("#sumNights").textContent = nice($("#bIn").value) + " → " + nice($("#bOut").value) + " (" + x.n + " night" + (x.n > 1 ? "s" : "") + ")";
  $("#sumBase").textContent = fmt(x.base);
  $("#sumDiscRow").hidden = x.disc <= 0;
  $("#sumDisc").textContent = "- " + fmt(x.disc);
  $("#sumGst").textContent = fmt(x.gst);
  $("#sumTotal").textContent = fmt(x.total);
  if (coupon) {
    if (x.n >= coupon.minNights) { cm.textContent = coupon.code + " applied: " + coupon.pct + "% off"; cm.className = "note ok"; }
    else { cm.textContent = coupon.code + " needs a minimum of " + coupon.minNights + " nights"; cm.className = "note warn"; }
  }
}

function applyCoupon() {
  const code = $("#bCoupon").value.trim().toUpperCase();
  const cm = $("#couponMsg");
  if (!code) { coupon = null; cm.textContent = ""; calc(); return; }
  const c = CONFIG.coupons[code];
  if (!c) { coupon = null; cm.textContent = "Invalid coupon code"; cm.className = "note warn"; calc(); return; }
  coupon = { code: code, pct: c.pct, minNights: c.minNights };
  calc();
}

function initBooking() {
  const today = iso(new Date());
  const qIn = $("#qIn"), qOut = $("#qOut"), bIn = $("#bIn"), bOut = $("#bOut");
  [qIn, bIn].forEach(el => { el.min = today; el.value = addDays(today, 1); });
  [qOut, bOut].forEach(el => { el.min = addDays(today, 1); el.value = addDays(today, 2); });

  const linkDates = (a, b) => a.addEventListener("change", () => {
    if (!a.value) return;
    b.min = addDays(a.value, 1);
    if (!b.value || b.value <= a.value) b.value = addDays(a.value, 1);
  });
  linkDates(qIn, qOut);
  linkDates(bIn, bOut);

  ["bIn", "bOut", "bRoom", "bRooms", "bAdults", "bKids"].forEach(id => {
    $("#" + id).addEventListener("change", calc);
  });
  $("#applyCoupon").addEventListener("click", applyCoupon);
  $("#bCoupon").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); applyCoupon(); } });

  $("#quickForm").addEventListener("submit", e => {
    e.preventDefault();
    if (nightsBetween(qIn.value, qOut.value) <= 0) { toast("Check-out must be after check-in"); return; }
    bIn.value = qIn.value;
    bOut.min = addDays(bIn.value, 1);
    bOut.value = qOut.value;
    $("#bRoom").value = $("#qRoom").value;
    $("#bAdults").value = $("#qGuests").value;
    calc();
    $("#booking").scrollIntoView({ behavior: "smooth" });
    toast("Great! Fill in your details to continue");
  });

  $("#bookForm").addEventListener("submit", e => {
    e.preventDefault();
    const x = quote();
    const name = $("#bName").value.trim();
    const phone = $("#bPhone").value.replace(/\D/g, "");
    if (!name) { toast("Please enter your name"); $("#bName").focus(); return; }
    if (phone.length < 10) { toast("Please enter a valid phone number"); $("#bPhone").focus(); return; }
    if (x.n <= 0) { toast("Check-out must be after check-in"); return; }
    const lines = [
      "*New Room Booking Request*",
      "Hotel: " + CONFIG.name,
      "Name: " + name,
      "Phone: " + $("#bPhone").value.trim(),
      "Email: " + ($("#bEmail").value.trim() || "N/A"),
      "Room: " + x.r.name + " x " + x.q,
      "Check-in: " + nice($("#bIn").value),
      "Check-out: " + nice($("#bOut").value) + " (" + x.n + " night" + (x.n > 1 ? "s" : "") + ")",
      "Guests: " + x.adults + " adult" + (x.adults > 1 ? "s" : "") + (x.kids ? ", " + x.kids + " child" + (x.kids > 1 ? "ren" : "") : ""),
      "Coupon: " + (coupon && x.disc > 0 ? coupon.code + " (-" + fmt(x.disc) + ")" : "None"),
      "Estimated total: " + fmt(x.total) + " (incl. " + CONFIG.gst + "% GST)",
      "Requests: " + ($("#bReq").value.trim() || "None")
    ];
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
    toast("Opening WhatsApp to confirm your request...");
  });

  calc();
}

/* =========================================================
   UI: counters, reveal, scroll-spy, menu, keyboard
   ========================================================= */
function initCounters() {
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    io.unobserve(en.target);
    const el = en.target, end = +el.dataset.count, dec = +(el.dataset.dec || 0), suf = el.dataset.suf || "";
    const t0 = performance.now(), dur = 1600;
    const step = t => {
      const p = Math.min((t - t0) / dur, 1), v = end * (1 - Math.pow(1 - p, 3));
      el.textContent = (dec ? v.toFixed(dec) : Math.round(v).toLocaleString("en-IN")) + (p === 1 ? suf : "");
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }), { threshold: 0.4 });
  $$("[data-count]").forEach(el => io.observe(el));
}

function initReveal() {
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  $$(".reveal").forEach(el => io.observe(el));
}

function initUI() {
  const header = $("#header"), toTop = $("#toTop");
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 10);
    toTop.classList.toggle("show", y > 700);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const menu = $("#menu"), burger = $("#burger");
  const setMenu = open => {
    menu.classList.toggle("open", open);
    burger.textContent = open ? "✕" : "☰";
    burger.setAttribute("aria-expanded", String(open));
  };
  burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  $$("#menu a").forEach(a => a.addEventListener("click", () => setMenu(false)));

  const links = $$(".menu a[href^='#']");
  const spy = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  links.map(a => $(a.getAttribute("href"))).filter(Boolean).forEach(s => spy.observe(s));

  const modal = $("#roomModal");
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  $(".modal-x", modal).addEventListener("click", closeModal);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if (!modal.hidden) closeModal();
      if (!$("#lightbox").hidden) closeLB();
    }
    if (!$("#lightbox").hidden) {
      if (e.key === "ArrowLeft") stepLB(-1);
      if (e.key === "ArrowRight") stepLB(1);
    }
  });
}

/* =========================================================
   Start
   ========================================================= */
function init() {
  bindBasics();
  initTheme();
  initHero();
  fillRoomSelects();
  initRooms();
  initOffers();
  initAmenities();
  initMenu();
  initAttractions();
  initGallery();
  initReviews();
  initFaq();
  initBooking();
  initCounters();
  initUI();
  initReveal();
}
init();
