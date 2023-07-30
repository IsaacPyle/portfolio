if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section-anchor').scrollIntoView({behavior: "smooth"})
  })
}

function responsive() {
  var x = document.getElementById("dropdown-div");
  if (x.className === "dropdown") {
    x.className += " responsive";
  } else {
    x.className = "dropdown";
  }
}

// $(".change" ).on("click", function() {
//     if( $("body").hasClass("dark")) {
//         $("body").removeClass("dark");
//         $("a").removeClass("dark-with-border");
//     } else {
//         $("body").addClass("dark");
//         $("a").addClass("dark-with-border");
//     }
// });
