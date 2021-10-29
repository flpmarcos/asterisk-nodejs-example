const AmiClient = require('asterisk-ami-client');
const { v4: uuidv4 } = require('uuid');
var config = require('../config/config.json');


// Arg - Action[2] Conference[3] Channel[4]
var action = process.argv[2];
var conference = process.argv[3];
var channel = process.argv[4];


let client = new AmiClient({
    reconnect: true,
    keepAlive: true,
    emitEventsByTypes: true,
    emitResponsesById: true
});


// Conexão 
client.connect(config.AST_USER, config.AST_PASS, {host: config.AST_URI, port: config.AST_PORT})
    .then(() => {
        // Escuta eventos de fila dos asterisk
        client
            // Escuta o retorno do comando AMI
            .on('response', response => {
                console.log(response);
                client.disconnect();
            })
            .on('internalError', error => console.log(error));
        
        actionid = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
        // Executa ação para listar os status de fila 
        client.action({
                Action: action,
                ActionID: actionid,
                Conference: conference,
                Channel: channel
            });
        
    })
    .catch(error => console.log(error));


// Criar uma sala de conferencia utilizando o numero da sala 








