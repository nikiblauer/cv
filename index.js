
const url = "https://api.quotable.io/random";

$(".search-btn").on("click", function() {
  if ($(".search-field").val().length > 0) {
    search();
  }
});


$(".search-field").on("keydown", function(event) {
  if ((event.key === "Enter") && ($(".search-field").val().length > 0)) {
    search();
  }
});

var hour = new Date().getHours();
console.log(hour);
if (hour < 12) {
  $("#greeting").text("Good Morning, Niki!");
} else if ((hour >= 12) && (hour < 18)) {
  $("#greeting").text("Good Afternoon, Niki!");
} else if (hour >= 18) {
  $("#greeting").text("Good Evening, Niki!");
} else {
  $("#greeting").text("Good Day, Niki!");
}


generateQuote();


$(".fav#_1").attr("src", getFavIcon("https://www.google.com"));
$(".fav#_2").attr("src", getFavIcon("https://www.youtube.com"));
$(".fav#_3").attr("src", getFavIcon("https://www.netflix.com"));
$(".fav#_4").attr("src", getFavIcon("https://www.amazon.de"));





function generateQuote() {
  fetch(url)
    .then(function(data) {
      return data.json();
    })
    .then(function(data) {
      document.querySelector(".quote").innerHTML = data.content + " - " + data.author;
    })
    .catch(function(err) {
      console.log(err);
    });
}


function search() {
  var searchText = $(".search-field").val();
  searchText = searchText.replaceAll(" ", "+");
  var url = "https://www.qwant.com/?q=" + searchText + "&t=web";
  console.log(url);
  window.open(url, "_self");
}



function getFavIcon(url) {
  var faviconURL = "https://s2.googleusercontent.com/s2/favicons?domain_url=" + url;
  var u = "chrome://activity-stream/content/data/content/tippytop/images/youtube-com@2x.png"
  return faviconURL;
}
