$(document).ready(function(){

  // Empty field msg and filter row
  $("#empty-field-msg").hide();
  $("#filter-row").hide();
  $(".listing").hide();
  $("#loading").hide();

  // Datepicker for checkin and checkout
  $(".datepicker").pickadate();

  // Focus on #location-input
  $("#location-input").focus();

  // Star ratings
  function starRating(elementId){
    $(elementId).on("mouseover", function(){
      var prevSiblings = $(this).prevAll();
      console.log(prevSiblings);
      var nextSiblings = $(this).nextAll();
      $(this).removeClass("fa-star-o");
      $(this).addClass("fa-star");
      prevSiblings.removeClass("fa-star-o");
      prevSiblings.addClass("fa-star");
      nextSiblings.removeClass("fa-star");
      nextSiblings.addClass("fa-star-o");
    });
  }

  starRating("#one-star-o");
  starRating("#two-stars-o");
  starRating("#three-stars-o");
  starRating("#four-stars-o");
  starRating("#five-stars-o");

  // End star ratings

  $("#search-button").on("click", function(e){
    e.preventDefault();
    var locationInput = $("#location-input").val().trim();
    var checkIn = $("#check-in").val().trim();
    var checkOut = $("#check-out").val().trim();

    // Check for empty fields
    var locationInput = $("#location-input").val().trim();
    var checkIn = $("#check-in").val().trim();
    var checkOut = $("#check-out").val().trim();

    var scrolled=0;

    if (locationInput === "" || checkIn === "" || checkOut === ""){
      $("#empty-field-msg").slideDown(500);
      return;
    };

    // Value of locationInput gets placed in listing
    $("#filter-row").hide();
    $(".listing").hide();
    var placeholderLocation = $(".placeholder-location");
    placeholderLocation.replaceWith($("<span>").addClass("placeholder-location").append(locationInput));
    placeholderLocation.append(locationInput);
    $("#loading").fadeIn(500).delay(1000).fadeOut(500);
    $("#filter-row").delay(2000).fadeIn(500, function(){
      $('html, body').animate({
        scrollTop: $("#filter-row").offset().top
      }, 2000);
    });
    $(".listing").delay(2500).fadeIn(2000);

    // Animate scroll to results
    

  }); // End #search-button click

  // Fade out empty field msg on mouseover, keypress, or focus
  $("#location-input").on("mouseover", function() {
    $("#empty-field-msg").fadeOut(500);
  });
  $("#location-input").on("keypress", function() {
    $("#empty-field-msg").fadeOut(500);
  });
  $("#check-in").on("mouseover", function() {
    $("#empty-field-msg").fadeOut(500);
  });
  $("#check-in").on("focus", function() {
    $("#empty-field-msg").fadeOut(500);
  });
  $("#check-out").on("mouseover", function() {
    $("#empty-field-msg").fadeOut(500);
  });
  $("#check-out").on("focus", function() {
    $("#empty-field-msg").fadeOut(500);
  });

  // Amenities Filter Function
  // function amenities(){
  //   if($("#pool-checkbox").is(':checked')){
  //     $(".pool").fadeIn(2000);
  //   };
  //   if(($("#pool-checkbox").is(':checked') === false)){
  //     $(".pool").fadeOut(2000);
  //     console.log("class pool has been faded in");
  //   };
  //   if($("#gym-checkbox").is(':checked')){
  //     $(".gym").fadeIn(2000);
  //     console.log("class gym has been faded out");
  //   }
  //   if(($("#gym-checkbox").is(':checked') === false)){
  //     $(".gym").fadeOut(2000);
  //     console.log("class gym has been faded in");
  //   };
  //   if($("#gym-checkbox").is(':checked')){
  //     $(".gym").fadeIn(2000);
  //     console.log("class gym has been faded out");
  //   }
  //   if(($("#wifi-checkbox").is(':checked') === false)){
  //     $(".wifi").fadeOut(2000);
  //     console.log("class wifi has been faded in");
  //   };
  // };

  $("#filter-button").on("click", function(e){
    e.preventDefault();
    var starsCount = $(".fa-star").length
    // $("#loading-filter").fadeIn(500).delay(500).fadeOut(500);

    switch(starsCount){
      case 0: 
        $(".one-star-rated").fadeIn(2000);
        $(".two-star-rated").fadeIn(2000);
        $(".three-star-rated").fadeIn(2000);
        $(".four-star-rated").fadeIn(2000);
        $(".five-star-rated").fadeIn(2000);
        break;
      case 1:
        $(".one-star-rated").fadeIn(2000);
        $(".two-star-rated").fadeIn(2000);
        $(".three-star-rated").fadeIn(2000);
        $(".four-star-rated").fadeIn(2000);
        $(".five-star-rated").fadeIn(2000);
        break;
      case 2:
        $(".one-star-rated").fadeOut(2000);
        $(".two-star-rated").fadeIn(2000);
        $(".three-star-rated").fadeIn(2000);
        $(".four-star-rated").fadeIn(2000);
        $(".five-star-rated").fadeIn(2000);
        break;
      case 3:
        $(".one-star-rated").fadeOut(2000);
        $(".two-star-rated").fadeOut(2000);
        $(".three-star-rated").fadeIn(2000);
        $(".four-star-rated").fadeIn(2000);
        $(".five-star-rated").fadeIn(2000);
        break;
      case 4:
        $(".one-star-rated").fadeOut(2000);
        $(".two-star-rated").fadeOut(2000);
        $(".three-star-rated").fadeOut(2000);
        $(".four-star-rated").fadeIn(2000);
        $(".five-star-rated").fadeIn(2000);
        break;
      case 5:
        $(".one-star-rated").fadeOut(2000);
        $(".two-star-rated").fadeOut(2000);
        $(".three-star-rated").fadeOut(2000);
        $(".four-star-rated").fadeOut(2000);
        $(".five-star-rated").fadeIn(2000);
        break;
      default:
        break;
    }; //End Stars Filter

  });

});

// TO DO LIST
