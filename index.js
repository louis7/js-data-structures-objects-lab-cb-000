// Write your solution in this file!

const driver = {};
function updateDriverWithKeyAndValue (obj, key, value) {

  return Object.assign({}, obj, { [key]: value });


}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key) {
  // Alternate using ES6 Spread operators:
  // const newObj = { ...driver }
  const newObj = Object.assign({}, driver);

  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver;
}
