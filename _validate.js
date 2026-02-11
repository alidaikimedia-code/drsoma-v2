const langs = ['en','id','zh-CN','zh-MY','ms','ko'];
let ok = true;
langs.forEach(l => {
  try {
    const j = require('./src/i18n/locales/' + l + '/treatments.json');
    const k = Object.keys(j).length;
    console.log(l + ': ' + k + ' keys - OK');
  } catch(e) {
    console.log(l + ': FAIL - ' + e.message);
    ok = false;
  }
});
if (!ok) process.exit(1);
