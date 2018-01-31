// Requires the admc/wd client library
// (npm install wd)
// Then paste this into a .js file and run with Node 7.6+

const wd = require('wd');
const driver = wd.promiseChainRemote("localhost", 4723);
//const caps = {"platformName":"Android","platformVersion":"8.1","app":"/Volumes/UUI/Projects/MyApplication2/app/build/outputs/apk/debug/app-debug.apk","deviceName":"Android Emulator"};
const caps = {"platformName":"Android","platformVersion":"8.0","app":"/bitrise/deploy/app-debug.apk","deviceName":"Android Emulator"};

async function main () {
  await driver.init(caps);
  let el1 = await driver.elementById("com.example.rrblanch_incomm.myapplication:id/next_view_btn");
  await el1.click();
  console.log("TEXT:", driver.elementById("com.example.rrblanch_incomm.myapplication:id/passed_text_tv"));
  let el2 = await driver.elementById("com.example.rrblanch_incomm.myapplication:id/previous_view_btn");
  await el2.click();
  let el3 = await driver.elementById("com.example.rrblanch_incomm.myapplication:id/edit_text_et");
  await el3.sendKeys("my win");
  let el4 = await driver.elementById("com.example.rrblanch_incomm.myapplication:id/next_view_btn");
  await el4.click();
  console.log("TEXT:", driver.elementById("com.example.rrblanch_incomm.myapplication:id/passed_text_tv"));
//  await driver.quit();
}

console.log("APK:", process.env.BITRISE_APK_PATH);
console.log("TEST", process.env.BITRISE_TEST_APK_PATH);

main().catch(console.log);
