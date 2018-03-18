// declare your functions here...
paragraphSelector = function() {
  return $('p');
};

lastImageSelector = function() {
  imagesArray = $('img');
  return imagesArray[imagesArray.length - 1];
};