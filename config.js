const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "qMV0wKCD#rpqx7KbjLrD5aI_wWwMBlx7jnTb_8zk0ZAM587iD9m0", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "mongodb://mongo:BtlElddMPOAvDVdGaFrCxqPFFNJAmyMg@yamabiko.proxy.rlwy.net:57963",  //ඔයාගෙ mongoDb url එක
};
 
