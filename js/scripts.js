$(document).ready(function(){

  // Datepicker for checkin and checkout
  $('.datepicker').pickadate();
  $('.timepicker').pickatime();

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
  

});