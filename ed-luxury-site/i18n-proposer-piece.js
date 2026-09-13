(() => {
  const translations = {
    en: {
      'Proposer une pièce — prochainement': 'Offer a piece — coming soon',
      'Notre service de proposition de pièces sera bientôt disponible. En attendant, notre équipe reste à votre disposition.': 'Our service for offering pieces will be available soon. In the meantime, our team is here to help.',
      'Retour à l’accueil': 'Back to home'
    },
    ko: {
      'Proposer une pièce — prochainement': '제품 판매 제안 — 곧 만나요',
      'Notre service de proposition de pièces sera bientôt disponible. En attendant, notre équipe reste à votre disposition.': '소장하신 제품의 판매를 제안하는 서비스가 곧 시작됩니다. 그동안 궁금한 점은 저희 팀에 문의해 주세요.',
      'Retour à l’accueil': '홈으로 돌아가기'
    }
  };
  const language = window.EDL_LANG;
  if (!translations[language]) return;
  window.EDL_TRANSLATE?.(translations[language]);
  document.title = language === 'ko' ? '제품 판매 제안 — ED Luxury' : 'Offer a piece — ED Luxury';
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = language === 'ko'
    ? 'ED Luxury 제품 판매 제안 서비스가 곧 시작됩니다. 궁금한 점은 저희 팀에 문의해 주세요.'
    : 'Offer a piece to ED Luxury — coming soon. Contact our team in the meantime.';
})();

(()=>{
  if(window.EDL_LANG!=='es')return;
  window.EDL_TRANSLATE?.({
    'Proposer une pièce — prochainement':'Ofrecer una pieza — próximamente',
    'Notre service de proposition de pièces sera bientôt disponible. En attendant, notre équipe reste à votre disposition.':'Próximamente podrá ofrecernos sus piezas. Mientras tanto, nuestro equipo estará encantado de atenderle.',
    'Retour à l’accueil':'Volver al inicio'
  });
  document.title='Ofrecer una pieza — ED Luxury';
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.content='Próximamente podrá ofrecer una pieza a ED Luxury. Mientras tanto, póngase en contacto con nuestro equipo.';
})();

(()=>{
  if(window.EDL_LANG!=='ar')return;
  window.EDL_TRANSLATE?.({
    'Proposer une pièce — prochainement':'عرض قطعة للبيع — قريباً',
    'Notre service de proposition de pièces sera bientôt disponible. En attendant, notre équipe reste à votre disposition.':'ستتوفر قريباً خدمة عرض القطع للبيع لدى ED Luxury. وحتى ذلك الحين، يسعد فريقنا مساعدتك.',
    'Retour à l’accueil':'العودة إلى الصفحة الرئيسية'
  });
  document.title='عرض قطعة للبيع — ED Luxury';
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.content='ستتوفر قريباً خدمة عرض القطع للبيع لدى ED Luxury. تواصل مع فريقنا لأي استفسار.';
})();

(()=>{
  if(window.EDL_LANG!=='ja')return;
  window.EDL_TRANSLATE?.({
    'Proposer une pièce — prochainement':'お品物のご提案 — 近日開始予定',
    'Notre service de proposition de pièces sera bientôt disponible. En attendant, notre équipe reste à votre disposition.':'お品物をご提案いただけるサービスは、近日中に開始予定です。それまでの間も、ご質問がございましたらお気軽にお問い合わせください。',
    'Retour à l’accueil':'ホームに戻る'
  });
  document.title='お品物のご提案 — ED Luxury';
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.content='ED Luxuryでは、お品物をご提案いただけるサービスを近日開始予定です。ご質問はスタッフまでお気軽にお問い合わせください。';
})();

 
(()=>{
  if(window.EDL_LANG!=='zh')return;
  window.EDL_TRANSLATE?.({
    'Proposer une pièce — prochainement':'提交藏品 — 即将开放',
    'Notre service de proposition de pièces sera bientôt disponible. En attendant, notre équipe reste à votre disposition.':'提交藏品的服务即将开放。在此期间，如有任何疑问，欢迎联系我们的团队。',
    'Retour à l’accueil':'返回首页'
  });
  document.title='提交藏品 — ED Luxury';
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.content='ED Luxury 的藏品提案服务即将开放。如需咨询，欢迎联系我们的团队。';
})();

(()=> {
  if (window.EDL_LANG !== 'ru') return;
  window.EDL_TRANSLATE?.({
    'Proposer une pièce — prochainement': 'Предложить изделие — скоро',
    'Notre service de proposition de pièces sera bientôt disponible. En attendant, notre équipe reste à votre disposition.': 'Скоро вы сможете предложить своё изделие ED Luxury. Пока сервис готовится к запуску, наша команда с радостью ответит на ваши вопросы.',
    'Retour à l’accueil': 'Вернуться на главную'
  });
  document.title = 'Предложить изделие — ED Luxury';
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = 'Скоро вы сможете предложить изделие ED Luxury. Пока сервис готовится к запуску, свяжитесь с нашей командой.';
})();
