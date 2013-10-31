(function() {

  var imageDrop = document.getElementById("image-drop");

  imageDrop.ondragover = function () { this.className = 'hover'; return false; };
  imageDrop.ondragend = function () { this.className = ''; return false; };
  imageDrop.ondrop = function (e) {
    this.className = '';
    e.preventDefault();

    var file = e.dataTransfer.files[0],
    reader = new FileReader();
    reader.onload = function (event) {
      console.log(event.target);
      imageDrop.style.background = 'url(' + event.target.result + ') no-repeat center';
    };
    console.log(file);
    reader.readAsDataURL(file);

    return false;
  };  

})();