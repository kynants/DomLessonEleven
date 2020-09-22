// "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160"
// "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195"
// "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343"

function pickRandImg() {

  var images = {
    firstImg: {
      url: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
      width: "240px",
      height: "160px"
    },
    secondImg: {
      url: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
      width: "320px",
      height: "195px"
    },
    thirdImg = {
      url: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
      width: "500px",
      height: "343px"
    }
  };

  // images[Math.floor(Math.random()*images.length)];
  document.getElementsByTagName("button")[0].onclick = function () {

    var img = document.getElementById("display");
    document.createElement("img").innerHTML = img;

    var 
  }
}