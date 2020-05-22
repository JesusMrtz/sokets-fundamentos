var socket = io();

// Escuchar sucesos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Jesus',
    mensaje: 'Hola mundo'
}, function(response) {
    console.log('Respuesta del servidor ', response);
});

socket.on('enviarMensaje', function(data) {
    console.log(data);
});