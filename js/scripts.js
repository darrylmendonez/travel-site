$(document).ready(function(){

  // Datepicker for checkin and checkout
  $('.datepicker').pickadate();
  $('.timepicker').pickatime();

  // Star ratings
  $("#one-star").on("click", function(oneStar){
    var firstBlackStar = $("<i>").attr("id", "one-star").addClass("fa fa-star");
    $("#one-star").replaceWith($(firstBlackStar));
  });

  $("#two-stars").on("click", function(twoStars){
    var firstBlackStar = $("<i>").attr("id", "one-star").addClass("fa fa-star");
    var secondBlackStars = $("<i>").attr("id", "two-stars").addClass("fa fa-star");
    $("#one-star").replaceWith($(firstBlackStar));
    $("#two-stars").replaceWith($(secondBlackStars));
  });

    $("#three-stars").on("click", function(threeStars){
    var firstBlackStar = $("<i>").attr("id", "one-star").addClass("fa fa-star");
    var secondBlackStars = $("<i>").attr("id", "two-stars").addClass("fa fa-star");
    var threeBlackStars = $("<i>").attr("id", "three-stars").addClass("fa fa-star");
    $("#one-star").replaceWith($(firstBlackStar));
    $("#two-stars").replaceWith($(secondBlackStars));
    $("#three-stars").replaceWith($(threeBlackStars));
  });

    
    
});