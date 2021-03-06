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

    $.ajax({
      url: '/horses',
      method: 'POST',
      data: horse_data
      }).done(function(response){
      $('.horse-list').append(response);
      $('#new-horse-form').trigger('reset');
    }).fail(function(){
      console.log('Failed');
    });

  });

  $('.horse-list').on('click', 'a', function(event){
    event.preventDefault();
    console.log($(this).closest('li').find('.horse-details'));
    $(this).closest('li').find('.horse-details').toggle();
  });

}
