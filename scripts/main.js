(function(window) {
  "use strict"
  var App = window.App;
  var FORM_SELECTOR_IMAGES = "[data-payment='form']";
  var SERVER_URL = "http://localhost:2404/foodwars";
  var RemoteDataStore = App.RemoteDataStore;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  var DETAIL_IMAGE_SELECTOR = "[data-image-role='displayImage']";
  var THUMBNAIL_LINK_SELECTOR = "[data-image-role='trigger']";
  var FORM_SELECTOR_FOODWAR = "[data-foodwar='form']";
  var FormHandler = App.FormHandler;
  var formHandler = new FormHandler(FORM_SELECTOR_FOODWAR);
  var imageArray = [];


  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  window.detailImage = detailImage;

/*remoteDS.getAllImages(function(data) {
    for (var i = 0; i < data.length; i++) {
      imageArray[i] = data[i];
    }
  });
*/
imageArray[0]="img/Spaghetti.jpg";
imageArray[1]="img/Taco.jpg";
imageArray[2]="img/Breakfast.jpg";
imageArray[3]="img/Hamburger.jpg";
imageArray[4]="img/Ramen.jpg";
  formHandler.addPreviousHandler(getCurrentImageIndex, imageArray);
  formHandler.addNextHandler(getCurrentImageIndex, imageArray);


  function getCurrentImageIndex() {
    imageArray = getimageArray();
    for (var i = 0; i < imageArray.length; i++) {
      if (imageArray[i] == detailImage.getAttribute("src")) {
        return i;
      }
    }
    return -1;
  }

  function next() {
    imageArray = getThumbnailsArray();
    var nextImage = (getCurrentImageIndex() + 1) % thumbnailArray.length;
    setDetails(imageFromThumb(imageArray[nextImage]));
  }

  function previous() {
    imageArray = getThumbnailsArray();
    var prevImage = (getCurrentImageIndex() - 1 + thumbnailArray.length) % thumbnailArray.length;
    setDetails(imageFromThumb(imageArray[prevImage]));
  }

})(window);
