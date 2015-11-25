$(document).ready(function(){

  // Empty field msg
  $("#empty-field-msg").hide();

  $(".listing").hide();

  // Datepicker for checkin and checkout
  $(".datepicker").pickadate();

  // Tooltip Toggle
  // Can't get this to work
  // $("#search-button").tooltip();

  // Star ratings - This is very WET. Need to DRY.
  // White stars to black
  $("#one-star-o").on("click", function(oneBlackStar){
    var oneBlackStar = $("<i>").attr("id", "one-star").addClass("fa fa-star");
    $("#one-star-o").replaceWith($(oneBlackStar));
  });

  $("#two-stars-o").on("click", function(twoBlackStars){
    var oneBlackStar = $("<i>").attr("id", "one-star").addClass("fa fa-star");
    var twoBlackStars = $("<i>").attr("id", "two-stars").addClass("fa fa-star");
    $("#one-star-o").replaceWith($(oneBlackStar));
    $("#two-stars-o").replaceWith($(twoBlackStars));
  });

  $("#three-stars-o").on("click", function(threeBlackStars){
    var oneBlackStar = $("<i>").attr("id", "one-star").addClass("fa fa-star");
    var twoBlackStars = $("<i>").attr("id", "two-stars").addClass("fa fa-star");
    var threeBlackStars = $("<i>").attr("id", "three-stars").addClass("fa fa-star");
    $("#one-star-o").replaceWith($(oneBlackStar));
    $("#two-stars-o").replaceWith($(twoBlackStars));
    $("#three-stars-o").replaceWith($(threeBlackStars));
  });

  $("#four-stars-o").on("click", function(fourBlackStars){
    var oneBlackStar = $("<i>").attr("id", "one-star").addClass("fa fa-star");
    var twoBlackStars = $("<i>").attr("id", "two-stars").addClass("fa fa-star");
    var threeBlackStars = $("<i>").attr("id", "three-stars").addClass("fa fa-star");
    var fourBlackStars = $("<i>").attr("id", "four-stars").addClass("fa fa-star");
    $("#one-star-o").replaceWith($(oneBlackStar));
    $("#two-stars-o").replaceWith($(twoBlackStars));
    $("#three-stars-o").replaceWith($(threeBlackStars));
    $("#four-stars-o").replaceWith($(fourBlackStars));
  });

  $("#five-stars-o").on("click", function(fiveBlackStars){
    var oneBlackStar = $("<i>").attr("id", "one-star").addClass("fa fa-star");
    var twoBlackStars = $("<i>").attr("id", "two-stars").addClass("fa fa-star");
    var threeBlackStars = $("<i>").attr("id", "three-stars").addClass("fa fa-star");
    var fourBlackStars = $("<i>").attr("id", "four-stars").addClass("fa fa-star");
    var fiveBlackStars = $("<i>").attr("id", "five-stars").addClass("fa fa-star");
    $("#one-star-o").replaceWith($(oneBlackStar));
    $("#two-stars-o").replaceWith($(twoBlackStars));
    $("#three-stars-o").replaceWith($(threeBlackStars));
    $("#four-stars-o").replaceWith($(fourBlackStars));
    $("#five-stars-o").replaceWith($(fiveBlackStars));
  });

  $("#search-button").on("click", function(e){
    e.preventDefault();
    var location = $("#location").val().trim();
    var checkIn = $("#check-in").val().trim();
    var checkOut = $("#check-out").val().trim();

    if (location === "" || checkIn === "" || checkOut === ""){
      $("#empty-field-msg").slideDown(500);
      return;
    };

    // Value of location gets placed in listing
    var placeholderLocation = $(".placeholder-location");
    placeholderLocation.replaceWith($("<span>").append(location));

    $(".listing").fadeIn(500);

  }); // End #search-button click

  $("#location").on("focus", function() {
      $("#empty-field-msg").fadeOut(500);
    });
  $("#check-in").on("focus", function() {
      $("#empty-field-msg").fadeOut(500);
    });
  $("#check-out").on("focus", function() {
      $("#empty-field-msg").fadeOut(500);
    });

});