(() => {
  const button = document.querySelector('.language');
  let language = 'en';
  try { language = localStorage.getItem('portfolio-language') === 'zh-CN' ? 'zh-CN' : 'en'; } catch {}
  const apply = () => {
    document.documentElement.lang = language;
    button.setAttribute('aria-pressed', String(language === 'zh-CN'));
    button.setAttribute('aria-label', language === 'en' ? 'Switch language to Chinese' : '切换至英文');
  };
  apply();
  button.addEventListener('click', () => {
    language = language === 'en' ? 'zh-CN' : 'en';
    try { localStorage.setItem('portfolio-language', language); } catch {}
    apply();
  });
})();
