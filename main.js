// Text change animation JavaScript with blur

$(function () {
    count = 0;
    wordsArray = [
      "Direct Communication",
      "Real Time Reporting",
      "Advanced Analytics",
      "AI Recommendations",
      "Customized Technology"
    ];
    setInterval(function () {
      count++;
      $("#feature-text")
        .css({
          filter: "blur(5px)",
          "-webkit-filter": "blur(5px)",
          "-moz-filter": "blur(5px)",
          "-o-filter": "blur(5px)",
          "-ms-filter": "blur(5px)"
        })
        .fadeOut(600, function () {
          $(this)
            .text(wordsArray[count % wordsArray.length])
            .css({
              filter: "blur(0px)",
              "-webkit-filter": "blur(0px)",
              "-moz-filter": "blur(0px)",
              "-o-filter": "blur(0px)",
              "-ms-filter": "blur(0px)"
            })
            .fadeIn(400);
        });
    }, 4000);
  });
  