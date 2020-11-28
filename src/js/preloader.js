const preloaderRef = document.querySelector('#site-preloader');

window.addEventListener('load', onLoadClosePreloader);

function onLoadClosePreloader() {
  setTimeout(() => {
    preloaderRef.classList.add('loaded');
    setTimeout(() => {
      preloaderRef.classList.add('useful');
    }, 500);
  }, 500);
}
