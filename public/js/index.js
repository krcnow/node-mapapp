var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

socket.on('newSelect', function (select) {
  console.log('newSelect', select);
  var li = jQuery('<li></li>');
  li.text(`${select.from}: ${select.text}`);

  jQuery('#dataset').append(li);
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {

  });
});

jQuery('#dataset-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createSelect', {
    from: 'User',
    text: jQuery('[id=myList]').val()
  }, function () {

  });
});
