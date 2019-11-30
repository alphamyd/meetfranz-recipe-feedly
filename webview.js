module.exports = (Franz) => {
  const getMessages = () => {
    try {
      const messageCountElement = document.querySelectorAll(
        "div[title='All'] > .LeftnavListRow__count"
      )?.[0];

      if (!messageCountElement) {
        console.warn("Message count element not found");
        return;
      }

      const messageCount = messageCountElement.innerHTML;

      let counter = parseInt(messageCount);

      if (
        messageCount.indexOf("K") !== -1 ||
        messageCount.indexOf("+") !== -1
      ) {
        counter = messageCount.substring(0, messageCount.indexOf("K")) + "000";
      }

      Franz.setBadge(counter);
    } catch (error) {
      console.error("Error while getting message count: ", error);
    }
  };

  Franz.loop(getMessages);
};
