let defaultTitle = document.title;
let FaviconElement = document.querySelector(`link[rel="icon"]`);
let defaultFavicon = faviconElement ? faviconElement.href : '';
let notificationsInterval;
let isInDefaultState = true;
let bellIcon = `1827312.png`;

function startNotification(text) {
   
if(notificationsInterval)
    endNotification();
    notificationsInterval = setInterval(() => {
      if (isInDefaultState) {
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
    clearInterval(notificationsInterval);
    resetToDefaults();
  }
  function resetToDefaults() {
    document.title = defaultTitle;
    if (faviconElement) faviconElement.href = defaultFavicon;
  }
  function resetToNotification(message) {
    document.title = message;
    if (faviconElement) faviconElement.href = bellIcon;
  }
