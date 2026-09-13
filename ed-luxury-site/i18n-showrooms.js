(()=>{if(EDL_LANG!=='en')return;document.title='Showrooms — ED Luxury';EDL_TRANSLATE({'Nos showrooms':'Our showrooms','Shopping experience':'Private shopping experience','Prochains rendez-vous':'Upcoming appointments','Prochainement':'Coming soon','Être informé':'Keep me informed','Recevoir les prochaines invitations':'Receive upcoming invitations'});const set=(s,t)=>{const e=document.querySelector(s);if(e)e.textContent=t};set('.showrooms-intro h1','Our showrooms');set('.showrooms-lead','Private venues selected to host ED Luxury collections on exclusive occasions in a discreet setting.');set('.showroom-concept-title .eyebrow','Private shopping experience');set('.showroom-concept-title h2','A private encounter with our selection');const cp=document.querySelectorAll('.showroom-concept-copy p');if(cp[0])cp[0].textContent='On selected dates, ED Luxury hosts private events in exceptional apartments and venues across Paris.';if(cp[1])cp[1].textContent='Our showrooms are conceived as temporary private shopping experiences: an intimate setting where guests can discover, try on and discuss a selection of pieces chosen especially for the occasion.';if(cp[2])cp[2].textContent='Addresses and appointment times are shared exclusively with registered or invited guests.';set('.events-heading .eyebrow','Upcoming appointments');set('.events-heading h2','Paris private shopping');const cards=document.querySelectorAll('.event-card');if(cards[0]){const m=cards[0].querySelector('.event-month'),h=cards[0].querySelector('h3'),p=cards[0].querySelector('.event-description p'),a=cards[0].querySelector('.text-link');if(m)m.textContent='Coming soon';if(h)h.textContent='Private showroom — Paris';if(p)p.textContent='A private presentation of bags and pieces currently available through ED Luxury.';if(a)a.innerHTML='Keep me informed <span>→</span>'}if(cards[1]){const m=cards[1].querySelector('.event-month'),h=cards[1].querySelector('h3'),p=cards[1].querySelector('.event-description p'),a=cards[1].querySelector('.text-link');if(m)m.textContent='Coming soon';if(h)h.textContent='Shopping experience — Paris';if(p)p.textContent='An appointment-only experience in a Parisian apartment selected for the occasion.';if(a)a.innerHTML='Keep me informed <span>→</span>'}set('.showroom-cta h2','Receive upcoming invitations');const ctaP=document.querySelector('.showroom-cta > p:not(.eyebrow)');if(ctaP)ctaP.textContent='Dates, venues and selections are announced on a limited basis.';const ctaB=document.querySelector('.showroom-cta .button');if(ctaB)ctaB.textContent='Contact us';})();
(()=>{
  if (EDL_LANG !== 'ko') return;
  document.title = '쇼룸 — ED Luxury';
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = '파리의 프라이빗 쇼룸에서 ED Luxury가 엄선한 컬렉션을 만나보세요. 특별한 쇼핑 경험과 다음 초대 소식을 확인하세요.';
  EDL_TRANSLATE({
    'Nos showrooms': 'ED Luxury 쇼룸',
    'Shopping experience': '프라이빗 쇼핑 경험',
    'Prochains rendez-vous': '다가오는 이벤트',
    'Paris private shopping': '파리 프라이빗 쇼핑',
    'Prochainement': '추후 공개',
    'Private showroom — Paris': '프라이빗 쇼룸 — 파리',
    'Shopping experience — Paris': '프라이빗 쇼핑 경험 — 파리',
    'Être informé': '소식 받기',
    'Recevoir les prochaines invitations': '다음 초대 소식 받기',
    'Showroom ED Luxury à Paris': '파리에 위치한 ED Luxury 쇼룸',
    'Appartement parisien ED Luxury': 'ED Luxury의 파리 아파트 공간',
    'Espace de présentation privé ED Luxury': 'ED Luxury의 프라이빗 전시 공간',
    'Salon de showroom ED Luxury': 'ED Luxury 쇼룸의 살롱',
    'Showroom privé ED Luxury': 'ED Luxury 프라이빗 쇼룸',
    'Shopping experience ED Luxury à Paris': '파리에서 열리는 ED Luxury 프라이빗 쇼핑 행사'
  });
  const set = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };
  set('.showrooms-lead', 'ED Luxury 컬렉션을 조용하고 특별한 분위기에서 만나보실 수 있도록 엄선한 프라이빗 공간입니다.');
  set('.showroom-concept-title h2', '엄선한 컬렉션과의 프라이빗한 만남');
  const concept = document.querySelectorAll('.showroom-concept-copy p');
  if (concept[0]) concept[0].textContent = 'ED Luxury는 파리의 특별한 아파트와 공간에서 정해진 날짜에 프라이빗 이벤트를 엽니다.';
  if (concept[1]) concept[1].textContent = '쇼룸은 잠시 열리는 프라이빗 쇼핑 공간입니다. 초대받은 분들은 행사를 위해 특별히 고른 제품을 가까이에서 살펴보고, 직접 착용해 보며 이야기를 나눌 수 있습니다.';
  if (concept[2]) concept[2].textContent = '장소와 방문 가능 시간은 등록하셨거나 초대받으신 분들께만 안내해 드립니다.';
  const cards = document.querySelectorAll('.event-card');
  if (cards[0]) {
    const description = cards[0].querySelector('.event-description p');
    if (description) description.textContent = 'ED Luxury에서 현재 만나보실 수 있는 가방과 제품을 프라이빗하게 소개합니다.';
  }
  if (cards[1]) {
    const description = cards[1].querySelector('.event-description p');
    if (description) description.textContent = '이번 행사를 위해 선정한 파리의 아파트에서 예약제로 진행하는 특별한 쇼핑 경험입니다.';
  }
  set('.showroom-cta > p:not(.eyebrow)', '일정과 장소, 선보일 제품은 확정되는 대로 개별적으로 안내해 드립니다.');
})();

