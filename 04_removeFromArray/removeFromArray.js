const removeFromArray = function(arrayToBeRemoved, ...elements) {
    let comparator;
    const modifiedArray = arrayToBeRemoved.filter(
        (item) => !elements.includes(item)   
    );
    
    return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
