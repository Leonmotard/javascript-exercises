const leapYears = function(year) {

    const condition = (year % 4 == 0 && year % 100 !=0) || year % 400 ==0; 

    if(condition){
            return true;
    }else  return false;
};

// Do not edit below this line
module.exports = leapYears;
