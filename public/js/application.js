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
      data: horse_data
      }).done(function(response){
      $('.list').append(response);
      $('#new-horse-form').trigger('reset');
    }).fail(function(){
      console.log('Failed');
    });

  });

  $('.list').on('click', 'a', function(event){
    event.preventDefault();
    var link = event.target;
    var url = $(link).attr('href');
    console.log(url);
    console.log($(link).closest('li'));
    $.ajax({
      url: url,
      method: 'GET'
    }).done(function(response){
      console.log($('.horse-details'));
      if ($('.horse-details').children().length > 0) {
        $('.horse-details').remove();
      }
      else {
        $(link).closest('li').append(response);
      }
    }).fail(function(){
      console.log('Fail.');
    })
  })

}
