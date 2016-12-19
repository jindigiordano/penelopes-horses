$(document).ready(function() {
  bindEventHandlers();
});

var bindEventHandlers = function() {
  $('#add-horse').on('submit', function(event) {
    event.preventDefault();
    $('#new-horse-form').removeClass('hidden');
    $(event.target).addClass('hidden');
  });
}