(()=>{
  if(EDL_LANG!=='es')return;
  document.title='Showrooms privados — ED Luxury';
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.content='Descubra los showrooms privados de ED Luxury y nuestras experiencias de compras exclusivas en París.';
  EDL_TRANSLATE({
    'ED Luxury Paris':'ED Luxury París',
    'Nos showrooms':'Nuestros showrooms',
    'Shopping experience':'Experiencia de compras privadas',
    'Prochains rendez-vous':'Próximos encuentros',
    'Paris private shopping':'Compras privadas en París',
    'Prochainement':'Próximamente',
    'Private showroom — Paris':'Showroom privado — París',
    'Shopping experience — Paris':'Experiencia de compras privadas — París',
    'Être informé':'Recibir novedades',
    'Recevoir les prochaines invitations':'Recibir las próximas invitaciones',
    'Showroom ED Luxury à Paris':'Showroom de ED Luxury en París',
    'Appartement parisien ED Luxury':'Apartamento parisino de ED Luxury',
    'Espace de présentation privé ED Luxury':'Espacio privado de presentación de ED Luxury',
    'Salon de showroom ED Luxury':'Salón del showroom de ED Luxury',
    'Showroom privé ED Luxury':'Showroom privado de ED Luxury',
    'Shopping experience ED Luxury à Paris':'Experiencia de compras de ED Luxury en París'
  });
  const set=(selector,value)=>{const element=document.querySelector(selector);if(element)element.textContent=value};
  set('.showrooms-lead','Espacios privados seleccionados para presentar las colecciones de ED Luxury en ocasiones especiales y en un entorno discreto.');
  set('.showroom-concept-title h2','Un encuentro privado con nuestra selección');
  const concept=document.querySelectorAll('.showroom-concept-copy p');
  if(concept[0])concept[0].textContent='En fechas seleccionadas, ED Luxury organiza eventos privados en apartamentos y espacios excepcionales de París.';
  if(concept[1])concept[1].textContent='Nuestros showrooms son experiencias temporales de compras privadas: un entorno íntimo donde los invitados pueden descubrir, probar y conversar sobre piezas elegidas especialmente para la ocasión.';
  if(concept[2])concept[2].textContent='La dirección y los horarios se comunican exclusivamente a las personas inscritas o invitadas.';
  const cards=document.querySelectorAll('.event-card');
  if(cards[0]){const description=cards[0].querySelector('.event-description p');if(description)description.textContent='Una presentación privada de bolsos y piezas disponibles actualmente en ED Luxury.'}
  if(cards[1]){const description=cards[1].querySelector('.event-description p');if(description)description.textContent='Una experiencia con cita previa en un apartamento parisino seleccionado para la ocasión.'}
  set('.showroom-cta > p:not(.eyebrow)','Las fechas, los lugares y las piezas seleccionadas se anuncian de forma puntual.');
})();

