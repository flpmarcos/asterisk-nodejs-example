const AmiClient = require('asterisk-ami-client');
const { v4: uuidv4 } = require('uuid');
var config = require('../config/config.json');

const queue = process.argv[2];

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
            .on('QueueMember', event => console.log(event))
            .on('QueueParams', event => console.log(event))
            .on('QueueEntry', event => console.log(event))
            //  QueueStatusComplete define quando devemos parar de escutar os eventos
            .on('QueueStatusComplete', response => {
                console.log(response);
                client.disconnect();
            })
            .on('internalError', error => console.log(error));
        
        actionid = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
            //Executa ação para listar os status de fila 
        client.action({
            Action: 'QueueStatus',
            ActionID: actionid,
            Queue: queue,
            Membro: ''
        });
    })
    .catch(error => console.log(error));






