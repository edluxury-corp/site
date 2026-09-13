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
