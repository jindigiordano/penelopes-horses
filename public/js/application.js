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

    // var horse_name = $('#new-horse-form').find('#horse-name').val();
    // var horse_age = $('#new-horse-form').find('#horse-age').val();
    // var horse_breed = $('#new-horse-form').find('#horse-breed').val();


    $.ajax({
      url: '/horses',
      method: 'POST',
      data: //how do we get the new horse object here?
      // data: { "horse-name": horse_name, "horse-age": horse_age, "horse-breed": horse_breed }
    }).done(function(response){
      console.log(response);
      console.log(response["horse-name"]);
    }).fail(function(){
      console.log('Failed');
    })


  });
}
