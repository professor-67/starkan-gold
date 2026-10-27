const translations = {
  ar: {
    brand: "ستاركان غولد", subtitle: "الإدارة · منطقة خاصة",
    dashboard: "لوحة التحكم", traffic: "زيارات الموقع", products: "المنتجات",
    orders: "الطلبات", customers: "العملاء", security: "الأمان",
    title: "نظرة عامة", description: "راقب نشاط متجرك من مكان واحد.",
    badge: "لوحة الإدارة", visitors: "زوار الموقع", revenue: "المداخيل",
    overview: "نظرة عامة على المتجر", recentOrders: "أحدث الطلبات",
    customerActivity: "نشاط العملاء", pending: "البيانات الحقيقية غير متصلة بعد",
    preview: "وضع المعاينة: لن نعرض أرقاماً غير حقيقية. يجب تفعيل الحماية قبل نشر لوحة التحكم."
  },
  fr: {
    brand: "STARKAN GOLD", subtitle: "ADMINISTRATION · ESPACE PRIVÉ",
    dashboard: "Tableau de bord", traffic: "Trafic du site", products: "Produits",
    orders: "Commandes", customers: "Clients", security: "Sécurité",
    title: "Vue d’ensemble", description: "Suivez l’activité de votre boutique en un seul endroit.",
    badge: "Tableau d’administration", visitors: "Visiteurs du site", revenue: "Chiffre d’affaires",
    overview: "Vue d’ensemble de la boutique", recentOrders: "Commandes récentes",
    customerActivity: "Activité des clients", pending: "Données réelles non connectées",
    preview: "Mode aperçu : aucun chiffre n’est inventé. La sécurité doit être activée avant publication."
  },
  en: {
    brand: "STARKAN GOLD", subtitle: "ADMINISTRATION · PRIVATE AREA",
    dashboard: "Dashboard", traffic: "Website traffic", products: "Products",
    orders: "Orders", customers: "Customers", security: "Security",
    title: "Dashboard overview", description: "Monitor your store’s activity in one place.",
    badge: "Admin dashboard", visitors: "Website visitors", revenue: "Revenue",
    overview: "Store overview", recentOrders: "Recent orders",
    customerActivity: "Customer activity", pending: "Live data not connected yet",
    preview: "Preview mode: no figures are invented. Authentication must be enabled before public deployment."
  },
  de: {
    brand: "STARKAN GOLD", subtitle: "VERWALTUNG · PRIVATER BEREICH",
    dashboard: "Dashboard", traffic: "Website-Traffic", products: "Produkte",
    orders: "Bestellungen", customers: "Kunden", security: "Sicherheit",
    title: "Dashboard-Übersicht", description: "Behalten Sie die Aktivitäten Ihres Shops an einem Ort im Blick.",
    badge: "Admin-Dashboard", visitors: "Website-Besucher", revenue: "Umsatz",
    overview: "Shop-Übersicht", recentOrders: "Letzte Bestellungen",
    customerActivity: "Kundenaktivität", pending: "Echte Daten noch nicht verbunden",
    preview: "Vorschaumodus: Es werden keine Zahlen erfunden. Vor der Veröffentlichung muss die Anmeldung aktiviert werden."
  },
  ru: {
    brand: "STARKAN GOLD", subtitle: "АДМИНИСТРИРОВАНИЕ · ЗАКРЫТЫЙ РАЗДЕЛ",
    dashboard: "Панель управления", traffic: "Посещаемость сайта", products: "Товары",
    orders: "Заказы", customers: "Клиенты", security: "Безопасность",
    title: "Обзор панели управления", description: "Следите за работой магазина в одном месте.",
    badge: "Панель администратора", visitors: "Посетители сайта", revenue: "Выручка",
    overview: "Обзор магазина", recentOrders: "Последние заказы",
    customerActivity: "Активность клиентов", pending: "Реальные данные пока не подключены",
    preview: "Режим предварительного просмотра: цифры не выдумываются. Перед публикацией необходимо включить авторизацию."
  }
};

function setAdminLanguage(lang) {
  const t = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });

  localStorage.setItem("starkan-admin-language", lang);
}

window.setAdminLanguage = setAdminLanguage;
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("starkan-admin-language") || "en";
  setAdminLanguage(saved);
});
