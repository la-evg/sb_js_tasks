const getNumber = (data) => isNaN(parseInt(data)) ? 0 : parseInt(data);
console.log(getNumber(data))