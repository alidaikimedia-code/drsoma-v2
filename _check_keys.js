const en = require('./src/i18n/locales/en/fat-transfer-breast.json');
const ms = require('./src/i18n/locales/ms/fat-transfer-breast.json');
const enKeys = Object.keys(en);
const msKeys = Object.keys(ms);
const missingInMs = enKeys.filter(k => !msKeys.includes(k));
const extraInMs = msKeys.filter(k => !enKeys.includes(k));
console.log('EN keys:', enKeys.length);
console.log('MS keys:', msKeys.length);
console.log('Missing in MS:', JSON.stringify(missingInMs));
console.log('Extra in MS:', JSON.stringify(extraInMs));

// Check that the processNote has escaped quotes
console.log('\nprocessNote value:', ms['ftba.processNote']);
console.log('result2Desc value:', ms['ftba.result2Desc']);