(()=>{
  if(EDL_LANG!=='ar')return;
  document.title='صالات العرض الخاصة — ED Luxury';
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.content='اكتشف صالات العرض الخاصة من ED Luxury وتجارب التسوق الحصرية في باريس.';
  EDL_TRANSLATE({
    'ED Luxury Paris':'ED Luxury باريس',
    'Nos showrooms':'صالات العرض الخاصة بنا',
    'Shopping experience':'تجربة تسوّق خاصة',
    'Prochains rendez-vous':'المواعيد القادمة',
    'Paris private shopping':'تسوّق خاص في باريس',
    'Prochainement':'قريباً',
    'Private showroom — Paris':'صالة عرض خاصة — باريس',
    'Shopping experience — Paris':'تجربة تسوّق خاصة — باريس',
    'Être informé':'تلقَّ آخر المستجدات',
    'Recevoir les prochaines invitations':'تلقَّ دعواتنا المقبلة',
    'Showroom ED Luxury à Paris':'صالة عرض ED Luxury في باريس',
    'Appartement parisien ED Luxury':'شقة باريسية تستضيف ED Luxury',
    'Espace de présentation privé ED Luxury':'مساحة خاصة لعرض قطع ED Luxury',
    'Salon de showroom ED Luxury':'صالون صالة عرض ED Luxury',
    'Showroom privé ED Luxury':'صالة عرض ED Luxury الخاصة',
    'Shopping experience ED Luxury à Paris':'تجربة تسوّق خاصة من ED Luxury في باريس'
  });
  const set=(selector,value)=>{const element=document.querySelector(selector);if(element)element.textContent=value};
  set('.showrooms-lead','مساحات خاصة نختارها بعناية لاستقبال مجموعات ED Luxury في مناسبات محدودة، ضمن أجواء راقية تحافظ على خصوصيتك.');
  set('.showroom-concept-title h2','لقاء خاص مع مجموعتنا المختارة');
  const concept=document.querySelectorAll('.showroom-concept-copy p');
  if(concept[0])concept[0].textContent='تنظّم ED Luxury في مواعيد مختارة فعاليات خاصة داخل شقق ومساحات استثنائية في باريس.';
  if(concept[1])concept[1].textContent='صُممت صالات العرض لدينا كتجارب تسوّق خاصة لفترة محدودة، في أجواء حميمة تتيح لضيوفنا اكتشاف قطع انتُقيت خصيصاً للمناسبة وتجربتها والتعرّف على تفاصيلها.';
  if(concept[2])concept[2].textContent='نشارك العناوين ومواعيد الزيارة حصرياً مع المسجلين أو المدعوين.';
  const cards=document.querySelectorAll('.event-card');
  if(cards[0]){const description=cards[0].querySelector('.event-description p');if(description)description.textContent='عرض خاص لمجموعة من الحقائب والقطع المتاحة حالياً لدى ED Luxury.'}
  if(cards[1]){const description=cards[1].querySelector('.event-description p');if(description)description.textContent='تجربة تسوّق بموعد مسبق داخل شقة باريسية اختيرت خصيصاً لهذه المناسبة.'}
  set('.showroom-cta > p:not(.eyebrow)','نعلن عن المواعيد والأماكن والقطع المختارة عند تحديد كل فعالية.');
})();

