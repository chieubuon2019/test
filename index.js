
const parseJSON = strJSON => {
  try {
    if (strJSON) {
      return JSON.parse(strJSON);
    }
  } catch (error) {
    console.error('utility -> parseJSON -> try error', error);
  }

  return '';
};

const getVersionGame = () => {
  return "1.1";
};

const isEmptyObject = (obj) => {
  return !obj || !Object.keys(obj).length;
};

const tryParseJson = strJSON => {
  try {
    const jsonObject = JSON.parse(strJSON);
    return [undefined, jsonObject];
  } catch (error) {
    console.error('utility -> parseJSON -> try error', error);
    return [error];
  }
};

const main = (objectAssigned) => {

  console.log(" ******* MAIN INDEX .JS ***********  ");
  let listKeys = Object.keys(ExportedFunction);
  for (let i = 0; i < listKeys.length; i++) {
    const func = listKeys[i];
    if (func != 'main') {
      objectAssigned.prototype[func] = ExportedFunction[func];
    }
  }
}

const ExportedFunction = {
  parseJSON,
  getVersionGame,
  tryParseJson,
  isEmptyObject,
  main
}


module.exports = ExportedFunction;
