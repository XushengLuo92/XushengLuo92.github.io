(() => {
  const legacySections = {
    research: 'research.html', publications: 'publications.html',
    news: 'news.html', facility: 'lab.html', service: 'service.html', contact: 'contact.html'
  };
  function redirectLegacySection() {
    const destination = legacySections[location.hash.slice(1)];
    if (document.body.classList.contains('homepage') && destination) {
      location.replace(destination);
      return true;
    }
  }
  if (redirectLegacySection()) return;
  window.addEventListener('hashchange', redirectLegacySection);

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  menuButton.hidden = false;
  function closeMenu() {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
  const mobile = window.matchMedia('(max-width: 1000px)');
  mobile.addEventListener('change', closeMenu);

  if (document.querySelector('.publication-list')) {
    const papers = [...document.querySelectorAll('.publication')];
    const tabs = [...document.querySelectorAll('.filter-tab')];
    const search = document.querySelector('#paper-search');
    const allButton = document.querySelector('.all-papers');
    const count = document.querySelector('#results-count');
    let filter = 'selected';
    // Search the complete archive, including authors, venues, and years.
    const searchable = new Map(papers.map(paper => [paper, paper.textContent.toLowerCase().replace(/\s+/g, ' ')]));
    function applyFilter() {
      const query = search.value.trim().toLowerCase();
      let visible = 0;
      for (const paper of papers) {
        const matches = query ? query.split(/\s+/).every(word => searchable.get(paper).includes(word)) : filter === 'all' || paper.dataset.selected === 'true';
        paper.hidden = !matches;
        if (matches) visible++;
        else paper.querySelector('video')?.pause();
      }
      for (const tab of tabs) {
        const active = tab.dataset.filter === (query ? 'all' : filter);
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-pressed', String(active));
      }
      count.textContent = `${visible} of ${papers.length} papers`;
      document.querySelector('.no-results').hidden = visible > 0;
      allButton.hidden = filter === 'all' || Boolean(query);
    }
    document.querySelector('.publication-toolbar').hidden = false;
    tabs.forEach(tab => tab.addEventListener('click', () => {
      filter = tab.dataset.filter;
      search.value = '';
      applyFilter();
    }));
    search.addEventListener('input', applyFilter);
    allButton.addEventListener('click', () => {
      filter = 'all';
      applyFilter();
      tabs[1].focus({ preventScroll: true });
      document.querySelector('.publication-toolbar').scrollIntoView({ block: 'start' });
    });
    applyFilter();
  }
  document.querySelector('#copyright-year').textContent = new Date().getFullYear();

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window) {
    // Controls stay available; videos never autoplay or preload the full archive.
    const mediaObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) entry.target.pause();
      });
    });
    document.querySelectorAll('video').forEach(video => mediaObserver.observe(video));
    if (!reducedMotion.matches) {
      const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      document.querySelectorAll('.about-grid, .research-heading, .research-item, .facility-card, .service-grid').forEach(el => {
        el.classList.add('reveal-pending');
        revealObserver.observe(el);
      });
    }
  }
})();
