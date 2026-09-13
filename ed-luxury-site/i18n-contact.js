(()=>{if(EDL_LANG!=='en')return;document.title='Contact — ED Luxury';EDL_TRANSLATE({'E-mail':'Email','Pour échanger directement avec notre équipe.':'To speak directly with our team.','Localisation':'Location','Rencontres et showrooms sur rendez-vous ou invitation.':'Meetings and showrooms by appointment or invitation.','Vous recherchez une pièce précise ?':'Looking for a specific piece?','Confier une recherche':'Start a private search','Vendre une pièce':'Sell a piece','Vous souhaitez nous proposer un sac ?':'Would you like to offer us a bag?','Proposer une pièce':'Offer a piece'});const set=(s,t)=>{const e=document.querySelector(s);if(e)e.textContent=t};set('.contact-intro h1','Contact us');set('.contact-lead','For any questions about ED Luxury, a piece from our selection or our upcoming private events, our team is at your disposal.');const notes=document.querySelectorAll('.contact-note');if(notes[0])notes[0].textContent='To speak directly with our team.';if(notes[1])notes[1].textContent='Meetings and showrooms by appointment or invitation.';set('.contact-sourcing .eyebrow','Private sourcing');set('.contact-sourcing h2','Looking for a specific piece?');const sourcingP=document.querySelector('.contact-sourcing > p:not(.eyebrow)');if(sourcingP)sourcingP.textContent='Entrust us with the search for your Birkin, Kelly or HAC according to your preferred size, colour, material, hardware, condition and budget.';const sourcingB=document.querySelector('.contact-sourcing .button');if(sourcingB)sourcingB.textContent='Start a private search';set('.contact-sell .eyebrow','Sell a piece');set('.contact-sell h3','Would you like to offer us a bag?');const sellP=document.querySelector('.contact-sell div > p:not(.eyebrow)');if(sellP)sellP.textContent='ED Luxury will soon be able to review offers of Birkin, Kelly, HAC and other selected pieces.';set('.sell-coming-soon','Offer a piece');})();
(()=>{
  if (EDL_LANG !== 'ko') return;
  document.title = '문의하기 — ED Luxury';
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = 'ED Luxury의 셀렉션, 파리 프라이빗 쇼룸 또는 서비스에 관한 문의는 저희 팀에 연락해 주세요.';
  EDL_TRANSLATE({
    'E-mail': '이메일',
    'Localisation': '위치',
    'Paris, France': '파리, 프랑스',
    'Pour échanger directement avec notre équipe.': '담당 팀과 직접 상담하실 수 있습니다.',
    'Rencontres et showrooms sur rendez-vous ou invitation.': '상담과 쇼룸 방문은 예약 또는 초대를 통해 진행됩니다.',
    'Vous recherchez une pièce précise ?': '찾고 계신 제품이 있으신가요?',
    'Vendre une pièce': '제품 판매',
    'Vous souhaitez nous proposer un sac ?': '판매를 제안하고 싶은 가방이 있으신가요?'
  });
  const set = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };
  set('.contact-lead', 'ED Luxury, 셀렉션에 포함된 제품 또는 예정된 프라이빗 이벤트에 대해 궁금한 점이 있으시면 언제든 문의해 주세요. 저희 팀이 도와드리겠습니다.');
  set('.contact-sourcing > p:not(.eyebrow)', '원하시는 버킨, 켈리 또는 HAC를 크기, 색상, 소재, 하드웨어, 상태와 예산에 맞춰 찾아드립니다.');
  set('.contact-sell div > p:not(.eyebrow)', 'ED Luxury는 곧 버킨, 켈리, HAC 및 그 밖의 엄선된 제품에 대한 판매 제안을 검토할 예정입니다.');
})();

(()=>{
  if(EDL_LANG!=='es')return;
  document.title='Contacto — ED Luxury';
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.content='Contacte con ED Luxury para cualquier consulta sobre nuestras piezas, nuestros showrooms privados o nuestros servicios.';
  EDL_TRANSLATE({
    'E-mail':'Correo electrónico',
    'Localisation':'Ubicación',
    'Paris, France':'París, Francia',
    'Pour échanger directement avec notre équipe.':'Para hablar directamente con nuestro equipo.',
    'Rencontres et showrooms sur rendez-vous ou invitation.':'Encuentros y visitas a nuestros showrooms con cita previa o invitación.',
    'Vous recherchez une pièce précise ?':'¿Busca una pieza en particular?',
    'Vendre une pièce':'Vender una pieza',
    'Vous souhaitez nous proposer un sac ?':'¿Desea ofrecernos un bolso?'
  });
  const set=(selector,value)=>{const element=document.querySelector(selector);if(element)element.textContent=value};
  set('.contact-lead','Si tiene alguna pregunta sobre ED Luxury, una pieza de nuestra selección o nuestros próximos eventos privados, nuestro equipo estará encantado de atenderle.');
  set('.contact-sourcing > p:not(.eyebrow)','Confíenos la búsqueda de su Birkin, Kelly o HAC según sus preferencias de tamaño, color, material, herrajes, estado y presupuesto.');
  set('.contact-sell div > p:not(.eyebrow)','Próximamente, ED Luxury podrá estudiar sus propuestas de Birkin, Kelly, HAC y otras piezas seleccionadas.');
})();

