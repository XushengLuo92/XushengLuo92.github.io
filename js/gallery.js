(() => {
  const topics = [...document.querySelectorAll('.gallery-topic')];
  const filters = [...document.querySelectorAll('.topic-filter')];
  const videos = [...document.querySelectorAll('.demo-card video')];
  const status = document.querySelector('#gallery-status');

  function showTopic(topic) {
    let count = 0;
    topics.forEach(section => {
      section.hidden = topic !== 'all' && section.dataset.topic !== topic;
      if (section.hidden) section.querySelectorAll('video').forEach(video => video.pause());
      else count += section.querySelectorAll('.demo-card').length;
    });
    filters.forEach(button => {
      const active = button.dataset.topic === topic;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    status.textContent = topic === 'all'
      ? `Showing all ${count} demonstrations`
      : `Showing ${count} demonstrations · ${topics.find(section => section.dataset.topic === topic).querySelector('h2').textContent}`;
  }

  filters.forEach(button => button.addEventListener('click', () => showTopic(button.dataset.topic)));
  // Keep linked demonstrations visible, including after a topic has been filtered.
  function revealLinkedDemo() {
    const target = document.getElementById(location.hash.slice(1));
    const section = target?.closest('.gallery-topic');
    if (section) {
      showTopic(section.dataset.topic);
      // Deep links to task instructions should open their disclosure.
      const details = target.closest('details');
      if (details) details.open = true;
      target.scrollIntoView({ block: 'start' });
    }
  }
  window.addEventListener('hashchange', revealLinkedDemo);
  revealLinkedDemo();
  document.querySelector('.gallery-toolbar').hidden = false;

  // A gallery should never play multiple demonstrations at once.
  videos.forEach(video => video.addEventListener('play', () => {
    videos.forEach(other => {
      if (other !== video) other.pause();
    });
  }));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) videos.forEach(video => video.pause());
  });
})();
