/*Downloaded from https://www.codeseek.co/ovdojoey/css-gift-opening-pgozGX */

var to = 'From us';
var gift_url = document.createElement("IMG");
gift_url.setAttribute("src", "date.jpg");
gift_url.setAttribute("width", "304");
gift_url.setAttribute("height", "308");
gift_url.setAttribute("alt", "date");
document.body.appendChild(gift_url);
var gift_image_url = 'https://www.intouchsol.com/Content/Libraries//echo-blog-body.png';
// var gift_url = 'http://www.amazon.com/gp/product/B00X4WHP5E/ref=ods_xs_ae_shurl?tag=googhydr-20&hvadid=74652194316&hvpos=1t1&hvexid=&hvnetw=g&hvrand=7560558939874219351&hvpone=&hvptwo=&hvqmt=b&hvdev=c&ref=pd_sl_2vatdqwe3p_b';




var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {

  var _giftLink,
    _giftImg;

  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(gift_url);
  }

  if (gift_image_url) {
    _giftImg = document.createElement("IMG");
    _giftImg.src = gift_image_url;
    if (_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }

  present.addEventListener("click", function (e) {
    present.classList.toggle("open");
  }, false);


  nametag.innerText = to;
}

function choose() {
  var timeToStop = new Date().getTime() + 10000;
  var image;
  var interval = setInterval(() => {
    var matchingProfileList = document.getElementById("matching-random");

    var currentImgWithShadowBoxIndex;
    for (var i = 0; i < matchingProfileList.children.length; i++) {
      var img = matchingProfileList.children[i];

      if (img.classList.contains("shadow-box")) {
        currentImgWithShadowBoxIndex = i;
        img.classList.remove("shadow-box");
        matchingProfileList.children[i].classList.add("matching-random-images-blur")

        break;
      }
    }

    if ((currentImgWithShadowBoxIndex + 1) < matchingProfileList.children.length) {
      matchingProfileList.children[currentImgWithShadowBoxIndex + 1].classList.add("shadow-box")
      matchingProfileList.children[currentImgWithShadowBoxIndex + 1].classList.remove("matching-random-images-blur")
      image = matchingProfileList.children[currentImgWithShadowBoxIndex + 1].firstChild.cloneNode(true);
    } else {
      matchingProfileList.children[0].classList.add("shadow-box")
      matchingProfileList.children[0].classList.remove("matching-random-images-blur")
      image = matchingProfileList.children[0].firstChild.cloneNode(true);

    }

    if (new Date().getTime() > timeToStop) {
      console.log("a " + image);
      // image.setAttribute("height", "300px");
      image.setAttribute("style", "width: 300px;");
      if (document.getElementById("dating-matching-profile").hasChildNodes) {
        document.getElementById("dating-matching-profile").removeChild(document.getElementById("dating-matching-profile").firstChild);
      }
      document.getElementById("dating-matching-profile").appendChild(image);
      document.getElementById("dating-profile-info").classList.remove("visible");
      clearInterval(interval);
    }


  }, 100);

  // console.log(image);

}

init();