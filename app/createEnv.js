const fs = require('fs');
const path = require('path');

const envContent = `GOOGLE_PLACES_API_KEY=AIzaSyAxU2uGDSW7rsgle8S7qMS2XE-rlqW9K-8
PLACE_ID=ChIJ483_dhIDb0cR8psI7GNmy0w`;

const filePath = path.join(__dirname, '.env.local');

fs.writeFileSync(filePath, envContent);

console.log('.env.local file updated with the new, verified Place ID.');