(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;
  var DETAIL_IMAGE_SELECTOR = "[data-image-role='displayImage']";
  var THUMBNAIL_LINK_SELECTOR = "[data-image-role='trigger']";

  var imageArray = [];



  function FormHandler(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }


  App.FormHandler = FormHandler;
  window.App = App;
})(window);
