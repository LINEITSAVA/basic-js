const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined){
    return 'Unable to determine the time of year!';
  };
  if (Object.prototype.toString.call(date) !== "[object Date]"){
    throw new Error('THROWN');
  };

    let localDate = new Date(date);
    let season = '';




 let localMonth = localDate.getMonth();
 let localDay = localDate.getDate();



    if (localMonth === 11 || localMonth === 0 || localMonth === 1){
      season = 'winter';
    }
    if (localMonth === 2 || localMonth === 3 || localMonth === 4){
      season = 'spring';
    }
    if (localMonth === 5 || localMonth === 6 || localMonth === 7){
      season = 'summer';
    }
    if (localMonth === 8 || localMonth === 9 || localMonth === 10){
      season = 'autumn';
    }
      return season;
};
