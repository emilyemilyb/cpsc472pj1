  "use strict"
  var DETAIL_IMAGE_SELECTOR = "[data-image-role='displayImage']";
  var THUMBNAIL_LINK_SELECTOR = "[data-image-role='trigger']";
  var SERVER_URL = "http://localhost:2404/coffeeorders";
  //var RemoteDataStore = App.RemoteDataStore;
//  var remoteDS = new RemoteDataStore(SERVER_URL);
  var imageArray = [];

  /*  remoteDS.getAll(function(data) {
        for (var i = 0; i < data.length; i++) {
          imageArray[i] = data[i];
        }
      }
    });
*/
function setDetails(imageUrl) {
  "use strict";
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);
}

//  function imageFromThumb(thumbnail) {
  //  return thumbnail.getAttribute("type");
  //}


  function setDetailsFromThumb(thumbnail) {
    setDetails(imageFromThumb(thumbnail));
  }

  function getimageArray() {
    //var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    //var thumbnailArray = [].slice.call(thumbnails);
    //return thumbnailArray;
    imageArray[0]="img/Spaghetti.jpg";
    imageArray[1]="img/Taco.jpg";
    imageArray[2]="img/Breakfast.jpg";
    imageArray[3]="img/Hamburger.jpg";
    imageArray[4]="img/Ramen.jpg";

    return imageArray;
  }


  function getCurrentImageIndex() {
    imageArray = getimageArray();
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    for (var i = 0; i < imageArray.length; i++) {
      //if (imageArray[i].getAttribute("data-image-url") == detailImage.getAttribute("src")) {
      if (imageArray[i] == detailImage.getAttribute("src")) {
        return i;
      }
    }
    return -1;
  }

  function next() {
    imageArray = getimageArray();
    var nextImage = (getCurrentImageIndex() + 1) % imageArray.length;
    //setDetails(imageFromThumb(imageArray[nextImage]));
    setDetails(imageArray[nextImage]);
  }

  function previous() {
    imageArray = getimageArray();
    var prevImage = (getCurrentImageIndex() - 1 + imageArray.length) % imageArray.length;
    //setDetails(imageFromThumb(imageArray[prevImage]));
    setDetails(imageArray[prevImage]);
  }
