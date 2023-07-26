if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section-anchor').scrollIntoView({behavior: "smooth"})
  })
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
