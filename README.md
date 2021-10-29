# Exemplos de código utilizando asterisk em nodejs
npm install

## Comos usar Arquivos queue/
Execute o comando  

node queue.js <nomedafila>

ex: node queue/queue.js C9-3


## Comos usar Arquivos conference/

### Criar uma nova fila 

node conference-create.js <channel> <data>
<channel> -> canal que vai ser acionado para inciar a sala SIP/1000
<data> -> numero da sala 12345

ex: node conference-create.js SIP/1000 12345


### Comandos AMI para conferencia criada

Exemplo de comando: 

node conference-actions.js ConfbridgeList <conference> <channel>

node conference-actions.js ConfbridgeList <conference> <channel>
<conference> -> Numero da sala de conferencia (necessario em algumas ações)
<channel> -> Canal da sala de conferencia (necessario em algumas ações)


Listar todas as salas -- Command -> ConfbridgeListRooms
Action: ConfbridgeListRooms
ActionID: <value></value>

Listar sala especifica -- Command -> ConfbridgeList
Action: ConfbridgeList
ActionID: <value>
Conference: <value></value>

Retirar usuário da conferencia -- Command -> ConfbridgeKick
Action: ConfbridgeKick
ActionID: <value>
Conference: <value>
Channel: <value></value>

Mutar alguem na sala -- Command -> ConfbridgeMute
Action: ConfbridgeMute
ActionID: <value>
Conference: <value>
Channel: <value></value>

Desmutar alguém na sala -- Command -> ConfbridgeUnmute
Action: ConfbridgeUnmute
ActionID: <value>
Conference: <value>
Channel: <value></value>

Gravar sala de conferencia -- Command -> ConfbridgeStartRecord
Action: ConfbridgeStartRecord
ActionID: <value>
Conference: <value>
[RecordFile:] <value></value>

Parar gravação na sala de conferencia -- Command -> ConfbridgeStopRecord
Action: ConfbridgeStopRecord
ActionID: <value>
Conference: <value></value>

Bloquear sala de conferencia -- Command -> ConfbridgeLock
Action: ConfbridgeLock
ActionID: <value>
Conference: <value></value>

Desbloquear sala de conferencia -- Command -> ConfbridgeUnlock
Action: ConfbridgeUnlock
ActionID: <value>
Conference: <value></value>
