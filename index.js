
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
    let version = process.env.FISH_VERSION || 1;
    try {
      version = parseInt(version);
    } catch(ex) {
      version = 1;
    }
    if (version === 1) version = '';
  
    return version;
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
  
  
  module.exports = {
    parseJSON,
    getVersionGame,
    tryParseJson,
    isEmptyObject
  };
  