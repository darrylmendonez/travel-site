$(document).ready(function(){

  // Hide msgs
  $("#empty-field-msg").hide();
  $(".filter-and-results-msg-row").hide();
  $(".listing").hide();
  $("#loading-search").hide();

  // Datepicker for checkin and checkout
  $(".datepicker").pickadate();

  // Focus on #location-input
  $("#location-input").focus();

  // Star ratings
  function starRating(elementId){
    $(elementId).on("mouseover", function(){
      var prevSiblings = $(this).prevAll();
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
    // Check for empty fields
    var locationInput = $("#location-input").val().trim();
    var checkIn = $("#check-in").val().trim();
    var checkOut = $("#check-out").val().trim();
    if (locationInput === "" || checkIn === "" || checkOut === ""){
      $("#empty-field-msg").slideDown(500);
      return;
    };

    // Value of locationInput gets placed in listing
    $(".filter-and-results-msg-row").hide();
    $(".listing").hide();
    var placeholderLocation = $(".placeholder-location");
    var locationInputResults = $("#location-input-results");
    locationInputResults.replaceWith($("<h4>").attr("id", "location-input-results").addClass("text-center").append("Search results for " + locationInput));
    placeholderLocation.replaceWith($("<span>").addClass("placeholder-location").append(locationInput));
    placeholderLocation.append(locationInput);
    $("#loading-search").fadeIn(500).delay(1000).fadeOut(500);
    $(".filter-and-results-msg-row").delay(2000).fadeIn(500, function(){
      $("html, body").animate({
        scrollTop: $("#search-row").offset().top
      }, 2000); 
    });
    $(".listing").delay(2500).fadeIn(2000);

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

  $("#filter-button").on("click", function(e){
    e.preventDefault();
    var starsCount = $(".fa-star").length
    var numberOfBlackStars = $("#number-of-black-stars");
    var h4 = $("<h4>");

    // Selecting number of stars
    switch(starsCount){
      case 1:
        $(".one-star-rated").fadeIn(2000);
        $(".two-star-rated").fadeIn(2000);
        $(".three-star-rated").fadeIn(2000);
        $(".four-star-rated").fadeIn(2000);
        break;
      case 2:
        $(".one-star-rated").fadeOut(2000);
        $(".two-star-rated").fadeIn(2000);
        $(".three-star-rated").fadeIn(2000);
        $(".four-star-rated").fadeIn(2000);
        break;
      case 3:
        $(".one-star-rated").fadeOut(2000);
        $(".two-star-rated").fadeOut(2000);
        $(".three-star-rated").fadeIn(2000);
        $(".four-star-rated").fadeIn(2000);
        break;
      case 4:
        $(".one-star-rated").fadeOut(2000);
        $(".two-star-rated").fadeOut(2000);
        $(".three-star-rated").fadeOut(2000);
        $(".four-star-rated").fadeIn(2000);
        break;
      case 5:
        $(".one-star-rated").fadeOut(2000);
        $(".two-star-rated").fadeOut(2000);
        $(".three-star-rated").fadeOut(2000);
        $(".four-star-rated").fadeOut(2000);
        break;
      default:
        break;
    };

    // Display msg for "Showing Listings for # of stars"
    function oneStar (){
      numberOfBlackStars.replaceWith($("<h4>").attr("id", "number-of-black-stars").addClass("text-center").append(h4).append("with a " + starsCount + " star rating and up"));
    };
    function twoToFourStars (){
      numberOfBlackStars.replaceWith($("<h4>").attr("id", "number-of-black-stars").addClass("text-center").append(h4).append("with a " + starsCount + " star rating and up"));
    };
    function fiveStars (){
      numberOfBlackStars.replaceWith($("<h4>").attr("id", "number-of-black-stars").addClass("text-center").append(h4).append("with a " + starsCount + " star rating"));
    };
    if (starsCount === 1){
      oneStar();
      $("#location-and-stars-msg").hide().fadeIn(2000);
    } else if (starsCount === 5){
      fiveStars();
      $("#location-and-stars-msg").hide().fadeIn(2000);
    } else {
      twoToFourStars();
      $("#location-and-stars-msg").hide().fadeIn(2000);
    }

  });


  $(".more-info-button").on("click", function(e){
    e.preventDefault();
    var currentRow = $(this).parent().parent();
    $("#remove-row-button").on("click", function(f){
      currentRow.fadeOut(2000);
    });
    var placeholderDetails = $("#placeholder-details");
    var hotelName = $(this).parent().prev().text();
    var checkIn = $("#check-in").val().trim();
    var checkOut = $("#check-out").val().trim();
    placeholderDetails.replaceWith($("<span>").addClass("placeholder-details").append("<p>").append("You are staying in the " + hotelName + "<br> from " + checkIn + "<br> to " + checkOut));
    
  });

});