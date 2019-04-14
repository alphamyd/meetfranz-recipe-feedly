module.exports = Franz => {

  getMessages = () => {
    const newsDOM = document.querySelectorAll("#feedlyTabs .simpleUnreadCount")[0].innerHTML;
    let counter = parseInt(newsDOM);
    
    if (newsDOM.indexOf('K') !== -1 || newsDOM.indexOf('+') !== -1) {
      counter = newsDOM.substring(0, newsDOM.indexOf('K')) + '000';
    }

    Franz.setBadge(counter);
  };

  Franz.loop(getMessages);

}
