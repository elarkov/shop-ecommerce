export function doNotificationToast() {
  //notification variables
  const notificationToast = document.querySelector('[data-toast]');
  const toastCloseBtn = document.querySelector('[data-toast-close]');

  //notification eventListener
  toastCloseBtn.addEventListener('click', function () {
    notificationToast.classList.add('closed');
  });
}