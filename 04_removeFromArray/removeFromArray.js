const removeFromArray = function(array, ...args) {
    const retArray = [];
    array.forEach((item) => {
        if(!args.includes(item)){
            retArray.push(item);
        }
    });
    return retArray;
};

// Do not edit below this line
module.exports = removeFromArray;
