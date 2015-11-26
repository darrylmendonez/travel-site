$(document).ready(function(){

  // Empty field msg
  $("#empty-field-msg").hide();

  $(".listing").hide();

  // Datepicker for checkin and checkout
  $(".datepicker").pickadate();

  // Tooltip Toggle
  // Uncomment this once you get disabled button to work
  // $(function () {
  //   $('[data-toggle="tooltip"]').tooltip()
  // })

  // Star ratings
  function starRating(elementId){
    $(elementId).on("click", function(){
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

    if (locationInput === "" || checkIn === "" || checkOut === ""){
      $("#empty-field-msg").slideDown(500);
      return;
    };

    // Value of locationInput gets placed in listing
    var placeholderLocation = $(".placeholder-location");
    placeholderLocation.replaceWith($("<span>").addClass("placeholder-location").append(locationInput));
    placeholderLocation.append(locationInput);
    $(".listing").fadeIn(500);

  }); 


  // End #search-button click

  $("#location-input").on("focus", function() {
      $("#empty-field-msg").fadeOut(500);
    });
  $("#check-in").on("focus", function() {
      $("#empty-field-msg").fadeOut(500);
    });
  $("#check-out").on("focus", function() {
      $("#empty-field-msg").fadeOut(500);
    });

});

// TO DO LIST
// DRY up Rating code
// Allow user to change rating once set
