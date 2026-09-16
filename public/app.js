(() => {
 const button = document.querySelector('.language');
 const filters = [...document.querySelectorAll('[data-filter]')];
 const cards = [...document.querySelectorAll('[data-category]')];
 const announcement = document.querySelector('.filter-count');
 let language = 'en';
 try { language = localStorage.getItem('portfolio-language') === 'zh-CN' ? 'zh-CN' : 'en'; } catch {}
 const announce = () => {
   if (announcement) {
     const count = cards.filter(card => !card.hidden).length;
     announcement.textContent = language === 'en' ? `${count} projects shown` : `显示 ${count} 个项目`;
   }
 };
 const apply = () => {
   document.documentElement.lang = language;
   button?.setAttribute('aria-pressed', String(language === 'zh-CN'));
   button?.setAttribute('aria-label', language === 'en' ? 'Switch language to Chinese' : '切换至英文');
   announce();
 };
 apply();
 button?.addEventListener('click', () => {
   language = language === 'en' ? 'zh-CN' : 'en';
   try { localStorage.setItem('portfolio-language', language); } catch {}
   apply();
 });
 filters.forEach(filter => filter.addEventListener('click', () => {
   filters.forEach(item => item.setAttribute('aria-pressed', String(item === filter)));
   cards.forEach(card => { card.hidden = filter.dataset.filter !== 'all' && card.dataset.category !== filter.dataset.filter; });
   announce();
 }));
})();
