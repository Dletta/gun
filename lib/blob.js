/* Blob Store Library v0.5 for GUN DB
*  load a file into Gun.
* This will convert a file into base64 and save it into Gun DB.
* Using a chain we can save a file into base 64. Using a chain we can get and convert
* it back to file.
* This code is freely given in the spirit of open source MIT license.
* Author: Jachen Duschletta / 2019
*/


var Gun = (typeof window !== "undefined")? window.Gun : require('../gun');

/*
Using FileReader API, which goes back to IE10 compatibility.

Ideally the api is as easy as gun.toBlob(file), but in browser it's required
that you pre-select the file via a drop and drag or file-browser.

this will return a utf16 encoded string and will be able to be turned into a blob quiet easily.

Below is an example of what one would do in the browser

// Check for the File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  document.getElementById('files').addEventListener('change', handleFileSelect, false);
} else {
  alert('The File APIs are not fully supported in this browser.');
}

function handleFileSelect(evt) {
  var f = evt.target.files[0]; // FileList object
  var reader = new FileReader();
  // Closure to capture the file information.
  reader.onload = (function(theFile) {
    return function(e) {
      var binaryData = e.target.result;
      //Converting Binary Data to base 64

      --->> Below is where gun will jump in and do the btoa and saving into gun.
      var base64String = window.btoa(binaryData);
      //showing file converted to base64
      document.getElementById('base64').value = base64String;
      alert('File converted to base64 successfuly!\nCheck in Textarea');
    };
  })(f);
  // Read in the image file as a data URL.
  reader.readAsBinaryString(f);
}
*/