(()=>{
  if(EDL_LANG!=='ar')return;
  document.title='تواصل معنا — ED Luxury';
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.content='تواصل مع ED Luxury للاستفسار عن قطعنا المختارة أو صالات العرض الخاصة أو خدماتنا.';
  EDL_TRANSLATE({
    'E-mail':'البريد الإلكتروني',
    'Localisation':'الموقع',
    'Paris, France':'باريس، فرنسا',
    'Pour échanger directement avec notre équipe.':'للتواصل مباشرة مع فريقنا.',
    'Rencontres et showrooms sur rendez-vous ou invitation.':'اللقاءات وزيارات صالات العرض بموعد مسبق أو بدعوة.',
    'Vous recherchez une pièce précise ?':'هل تبحث عن قطعة محددة؟',
    'Vendre une pièce':'بيع قطعة',
    'Vous souhaitez nous proposer un sac ?':'هل ترغب في عرض حقيبة للبيع؟'
  });
  const set=(selector,value)=>{const element=document.querySelector(selector);if(element)element.textContent=value};
  set('.contact-lead','إذا كان لديك أي سؤال عن ED Luxury، أو قطعة من مجموعتنا المختارة، أو فعالياتنا الخاصة المقبلة، يسعد فريقنا مساعدتك.');
  set('.contact-sourcing > p:not(.eyebrow)','دعنا نبحث لك عن حقيبة بيركن أو كيلي أو HAC وفق تفضيلاتك في الحجم واللون والخامة والمعدن والحالة والميزانية.');
  set('.contact-sell div > p:not(.eyebrow)','ستتمكن ED Luxury قريباً من دراسة عروض بيع حقائب بيركن وكيلي وHAC وغيرها من القطع المختارة.');
})();

(()=>{
  if(EDL_LANG!=='ja')return;
  document.title='お問い合わせ — ED Luxury';
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.content='ED Luxuryのセレクション、プライベートショールーム、各種サービスに関するご質問は、こちらからお問い合わせください。';
  EDL_TRANSLATE({
    'E-mail':'メール',
    'Localisation':'所在地',
    'Paris, France':'フランス・パリ',
    'Pour échanger directement avec notre équipe.':'スタッフと直接ご相談いただけます。',
    'Rencontres et showrooms sur rendez-vous ou invitation.':'ご面会やショールームへのご案内は、事前予約またはご招待に限ります。',
    'Vous recherchez une pièce précise ?':'お探しのお品物はございますか？',
    'Vendre une pièce':'お品物の売却',
    'Vous souhaitez nous proposer un sac ?':'バッグのご売却をお考えですか？'
  });
  const set=(selector,value)=>{const element=document.querySelector(selector);if(element)element.textContent=value};
  set('.contact-lead','ED Luxuryやセレクションのお品物、今後のプライベートイベントについてご質問がございましたら、お気軽にお問い合わせください。スタッフが丁寧にご案内します。');
  set('.contact-sourcing > p:not(.eyebrow)','サイズ、カラー、素材、金具、コンディション、ご予算などのご希望に合わせて、Birkin、Kelly、HACをお探しします。');
  set('.contact-sell div > p:not(.eyebrow)','ED Luxuryでは近日中に、Birkin、Kelly、HACをはじめとする厳選されたお品物のご提案を承る予定です。');
})();

 
(()=>{
  if(EDL_LANG!=='zh')return;
  document.title='联系我们 — ED Luxury';
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.content='如需咨询 ED Luxury 精选藏品、巴黎私享展厅或我们的服务，欢迎联系我们。';
  EDL_TRANSLATE({
    'E-mail':'电子邮箱',
    'Localisation':'所在地',
    'Paris, France':'法国巴黎',
    'Pour échanger directement avec notre équipe.':'欢迎通过 WhatsApp 与我们的团队直接交流。',
    'Rencontres et showrooms sur rendez-vous ou invitation.':'会面及展厅参观须提前预约或凭邀请参加。',
    'Vous recherchez une pièce précise ?':'正在寻找心仪的珍品？',
    'Vendre une pièce':'出售藏品',
    'Vous souhaitez nous proposer un sac ?':'想向我们推荐一款手袋？'
  });
  const set=(selector,value)=>{const element=document.querySelector(selector);if(element)element.textContent=value};
  set('.contact-lead','无论您想了解 ED Luxury、精选系列中的藏品，还是即将举行的私人活动，我们的团队都乐意为您提供帮助。');
  set('.contact-sourcing > p:not(.eyebrow)','告诉我们您对尺寸、颜色、材质、金属件、品相和预算的要求，我们将为您寻找心仪的 Birkin、Kelly 或 HAC。');
  set('.contact-sell div > p:not(.eyebrow)','ED Luxury 即将开放 Birkin、Kelly、HAC 及其他精选藏品的出售提案评估。');
})();
