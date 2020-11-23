const API_KEY = '19182122-b959857203510615d63e1aa25';
const BASE_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&';

export class ImagesQuery {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    const searchParams = new URLSearchParams({
      q: this.searchQuery,
      page: this.page,
      per_page: 12,
      key: API_KEY,
    });
    const response = await fetch(`${BASE_URL}${searchParams}`);
    const imageList = await response.json();

    return imageList;
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }

  // createImagesListMarkup(images, allImagesCount) {
  //   this.render(imagesTemplate(images));
  //   if (allImagesCount > 12) {
  //     onNotify(
  //       `We have found ${allImagesCount} images. Scroll to see all pictures.`,
  //       'info',
  //       'Info',
  //     );
  //   }
  //   if (allImagesCount < 12) {
  //     onNotify(`We have found ${allImagesCount} images.`, 'info', 'Info');
  //   }
  // }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
