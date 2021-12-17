
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
    return "1.6";
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
    console.log("  *************  test3333 hdfaong !!1******   ");
  }
  
  const ExportedFunction = {
    parseJSON,
    getVersionGame,
    tryParseJson,
    isEmptyObject,
    main
  }
  
  
  module.exports = ExportedFunction;
  