(()=>{
  if(EDL_LANG!=='ja')return;
  document.title='ショールーム — ED Luxury';
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.content='ED Luxuryのパリのプライベートショールームと、特別なショッピング体験をご案内します。';
  EDL_TRANSLATE({
    'ED Luxury Paris':'ED Luxury パリ',
    'Nos showrooms':'私たちのショールーム',
    'Shopping experience':'プライベートショッピング',
    'Prochains rendez-vous':'今後のご案内',
    'Paris private shopping':'パリのプライベートショッピング',
    'Prochainement':'近日開催',
    'Private showroom — Paris':'プライベートショールーム — パリ',
    'Shopping experience — Paris':'プライベートショッピング — パリ',
    'Être informé':'開催情報を受け取る',
    'Recevoir les prochaines invitations':'次回のご招待を受け取る',
    'Showroom ED Luxury à Paris':'パリにあるED Luxuryのショールーム',
    'Appartement parisien ED Luxury':'ED Luxuryのパリのアパルトマン',
    'Espace de présentation privé ED Luxury':'ED Luxuryのプライベートな展示スペース',
    'Salon de showroom ED Luxury':'ED Luxuryショールームのサロン',
    'Showroom privé ED Luxury':'ED Luxuryのプライベートショールーム',
    'Shopping experience ED Luxury à Paris':'パリでのED Luxuryのプライベートショッピング体験'
  });
  const set=(selector,value)=>{const element=document.querySelector(selector);if(element)element.textContent=value};
  set('.showrooms-lead','ED Luxuryのコレクションを、落ち着いたプライベートな空間でご覧いただくために選び抜いた特別な場所です。');
  set('.showroom-concept-title h2','選び抜かれた逸品とのプライベートな出会い');
  const concept=document.querySelectorAll('.showroom-concept-copy p');
  if(concept[0])concept[0].textContent='ED Luxuryは日程を限定し、パリの特別なアパルトマンや会場でプライベートイベントを開催しています。';
  if(concept[1])concept[1].textContent='私たちのショールームは、期間限定のプライベートショッピング体験です。親密な空間で、この日のために選んだ逸品を実際にご覧いただき、お試しになりながら、ゆっくりお話しいただけます。';
  if(concept[2])concept[2].textContent='会場の住所とご来場時間は、お申し込み済みの方とご招待した方にのみご案内します。';
  const cards=document.querySelectorAll('.event-card');
  if(cards[0]){const description=cards[0].querySelector('.event-description p');if(description)description.textContent='ED Luxuryで現在ご紹介できるバッグや逸品を、プライベートな場でご覧いただけます。'}
  if(cards[1]){const description=cards[1].querySelector('.event-description p');if(description)description.textContent='この日のために選んだパリのアパルトマンで、予約制のショッピング体験をお楽しみいただけます。'}
  set('.showroom-cta > p:not(.eyebrow)','日程、会場、ご紹介するお品物は、決まり次第個別にご案内します。');
})();

 
(()=>{
  if(EDL_LANG!=='zh')return;
  document.title='私享展厅 — ED Luxury';
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.content='探索 ED Luxury 位于巴黎的私享展厅与专属购物体验，了解即将举行的活动及邀请。';
  EDL_TRANSLATE({
    'ED Luxury Paris':'ED Luxury 巴黎',
    'Nos showrooms':'我们的私享展厅',
    'Shopping experience':'私享购物体验',
    'Prochains rendez-vous':'即将举行的活动',
    'Paris private shopping':'巴黎私享购物',
    'Prochainement':'即将公布',
    'Private showroom — Paris':'巴黎私享展厅',
    'Shopping experience — Paris':'巴黎私享购物体验',
    'Être informé':'获取活动消息',
    'Recevoir les prochaines invitations':'获取下一场活动邀请',
    'Showroom ED Luxury à Paris':'ED Luxury 位于巴黎的展厅',
    'Appartement parisien ED Luxury':'ED Luxury 巴黎公寓空间',
    'Espace de présentation privé ED Luxury':'ED Luxury 私享展示空间',
    'Salon de showroom ED Luxury':'ED Luxury 展厅会客厅',
    'Showroom privé ED Luxury':'ED Luxury 私享展厅',
    'Shopping experience ED Luxury à Paris':'ED Luxury 在巴黎举办的私享购物体验'
  });
  const set=(selector,value)=>{const element=document.querySelector(selector);if(element)element.textContent=value};
  set('.showrooms-lead','我们精心甄选私密场所，在特定时期开设 ED Luxury 展厅，让宾客从容欣赏精选藏品。');
  set('.showroom-concept-title h2','与精选珍品的一场私享邂逅');
  const concept=document.querySelectorAll('.showroom-concept-copy p');
  if(concept[0])concept[0].textContent='ED Luxury 于指定日期，在巴黎别具格调的公寓和场所举办私人活动。';
  if(concept[1])concept[1].textContent='我们的展厅以限时私享购物体验呈现。在亲密舒适的空间里，宾客可以欣赏、试用专为活动甄选的珍品，并与我们交流每件作品的细节。';
  if(concept[2])concept[2].textContent='活动地址和到访时段仅向已登记或受邀的宾客提供。';
  const cards=document.querySelectorAll('.event-card');
  if(cards[0]){const description=cards[0].querySelector('.event-description p');if(description)description.textContent='以私人形式呈现 ED Luxury 目前可选购的精选手袋与珍品。'}
  if(cards[1]){const description=cards[1].querySelector('.event-description p');if(description)description.textContent='在专为活动挑选的巴黎公寓内，享受预约制私享购物体验。'}
  set('.showroom-cta > p:not(.eyebrow)','活动日期、地点和展出珍品将在确定后陆续公布。');
})();

 
(()=>{
  if(EDL_LANG!=='ru')return;
  document.title='Шоурумы — ED Luxury';
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.content='Познакомьтесь с частными шоурумами ED Luxury и закрытыми встречами для покупателей в Париже.';
  EDL_TRANSLATE({
    'ED Luxury Paris':'ED Luxury Париж',
    'Nos showrooms':'Наши шоурумы',
    'Shopping experience':'Частные встречи с коллекцией',
    'Prochains rendez-vous':'Ближайшие встречи',
    'Paris private shopping':'Частный шопинг в Париже',
    'Prochainement':'Скоро',
    'Private showroom — Paris':'Частный шоурум — Париж',
    'Shopping experience — Paris':'Частный шопинг — Париж',
    'Être informé':'Узнать о событии',
    'Recevoir les prochaines invitations':'Получать приглашения',
    'Showroom ED Luxury à Paris':'Шоурум ED Luxury в Париже',
    'Appartement parisien ED Luxury':'Парижские апартаменты ED Luxury',
    'Espace de présentation privé ED Luxury':'Частное пространство для презентаций ED Luxury',
    'Salon de showroom ED Luxury':'Гостиная шоурума ED Luxury',
    'Showroom privé ED Luxury':'Частный шоурум ED Luxury',
    'Shopping experience ED Luxury à Paris':'Частная встреча ED Luxury в Париже'
  });
  const set=(selector,value)=>{const element=document.querySelector(selector);if(element)element.textContent=value};
  set('.showrooms-lead','Мы выбираем уединённые пространства, чтобы в особые дни представлять коллекции ED Luxury в конфиденциальной обстановке.');
  set('.showroom-concept-title h2','Личная встреча с нашей коллекцией');
  const concept=document.querySelectorAll('.showroom-concept-copy p');
  if(concept[0])concept[0].textContent='В определённые дни ED Luxury проводит частные мероприятия в исключительных апартаментах и других пространствах Парижа.';
  if(concept[1])concept[1].textContent='Наши шоурумы открываются на ограниченное время. В камерной атмосфере гости могут рассмотреть и примерить изделия, подобранные специально для встречи, и обсудить их с нашей командой.';
  if(concept[2])concept[2].textContent='Адреса и время посещения сообщаются только зарегистрированным или приглашённым гостям.';
  const cards=document.querySelectorAll('.event-card');
  if(cards[0]){const description=cards[0].querySelector('.event-description p');if(description)description.textContent='Частная презентация сумок и других изделий, доступных в ED Luxury.'}
  if(cards[1]){const description=cards[1].querySelector('.event-description p');if(description)description.textContent='Встреча по предварительной записи в парижских апартаментах, выбранных специально для этого события.'}
  set('.showroom-cta > p:not(.eyebrow)','Даты, места проведения и представленные изделия объявляются по мере подготовки встреч.');
})();
