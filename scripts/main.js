(function(window) {
  "use strict"
  var App = window.App;
  var FORM_SELECTOR_IMAGES = "[data-payment='form']";
  var SERVER_URL = "http://localhost:2404/foodwars";
  var RemoteDataStore = App.RemoteDataStore;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  var THUMBNAIL_LINK_SELECTOR = "[data-image-role='trigger']";
  var FORM_SELECTOR_FOODWAR = "[data-foodwar='form']";
  var FormHandler = App.FormHandler;
  var formHandler = new FormHandler(FORM_SELECTOR_FOODWAR);
  var imageArray = [];
  //const fs = require('fs');
 window.remoteDS = remoteDS;

  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  window.detailImage = detailImage;

/*remoteDS.getAllImages(function(data) {
    for (var i = 0; i < data.length; i++) {
      imageArray[i] = data[i];

    if(imageArray!= null){
        for (var i = 0; i < imageArray.length; i++) {
          var imgCanvas = document.createElement("canvas"),
           imgContext = imgCanvas.getContext("2d");
           imgCanvas.width = imageArray[i].width;
           imgCanvas.height = imageArray[i].height;
           imageArray[i].crossOrigin = "Anonymous";
           imgContext.drawImage(imageArray[i], 0, 0, imageArray[i].width, imageArray[i].height);
           var imgAsDataURL = imgCanvas.toDataURL("img");
           localStorage.setItem("elephant", imgAsDataURL);
        }
    }
    }
  });*/

imageArray[0]="img/Spaghetti.jpg";
imageArray[1]="img/Taco.jpg";
imageArray[2]="img/Breakfast.jpg";
imageArray[3]="img/Hamburger.jpg";
imageArray[4]="img/Ramen.jpg";


  
})(window);
