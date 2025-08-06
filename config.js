const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DEE2zQSB#Uk_LIm_XZ6eDi2raGhe-A6NQ8xtAlgRoaO_YXcPCqjA", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "mongodb://mongo:BtlElddMPOAvDVdGaFrCxqPFFNJAmyMg@yamabiko.proxy.rlwy.net:57963",  //ඔයාගෙ mongoDb url එක
};
 
