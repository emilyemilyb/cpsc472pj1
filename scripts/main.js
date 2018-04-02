(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
//  var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
 var SERVER_URL = 'http://localhost:2403/comments';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  var myTruck = new Truck('ncc-1701', remoteDS);
  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);

// var UpVotesHandler = App.UpVotesHandler;
 //var upVotes = new UpVotesHandler(RemoteDataStore);

var THUMBNAIL_LINK_SELECTOR = "[data-image-role='trigger']";
  var imageArray = [];

imageArray[0]="img/Spaghetti.jpg";
imageArray[1]="img/Taco.jpg";
imageArray[2]="img/Breakfast.jpg";
imageArray[3]="img/Hamburger.jpg";
imageArray[4]="img/Ramen.jpg";


  formHandler.addSubmitHandler(function (data) {
    myTruck.createOrder(data);
    checkList.addRow(data);
  });
  console.log(formHandler);
})(window);
