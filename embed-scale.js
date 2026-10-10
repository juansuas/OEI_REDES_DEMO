(() => {
  const reportWidth = 1366;
  const container = document.querySelector(".dashboard-frame");
  const iframe = container?.querySelector("iframe");

  if (!container || !iframe) {
    return;
  }

  const resizeReport = () => {
    const scale = container.clientWidth / reportWidth;

    container.style.setProperty("--embed-scale", String(scale));
    iframe.style.height = `${container.clientHeight / scale}px`;
  };

  resizeReport();
  new ResizeObserver(resizeReport).observe(container);
})();
