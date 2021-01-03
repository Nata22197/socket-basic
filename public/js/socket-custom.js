const socket = io();

socket.on('connect', function() {
    console.log("Conectado al servidor");
});

socket.on('disconnect', function() {
    console.error("Perdimos conexion con el servidor");
});

// Enviar info
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta del server', resp);
});

// escuchar informacion
socket.on('enviarMensaje', function(mensaje){
    console.log('Info del servidor', mensaje);
});