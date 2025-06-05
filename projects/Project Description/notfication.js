(function () {
  let defaultTitle = document.title;
  let defaultFavicon = null;
  let currentInterval = null;
  let isDefault = true;
  let notificationText = '';
  const bellIconUrl = 'https://www.flaticon.com/free-icon/bell_1827312';

  function getFaviconElement() {
    return document.querySelector(`link[rel~='icon']`) || document.createElement('link');
  }

  function setFavicon(href) {
    let link = getFaviconElement();
    link.type = 'images/favicon-32x32.png';
    link.rel = 'icon';
    link.href = href;
    document.head.appendChild(link);
  }

  function startNotification(text) {
    endNotification();

    notificationText = text;
    const faviconEl = getFaviconElement();
    defaultFavicon = faviconEl.href;

    currentInterval = setInterval(() => {
      if (isDefault) {
        document.title = notificationText;
        setFavicon(bellIconUrl);
      } else {
        document.title = defaultTitle;
        setFavicon(defaultFavicon);
      }
      isDefault = !isDefault;
    }, 1000); 
  }

  function endNotification() {
    if (currentInterval !== null) {
      clearInterval(currentInterval);
      currentInterval = null;
    }
    document.title = defaultTitle;
    setFavicon(defaultFavicon);
  }

  window.startNotification = startNotification;
  window.endNotification = endNotification;
})();
