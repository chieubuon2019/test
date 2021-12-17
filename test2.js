
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
    console.log("  --->>> MAIN >  dfsfafasfsa!!!! ");
  }


  const configFish = {
      FishKind: 15,
      FishMultiple: [6],
      TimeBreak: 8,
      FishMultipleProbability: [1],
      Fire: {
          Target: 3, 
          NumBullet: 2,
          Delay : [4, 8, 12],
      },    
      SpawnInfo: {
          Number: 1,
          Format: {
              '1111' : ['L1']
          },      
          PathID: [1111],
          Combina: 1
      }
  };
  
  const ExportedFunction = {
    parseJSON,
    getVersionGame,
    tryParseJson,
    isEmptyObject,
    main,
    configFish
  }
  
  
  module.exports = ExportedFunction;
  
