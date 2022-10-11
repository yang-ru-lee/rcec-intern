var map = L.map("map").setView([23.5, 121], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
}).addTo(map);

var ssp = document.getElementById("ssp").value;
var year = document.getElementById("year").value;
var gdd = document.getElementById("gdd").value;
var imageUrl = "data/cluster126_2020_2030.png";
var imageBounds = [[21.892524, 119.992799], [25.278324, 122.025899]];
var options = {opacity: 1};
var img = L.imageOverlay(imageUrl, imageBounds, options);
img.addTo(map);

document.getElementById("alpha").addEventListener("change", chgAlpha);
document.getElementById("ssp").addEventListener("change", chgSsp);
document.getElementById("year").addEventListener("change", chgYear);
document.getElementById("gdd").addEventListener("change", chgGdd);

function openPanel() {
  document.getElementById("panel").style.display = "block";
}

function closePanel() {
  document.getElementById("panel").style.display = "none";
}

function chgAlpha() {
  options = {opacity: document.getElementById("alpha").value/100};
  map.removeLayer(img);
  img = L.imageOverlay(imageUrl, imageBounds, options);
  img.addTo(map);
}

function chgSsp() {
  ssp = document.getElementById("ssp").value;
  chg();
}

function chgYear() {
  year = document.getElementById("year").value;
  chg();
}

function chgGdd() {
  gdd = document.getElementById("gdd").value;
  chg();
  switch(gdd) {
    case "tmp":
	  document.getElementById("bar").src = "data/color_1.png";
	  break;
	case "tmpdiff":
	  document.getElementById("bar").src = "data/color_2.png";
	  break;
	case "cluster":
	  document.getElementById("bar").src = "data/color_3.png";
	  break;
  }
}

function chg() {
  switch(ssp+year+gdd) {
    case "1261tmp":
	  imageUrl = "data/cluster126_2020_2030.png";
	  map.removeLayer(img);
      img = L.imageOverlay(imageUrl, imageBounds, options);
      img.addTo(map);
	  break;
	case "1262tmp":
	  imageUrl = "data/cluster126_2050_2060.png";
	  map.removeLayer(img);
      img = L.imageOverlay(imageUrl, imageBounds, options);
      img.addTo(map);
	  break;
	case "1263tmp":
	  imageUrl = "data/cluster126_2080_2090.png";
	  map.removeLayer(img);
      img = L.imageOverlay(imageUrl, imageBounds, options);
      img.addTo(map);
	  break;
	case "5851tmp":
	  imageUrl = "data/cluster585_2020_2030.png";
	  map.removeLayer(img);
      img = L.imageOverlay(imageUrl, imageBounds, options);
      img.addTo(map);
	  break;
	case "5852tmp":
	  imageUrl = "data/cluster585_2050_2060.png";
	  map.removeLayer(img);
      img = L.imageOverlay(imageUrl, imageBounds, options);
      img.addTo(map);
	  break;
	case "5853tmp":
	  imageUrl = "data/cluster585_2080_2090.png";
	  map.removeLayer(img);
      img = L.imageOverlay(imageUrl, imageBounds, options);
      img.addTo(map);
	  break;
	case "1261tmpdiff":
	  imageUrl = "data/cluster126_2020_2030_diff.png";
	  map.removeLayer(img);
      img = L.imageOverlay(imageUrl, imageBounds, options);
      img.addTo(map);
	  break;
	case "1262tmpdiff":
	  imageUrl = "data/cluster126_2050_2060_diff.png";
	  map.removeLayer(img);
      img = L.imageOverlay(imageUrl, imageBounds, options);
      img.addTo(map);
	  break;
	case "1263tmpdiff":
	  imageUrl = "data/cluster126_2080_2090_diff.png";
	  map.removeLayer(img);
      img = L.imageOverlay(imageUrl, imageBounds, options);
      img.addTo(map);
	  break;
	case "5851tmpdiff":
	  imageUrl = "data/cluster585_2020_2030_diff.png";
	  map.removeLayer(img);
      img = L.imageOverlay(imageUrl, imageBounds, options);
      img.addTo(map);
	  break;
	case "5852tmpdiff":
	  imageUrl = "data/cluster585_2050_2060_diff.png";
	  map.removeLayer(img);
      img = L.imageOverlay(imageUrl, imageBounds, options);
      img.addTo(map);
	  break;
	case "5853tmpdiff":
	  imageUrl = "data/cluster585_2080_2090_diff.png";
	  map.removeLayer(img);
      img = L.imageOverlay(imageUrl, imageBounds, options);
      img.addTo(map);
	  break;
	case "1261cluster":
	  imageUrl = "data/cluster126_2020_2030_label.png";
	  map.removeLayer(img);
      img = L.imageOverlay(imageUrl, imageBounds, options);
      img.addTo(map);
	  break;
	case "1262cluster":
	  imageUrl = "data/cluster126_2050_2060_label.png";
	  map.removeLayer(img);
      img = L.imageOverlay(imageUrl, imageBounds, options);
      img.addTo(map);
	  break;
	case "1263cluster":
	  imageUrl = "data/cluster126_2080_2090_label.png";
	  map.removeLayer(img);
      img = L.imageOverlay(imageUrl, imageBounds, options);
      img.addTo(map);
	  break;
	case "5851cluster":
	  imageUrl = "data/cluster585_2020_2030_label.png";
	  map.removeLayer(img);
      img = L.imageOverlay(imageUrl, imageBounds, options);
      img.addTo(map);
	  break;
	case "5852cluster":
	  imageUrl = "data/cluster585_2050_2060_label.png";
	  map.removeLayer(img);
      img = L.imageOverlay(imageUrl, imageBounds, options);
      img.addTo(map);
	  break;
	case "5853cluster":
	  imageUrl = "data/cluster585_2080_2090_label.png";
	  map.removeLayer(img);
      img = L.imageOverlay(imageUrl, imageBounds, options);
      img.addTo(map);
	  break;
  }
}

function toCtrl() {
  document.getElementById("des").style.display = "none";
  document.getElementById("ctrl").style.display = "block";
}

function toDes() {
  document.getElementById("ctrl").style.display = "none";
  document.getElementById("des").style.display = "block";
}
