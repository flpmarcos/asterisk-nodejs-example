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
https://wiki.asterisk.org/wiki/display/AST/Asterisk+13+ManagerAction_ConfbridgeListRooms

Listar sala especifica -- Command -> ConfbridgeList
https://wiki.asterisk.org/wiki/display/AST/Asterisk+13+ManagerAction_ConfbridgeList

Retirar usuário da conferencia -- Command -> ConfbridgeKick
https://wiki.asterisk.org/wiki/display/AST/Asterisk+13+ManagerAction_ConfbridgeKick

Mutar alguem na sala -- Command -> ConfbridgeMute
https://wiki.asterisk.org/wiki/display/AST/Asterisk+13+ManagerAction_ConfbridgeMute

Desmutar alguém na sala -- Command -> ConfbridgeUnmute
https://wiki.asterisk.org/wiki/display/AST/Asterisk+13+ManagerAction_ConfbridgeUnmute

Gravar sala de conferencia -- Command -> ConfbridgeStartRecord
https://wiki.asterisk.org/wiki/display/AST/Asterisk+13+ManagerAction_ConfbridgeStartRecord

Parar gravação na sala de conferencia -- Command -> ConfbridgeStopRecord
https://wiki.asterisk.org/wiki/display/AST/Asterisk+13+ManagerAction_ConfbridgeStopRecord

Bloquear sala de conferencia -- Command -> ConfbridgeLock
https://wiki.asterisk.org/wiki/display/AST/Asterisk+13+ManagerAction_ConfbridgeLock

Desbloquear sala de conferencia -- Command -> ConfbridgeUnlock
https://wiki.asterisk.org/wiki/display/AST/Asterisk+13+ManagerAction_ConfbridgeUnlock
