// 桌面端：在导航按钮上短暂停留 120ms 后自动进入对应页面。
// 触屏设备仍使用普通点击，避免滑动页面时误跳转。
(() => {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  document.querySelectorAll('.site-header .nav a[href]').forEach((link) => {
    let timer;
    link.addEventListener('mouseenter', () => {
      const destination = new URL(link.href, window.location.href);
      if (destination.href === window.location.href) return;
      timer = window.setTimeout(() => {
        window.location.href = destination.href;
      }, 120);
    });
    link.addEventListener('mouseleave', () => window.clearTimeout(timer));
  });
})();
