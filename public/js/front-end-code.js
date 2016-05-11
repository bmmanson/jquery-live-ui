hotels.forEach(function(hotel){
    $('#hotel-choices').append('<option value="' + hotel + '">' + hotel + '</option>');
});
restaurants.forEach(function(rest){
    $('#restaurant-choices').append('<option value="' + rest + '">' + rest + '</option>');
});

activities.forEach(function(activity){
    $('#activity-choices').append('<option value="' + activity + '">' + activity + '</option>');
});

function daysObj() {
  this.hotel = [];
  this.restaurants = [];
  this.activities = [];
}

function eraseAllFields () {
  hotelField.empty();
  restaurantField.empty();
  activityField.empty();
}

var days = [new daysObj];

var currentDay = days[0];

var hotelField = $(".itinerary-item.hotel-form");
var restaurantField = $(".itinerary-item.restaurant-form");
var activityField = $(".itinerary-item.activities-form");

function removeElement(){
  $('.remove.btn-circle').on('click', function(){
    $(this).prev().remove();
    $(this).remove();
  });
}

$('#hotel-form .btn').on('click', function() {
  var hotel = $('#hotel-choices').val();
  if (!currentDay.hotel.length) {
    currentDay.hotel.push($('#hotel-choices').val())
    $(".itinerary-item.hotel-form").append('<span class="title">' + hotel + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
  } else {
    currentDay.hotel = [hotel];
    $(".itinerary-item.hotel-form .title").text(hotel)
  }
  console.log(currentDay.hotel);
   $('.remove.btn-circle').on('click', function(){
     $(this).prev().remove();
     $(this).remove();
     currentDay.hotel.pop();
   });

})

$('#restaurant-form').on('click', '.btn', function() {
  var rest = $('#restaurant-choices').val()
  var restaurantArray = currentDay.restaurants;
  if (restaurantArray.indexOf(rest) === -1) {
    restaurantArray.push(rest);
    $(".itinerary-item.restaurant-form").append('<span class="title">' + rest + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
  }
  console.log(restaurantArray)

})

$('.itinerary-item.restaurant-form').on('click', '.btn', function(){
  var restaurantArray = currentDay.restaurants;
  var rest = $(this).prev().text();
  $(this).prev().remove();
  $(this).remove();
  var indexOfDeletedRestaurant = restaurantArray.indexOf(rest);
  currentDay.restaurants.splice(indexOfDeletedRestaurant, 1);
  console.log(currentDay.restaurants);
});

$('#activity-form').on('click', '.btn', function() {
  var act = $('#activity-choices').val()
  var activitiesArray = currentDay.activities;
  if (activitiesArray.indexOf(act) === -1 ) {
    activitiesArray.push(act)
    $(".itinerary-item.activities-form").append('<span class="title">' + act + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
  }
  console.log(currentDay.activities)
})

$('.itinerary-item.activities-form').on('click', '.btn', function(){
  var activitiesArray = currentDay.activities;
  var act = $(this).prev().text();
  $(this).prev().remove();
  $(this).remove();
  var indexOfDeletedActivity = activitiesArray.indexOf(act);
  currentDay.activities.splice(indexOfDeletedActivity, 1);
  console.log(currentDay.activities);
});

$('#day-add').on('click', function() {
  eraseAllFields();

    days.push(new daysObj);

  $("#day-title-field").empty().html('<span id="day-title"><span>Day ' + (days.length) + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></span>');

  $('#day-add').before('<button class="btn btn-circle day-btn">'+days.length+'</button>');

  currentDay = days[days.length - 1];

  console.log(days);
})

$('.day-buttons').on('click', '.day-btn', function() {
  eraseAllFields();

  var currentDayNum = parseInt($(this).text())-1;

  console.log(currentDayNum);

  currentDay = days[currentDayNum];

  $("#day-title-field").empty().html('<span id="day-title"><span>Day ' + (currentDayNum + 1) + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></span>');

  currentDay.hotel.forEach(function(hotel) {
    hotelField.append('<span class="title">' + hotel + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
  })

  currentDay.restaurants.forEach(function(rest){
    restaurantField.append('<span class="title">' + rest + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
  })

  currentDay.activities.forEach(function(act){
    activityField.append('<span class="title">' + act + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
  })

})
