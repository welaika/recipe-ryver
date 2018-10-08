const path = require('path');

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let direct = document.querySelectorAll('.simplebar-content .scene-space-tab-button--has-new-content:not(.scene__teams):not(.scene__users):not(.scene__notifications) .scene-space-tab-button__badge').length;
    let notification_messages = document.querySelectorAll('.simplebar-content .scene-space-tab-button--has-new-content.scene__notifications .scene-space-tab-button__badge .scene-space-tab-button__badge-count');
    let notifications = 0;
    if (notification_messages.length > 0) {
      notifications = Number(notification_messages[0].innerHTML);
    }

    let count = direct + notifications;
    Franz.setBadge(count);
  }

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'service.css'));

  Franz.loop(getMessages);
};
