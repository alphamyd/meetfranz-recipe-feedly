module.exports = Franz => {

  getMessages = () => {
    const news = document.querySelectorAll("#feedlyTabs .simpleUnreadCount")[0];
    let counter = parseInt(news.innerText);
    Franz.setBadge(counter);
  };

  Franz.loop(getMessages);

}