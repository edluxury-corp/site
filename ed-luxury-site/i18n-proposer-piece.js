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
