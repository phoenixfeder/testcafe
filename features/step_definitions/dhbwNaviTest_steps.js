const {Given, When, Then } = require('cucumber');
const url = require('../support/pages/const-url').url;
const select = require('../support/pages/const-selection').select;

Given('ich befinde mich auf der {string}', async function (string) {
    await testController.navigateTo(url(string));
  });

  When('ich mit dem Mauszeiger auf {string} klicke', async function (string) {
    await testController.click(select(string));
  });

  Then('wird {string} angezeigt', async function (string) {
    const selection = select(string).with({boundTestRun: testController});
    await testController.expect(selection.visible).ok();
  });

  Then('wird {string} nicht angezeigt', async function (string) {
    const selection = select(string).with({boundTestRun: testController});
    await testController.expect(selection.visible).notOk();
  });

  When('ich über das Suchfeld nach {string} suche', async function (string) {
    const search = select('suchen');
    const searchfield = select('suchFeld');
    await testController.click(search).typeText(searchfield, string).pressKey('enter');
  });

  Then('werden die Suchergebnisse aufgelistet', async function () {
    const searchresult = select('suchergebnisse').with({boundTestRun: testController});
    await testController.expect(searchresult.exists).ok();
  });

  Then('es wird {string} Suchergebnis aufgeführt', async function (string) {
    const firstresult = select('erstesSuchergebnis').with({boundTestRun: testController});
    if(string === 'mindestens ein'){
        await testController.expect(firstresult.exists).ok();
    }else{
        await testController.expect(firstresult.exists).notOk();
    }
  });