$(document).ready(function() {
  bindEventHandlers();
});

var bindEventHandlers = function() {
  $('#add-horse').on('submit', function(event) {
    event.preventDefault();
    $('#new-horse-form').removeClass('hidden');
    $(event.target).addClass('hidden');
  });

  $('#new-horse-form').on('submit', function(event) {
    event.preventDefault();
    $('#add-horse').removeClass('hidden');
    $(event.target).addClass('hidden');

    var horse_data = $('#new-horse-form').serialize();
    console.log(horse_data);

    $.ajax({
      url: '/horses',
      method: 'POST',
      data: horse_data//how do we get the new horse object here?
      // data: { "horse-name": horse_name, "horse-age": horse_age, "horse-breed": horse_breed }
    }).done(function(response){
      console.log(response);
      console.log(response["horse-name"]);
      $('.list').append(response);
    }).fail(function(){
      console.log('Failed');
    });

  });
}
