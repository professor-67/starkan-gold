(() => {
const D = {
"الرئيسية":["Accueil","Home","Startseite","Главная"],
"المجموعات":["Collections","Collections","Kollektionen","Коллекции"],
"المؤسس":["Fondateur","Founder","Gründer","Основатель"],
"الاستدامة":["Durabilité","Sustainability","Nachhaltigkeit","Устойчивость"],
"اتصل بنا":["Contact","Contact","Kontakt","Контакты"],
"الطاقة والشراكات":["Énergie et partenariats","Energy & Partnerships","Energie & Partnerschaften","Энергия и партнёрство"],
"الأسئلة الشائعة":["Questions fréquentes","FAQ","Häufige Fragen","Частые вопросы"],
"الشحن والإرجاع":["Livraison et retours","Shipping & Returns","Versand und Rückgabe","Доставка и возврат"],
"من نحن":["À propos","About us","Über uns","О нас"],
"المؤسس وقصة العلامة":["Le fondateur et notre histoire","Founder & Brand Story","Gründer und Markengeschichte","Основатель и история бренда"],
"لنبدأ محادثة":["Commençons une conversation","Let’s start a conversation","Beginnen wir ein Gespräch","Давайте поговорим"],
"اكتشف المجموعات":["Découvrir les collections","Explore collections","Kollektionen entdecken","Смотреть коллекции"],
"حرفية مغربية • أناقة خالدة":["Artisanat marocain • Élégance intemporelle","Moroccan craftsmanship • Timeless elegance","Marokkanisches Handwerk • Zeitlose Eleganz","Марокканское мастерство • Вневременная элегантность"],
"من أصالة المغرب، نصنع التميز.":["Beauté. Élégance. Décoration intérieure.","Beauty. Elegance. Home Decor.","Schönheit. Eleganz. Wohndekor.","Красота. Элегантность. Декор дома."],
"اتصل بنا":["Contactez-nous","Contact us","Kontakt","Свяжитесь с нами"],
"املأ النموذج لإنشاء رسالة نصية على جهازك. النموذج لا يرسل البيانات إلى خادم.":["Remplissez le formulaire pour créer un fichier de message sur votre appareil. Les données ne sont pas envoyées à un serveur.","Fill in the form to create a message file on your device. The form does not send data to a server.","Füllen Sie das Formular aus, um eine Nachrichtendatei auf Ihrem Gerät zu erstellen. Es werden keine Daten an einen Server gesendet.","Заполните форму, чтобы создать файл сообщения на устройстве. Данные не отправляются на сервер."],
"الاسم":["Nom","Name","Name","Имя"],
"البريد الإلكتروني":["E-mail","Email","E-Mail","Электронная почта"],
"نوع الطلب":["Type de demande","Request type","Art der Anfrage","Тип запроса"],
"منتج أو طلب خاص":["Produit ou commande spéciale","Product or custom order","Produkt oder Sonderbestellung","Товар или индивидуальный заказ"],
"فندق أو طلب مهني":["Hôtel ou demande professionnelle","Hotel or business enquiry","Hotel oder geschäftliche Anfrage","Отель или деловой запрос"],
"تعاون أو توريد":["Partenariat ou fourniture","Partnership or supply","Kooperation oder Lieferung","Партнёрство или поставка"],
"استفسار عام":["Demande générale","General enquiry","Allgemeine Anfrage","Общий вопрос"],
"الرسالة":["Message","Message","Nachricht","Сообщение"],
"إنشاء رسالة":["Créer le message","Create message","Nachricht erstellen","Создать сообщение"],
"تم إنشاء ملف الرسالة؛ أرسله بنفسك عبر وسيلة التواصل الرسمية.":["Le fichier du message a été créé. Envoyez-le vous-même par un canal officiel.","Message file created. Send it yourself through an official contact channel.","Die Nachrichtendatei wurde erstellt. Senden Sie sie selbst über einen offiziellen Kontaktweg.","Файл сообщения создан. Отправьте его самостоятельно через официальный канал связи."],
"أضف البريد الرسمي ورقم الهاتف وروابط التواصل الحقيقية قبل النشر العام.":["Ajoutez l’e-mail officiel, le téléphone et les liens réels avant la publication.","Add the official email, phone number and real contact links before publishing.","Fügen Sie vor der Veröffentlichung die offizielle E-Mail, Telefonnummer und echte Kontaktlinks hinzu.","Перед публикацией добавьте официальный адрес электронной почты, телефон и реальные ссылки."],
"رؤيتنا":["Notre vision","Our vision","Unsere Vision","Наша концепция"],
"كيف نعمل؟":["Comment travaillons-nous ?","How do we work?","Wie arbeiten wir?","Как мы работаем?"],
"لنتواصل":["Contactons-nous","Get in touch","Kontaktieren Sie uns","Свяжитесь с нами"],
"فرص جديدة للمغرب":["De nouvelles opportunités pour le Maroc","New opportunities for Morocco","Neue Chancen für Marokko","Новые возможности для Марокко"],
"الطاقة والشراكات":["Énergie et partenariats","Energy & Partnerships","Energie & Partnerschaften","Энергия и партнёрство"],
"نبحث عن فرص عملية للتعاون في مشاريع الطاقة المتجددة وحلول تخزين الطاقة بالمغرب.":["Nous recherchons des possibilités concrètes de coopération dans les énergies renouvelables et le stockage d’énergie au Maroc.","We are exploring practical cooperation opportunities in renewable energy and energy storage projects in Morocco.","Wir prüfen konkrete Kooperationsmöglichkeiten für erneuerbare Energien und Energiespeicherung in Marokko.","Мы изучаем возможности сотрудничества в сфере возобновляемой энергетики и накопления энергии в Марокко."],
"للعملاء المحتملين":["Pour les clients potentiels","For prospective customers","Für potenzielle Kunden","Для потенциальных клиентов"],
"للشركاء والمستثمرين":["Pour les partenaires et investisseurs","For partners and investors","Für Partner und Investoren","Для партнёров и инвесторов"],
"التعاون المهني":["Coopération professionnelle","Business cooperation","Geschäftliche Zusammenarbeit","Деловое сотрудничество"],
"الانتقال إلى صفحة التواصل ←":["Accéder à la page Contact ←","Go to Contact page ←","Zur Kontaktseite ←","Перейти на страницу контактов ←"],
"التراث والمنسوجات":["Patrimoine et textiles","Heritage & textiles","Tradition und Textilien","Наследие и текстиль"],
"الديكور والمنزل":["Maison et décoration","Living & décor","Wohnen und Dekoration","Дом и декор"],
"الهدايا الراقية":["Cadeaux raffinés","Refined gifts","Edle Geschenke","Изысканные подарки"],
"طرز فاسي، أغطية الطاولات والمنسوجات التقليدية.":["Broderie fassie, nappes et textiles traditionnels.","Fassi embroidery, table linens and traditional textiles.","Fassi-Stickerei, Tischwäsche und traditionelle Textilien.","Вышивка Фесса, скатерти и традиционный текстиль."],
"السجاد وقطع ديكور مستوحاة من المغرب.":["Tapis et décoration inspirés du Maroc.","Rugs and décor inspired by Morocco.","Teppiche und Dekoration mit marokkanischer Inspiration.","Ковры и декор в марокканском стиле."],
"هدايا للمناسبات والضيافة.":["Cadeaux pour les occasions et l’hospitalité.","Gifts for occasions and hospitality.","Geschenke für Anlässe und Gastfreundschaft.","Подарки для праздников и гостеприимства."],
"تقديم منتجات مغربية ذات قيمة حرفية وجمالية، وبناء علاقات طويلة الأمد مع العملاء والفنادق والمتاجر والشركاء.":["Proposer des produits marocains de qualité artisanale et esthétique, et bâtir des relations durables avec les clients, hôtels, boutiques et partenaires.","Offering Moroccan products with craftsmanship and aesthetic value, while building lasting relationships with customers, hotels, shops and partners.","Marokkanische Produkte mit handwerklichem und ästhetischem Wert anbieten und langfristige Beziehungen zu Kunden, Hotels, Geschäften und Partnern aufbauen.","Предлагать марокканские изделия с ремесленной и эстетической ценностью и выстраивать долгосрочные отношения с клиентами, отелями, магазинами и партнёрами."],
"STARKAN GOLD":["STARKAN GOLD","STARKAN GOLD","STARKAN GOLD","STARKAN GOLD"],
"علامة تحتفي بالحرفية المغربية وتسعى إلى تقديمها للعملاء المحليين والدوليين. نعمل على تطوير مجموعات المنسوجات والديكور والهدايا بالتعاون مع الحرفيين والموردين.":["Une marque qui célèbre l’artisanat marocain et le fait découvrir aux clients locaux et internationaux. Nous développons des collections de textiles, de décoration et de cadeaux avec des artisans et fournisseurs.","A brand celebrating Moroccan craftsmanship for local and international customers. We develop textile, décor and gift collections with artisans and suppliers.","Eine Marke, die marokkanisches Handwerk für lokale und internationale Kunden präsentiert. Wir entwickeln Textil-, Deko- und Geschenkekollektionen mit Kunsthandwerkern und Lieferanten.","Бренд, который знакомит местных и международных клиентов с марокканским ремеслом. Мы развиваем коллекции текстиля, декора и подарков вместе с мастерами и поставщиками."],


"المؤسس: Abdessamad Daraoui":["Fondateur : Abdessamad Daraoui","Founder: Abdessamad Daraoui","Gründer: Abdessamad Daraoui","Основатель: Abdessamad Daraoui"],
"تقديم منتجات مغربية ذات قيمة حرفية وجمالية، وبناء علاقات طويلة الأمد مع العملاء والفنادق والمتاجر والشركاء.":["Proposer des produits marocains de qualité artisanale et esthétique, et bâtir des relations durables avec les clients, hôtels, boutiques et partenaires.","Offering Moroccan products with craftsmanship and aesthetic value, while building lasting relationships with customers, hotels, shops and partners.","Marokkanische Produkte mit handwerklichem und ästhetischem Wert anbieten und langfristige Beziehungen zu Kunden, Hotels, Geschäften und Partnern aufbauen.","Предлагать марокканские изделия с ремесленной и эстетической ценностью и выстраивать долгосрочные отношения avec клиентами, отелями, магазинами и партнёрами."]
};

Object.assign(D,{
"رؤية للمستقبل":["Une vision pour l’avenir","Looking ahead","Blick in die Zukunft","Взгляд в будущее"],
"تراث أصيل، ومستقبل أكثر استدامة.":["Un patrimoine authentique, un avenir plus durable.","Authentic heritage. A more sustainable future.","Authentisches Erbe. Eine nachhaltigere Zukunft.","Подлинное наследие. Более устойчивое будущее."],
"نطمح إلى تطوير مبادرات تربط التصميم المغربي بالاستدامة والطاقات المتجددة، مع الإعلان عن المشاريع التقنية بعد التحقق منها.":["Nous souhaitons développer des initiatives reliant le design marocain, la durabilité et les énergies renouvelables. Les projets techniques seront annoncés après vérification.","We aim to develop initiatives connecting Moroccan design, sustainability and renewable energy. Technical projects will be announced after verification.","Wir möchten Initiativen entwickeln, die marokkanisches Design, Nachhaltigkeit und erneuerbare Energien verbinden. Technische Projekte werden nach Prüfung vorgestellt.","Мы стремимся развивать инициативы, объединяющие марокканский дизайн, устойчивость и возобновляемую энергетику. Технические проекты будут представлены после проверки."],
"اكتشف رؤيتنا":["Découvrez notre vision","Explore our vision","Entdecken Sie unsere Vision","Узнайте о нашей концепции"],
"المجموعات":["Collections","Collections","Kollektionen","Коллекции"],
"مجموعات مختارة بذوق مغربي":["Collections sélectionnées dans l’esprit marocain","Curated collections with Moroccan character","Ausgewählte Kollektionen mit marokkanischem Charakter","Подборка коллекций с марокканским характером"],
"قصتنا في كل تفصيل":["Une histoire dans chaque détail","A story in every detail","Eine Geschichte in jedem Detail","История в каждой детали"],
"من طرز فاسي دقيق إلى قطع ديكور تمنح المكان شخصية خاصة.":["De la broderie fassie raffinée aux objets décoratifs qui donnent du caractère à votre intérieur.","From fine Fassi embroidery to décor that gives a space its own character.","Von feiner Fassi-Stickerei bis zu Dekorationsstücken mit individuellem Charakter.","От изящной вышивки Фесса до декора, придающего интерьеру индивидуальность."],
"طرز فاسي، أغطية الطاولات والمنسوجات التقليدية.":["Broderie fassie, nappes et textiles traditionnels.","Fassi embroidery, tablecloths and traditional textiles.","Fassi-Stickerei, Tischdecken und traditionelle Textilien.","Вышивка Фесса, скатерти и традиционный текстиль."],
"السجاد وقطع ديكور مستوحاة من المغرب.":["Tapis et décoration inspirés du Maroc.","Rugs and décor inspired by Morocco.","Teppiche und Dekoration mit marokkanischer Inspiration.","Ковры и декор в марокканском стиле."],
"هدايا للمناسبات والضيافة.":["Cadeaux pour les occasions et l’hospitalité.","Gifts for occasions and hospitality.","Geschenke für Anlässe und Gastfreundschaft.","Подарки для праздников и гостеприимства."]
});


Object.assign(D,{
"الاستدامة والطاقة المتجددة":["Durabilité et énergies renouvelables","Sustainability & Renewable Energy","Nachhaltigkeit und erneuerbare Energien","Устойчивое развитие и возобновляемая энергия"],
"تراث أصيل ومستقبل أكثر استدامة":["Un patrimoine authentique et un avenir plus durable","Authentic Heritage, a More Sustainable Future","Authentisches Erbe und eine nachhaltigere Zukunft","Подлинное наследие и более устойчивое будущее"],
"نهتم بالتعاون المسؤول مع الحرفيين والموردين، وبالمنتجات المتينة والتغليف المدروس حيثما أمكن.":["Nous privilégions une collaboration responsable avec les artisans et fournisseurs, ainsi que des produits durables et des emballages réfléchis lorsque cela est possible.","We value responsible collaboration with artisans and suppliers, durable products and thoughtful packaging wherever possible.","Wir legen Wert auf verantwortungsvolle Zusammenarbeit mit Kunsthandwerkern und Lieferanten, langlebige Produkte und durchdachte Verpackungen, wo immer möglich.","Мы ценим ответственное сотрудничество с мастерами и поставщиками, долговечные товары и продуманную упаковку, где это возможно."],
"الطاقة المتجددة":["Énergies renouvelables","Renewable Energy","Erneuerbare Energien","Возобновляемая энергия"],
"يمكن أن تتوسع العلامة مستقبلاً إلى مبادرات أو شراكات في الطاقة المتجددة. ستُعرض أي تقنية أو مشروع فقط بعد التحقق من الشريك والقدرات والنتائج.":["À l’avenir, la marque pourrait développer des initiatives ou partenariats dans les énergies renouvelables. Tout projet sera présenté après vérification du partenaire, des capacités et des résultats.","The brand may explore renewable energy initiatives or partnerships in the future. Any technology or project will be presented only after verifying the partner, capabilities and results.","Die Marke könnte künftig Initiativen oder Partnerschaften im Bereich erneuerbare Energien entwickeln. Projekte werden erst nach Prüfung des Partners, der Fähigkeiten und der Ergebnisse vorgestellt.","В будущем бренд может изучать инициативы и партнёрства в области возобновляемой энергетики. Любой проект будет представлен только после проверки партнёра, возможностей и результатов."],
"لا تدّعي هذه الصفحة أن الشركة توفر تقنية طاقة محددة حالياً.":["Cette page ne prétend pas que l’entreprise propose actuellement une technologie énergétique spécifique.","This page does not claim that the company currently provides a specific energy technology.","Diese Seite behauptet nicht, dass das Unternehmen derzeit eine bestimmte Energietechnologie anbietet.","На этой странице не утверждается, что компания в настоящее время предлагает конкретную энергетическую технологию."],
"اكتشفوا الاختيارات":["Découvrez notre sélection","Explore our selection","Entdecken Sie unsere Auswahl","Ознакомьтесь с подборкой"],
"الطرز الفاسي، أغطية الطاولات والمنسوجات التقليدية. التوفر والسعر يؤكدان قبل الطلب.":["Broderie fassie, nappes et textiles traditionnels. Disponibilité et prix à confirmer avant commande.","Fassi embroidery, tablecloths and traditional textiles. Availability and price confirmed before ordering.","Fassi-Stickerei, Tischdecken und traditionelle Textilien. Verfügbarkeit und Preis werden vor der Bestellung bestätigt.","Вышивка Фесса, скатерти и традиционный текстиль. Наличие и цену необходимо подтвердить перед заказом."],
"الديكور المغربي، السجاد وقطع المنزل المختارة.":["Décoration marocaine, tapis et objets choisis pour la maison.","Moroccan décor, rugs and selected home pieces.","Marokkanische Dekoration, Teppiche und ausgewählte Wohnaccessoires.","Марокканский декор, ковры и тщательно подобранные предметы интерьера."],
"هدايا راقية للمناسبات والضيافة.":["Cadeaux raffinés pour les occasions et l’hospitalité.","Refined gifts for occasions and hospitality.","Edle Geschenke für besondere Anlässe und Gastfreundschaft.","Изысканные подарки для торжеств и гостеприимства."],
"طلبات مهنية للفنادق والرياض والمتاجر، حسب التوفر والمواصفات.":["Commandes professionnelles pour hôtels, riads et boutiques, selon disponibilité et spécifications.","Business orders for hotels, riads and shops, subject to availability and specifications.","Geschäftliche Bestellungen für Hotels, Riads und Geschäfte, je nach Verfügbarkeit und Spezifikation.","Оптовые заказы для отелей, риадов и магазинов в зависимости от наличия и спецификаций."],
"طلب معلومات ↗":["Demander des informations ↗","Enquire ↗","Informationen anfragen ↗","Запросить информацию ↗"],
"طلب عرض مهني ↗":["Demander une offre professionnelle ↗","Request a business quote ↗","Geschäftliches Angebot anfordern ↗","Запросить коммерческое предложение ↗"]
});
const langs=["fr","en","de","ru"];
const norm=s=>s.replace(/\s+/g," ").trim();
const originalTexts=new WeakMap();
function apply(lang){
const idx=langs.indexOf(lang);
if(lang==="ar" || idx<0){document.documentElement.lang="ar";document.documentElement.dir="rtl";return;return;}
document.documentElement.lang=lang;
document.documentElement.dir="ltr";
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
const nodes=[];
while(walker.nextNode())nodes.push(walker.currentNode);
for(const n of nodes){
if(!originalTexts.has(n))originalTexts.set(n,n.nodeValue);
const source=originalTexts.get(n);
const original=norm(source);
if(D[original] && n.nodeValue.trim()) {
const leading=source.match(/^\s*/)[0];
const trailing=source.match(/\s*$/)[0];
n.nodeValue=leading+D[original][idx]+trailing;
}
}
document.querySelectorAll("input,textarea").forEach(el=>{
const key=el.getAttribute("placeholder");
if(key&&D[norm(key)])el.placeholder=D[norm(key)][idx];
});
}
function init(){
const sel=document.getElementById("languageSelect");
if(!sel)return;
let saved="ar";
try{saved=localStorage.getItem("starkan-lang")||"ar"}catch(e){}
if(saved==="ar" || langs.includes(saved)) sel.value=saved;
const run=()=>{try{localStorage.setItem("starkan-lang",sel.value)}catch(e){};apply(sel.value);};
sel.addEventListener("change",run);
apply(sel.value);
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
else init();
})();
