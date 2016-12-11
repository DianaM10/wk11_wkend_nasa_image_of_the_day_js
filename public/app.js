var app = function() {
    // var api = 'https://api.nasa.gov/planetary/apod?api_key=e7YCe0uV5BsQpcwpfNFC0e30zf0gPh5MBCaLv557&hd=false&'
    // var date = '&date=2016-11-02'
    var date = document.getElementById('date');
    if(date !== "") {

    // var url = api + date.value;
    // makeRequest(url, requestComplete)
    buttonClick(date);
    }
}

var buttonClick = function(date) {
    var button = document.getElementById('submit');

    // var api = 'https://api.nasa.gov/planetary/apod?api_key=e7YCe0uV5BsQpcwpfNFC0e30zf0gPh5MBCaLv557'
    // var hd = '&hd=false&'
    // var url = api + '&date='+date + hd;
    // button.addEventListener("click", makeRequest(url, requestComplete));
    button.onclick = handleButtonClick;
    console.log('clicked');
}

var handleButtonClick = function(){
    var api = 'https://api.nasa.gov/planetary/apod?api_key=e7YCe0uV5BsQpcwpfNFC0e30zf0gPh5MBCaLv557'
    var hd = '&hd=false&'
    var url = api + '&date='+date.value + hd;
    makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback) {
var request = new XMLHttpRequest();
request.open("GET", url);
request.onload = callback;
request.send();
}

var requestComplete = function() {
    console.log('success');
    if(this.status !==200) return;
    var jsonString = this.responseText;
    var imageOfTheDay = JSON.parse(jsonString);
    populate(imageOfTheDay);

}

var populate = function(imageOfTheDay) {
    var h3tag = document.getElementById('image-title');
    h3tag.innerText = imageOfTheDay.title;
    var img = document.getElementById('image');
    img.src = imageOfTheDay.url;
    image.style.width = '500px';
    var ptag = document.getElementById('image-description');
    ptag.innerText = imageOfTheDay.explanation;
}


window.onload = app;



















