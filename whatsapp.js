const {
 default: makeWASocket,
 useMultiFileAuthState
} = require('@whiskeysockets/baileys');

async function conectarWhatsapp() {

 const { state, saveCreds } =
 await useMultiFileAuthState('auth');

 const sock = makeWASocket({
   auth: state
 });

 sock.ev.on('creds.update', saveCreds);

 sock.ev.on('connection.update', ({ qr }) => {

   if(qr){
     console.log(qr);
   }

 });

}

conectarWhatsapp();
