const path = require('path');
const SimpleData = require('ll-data');
const dataBase = path.join(__dirname, './data');

const modelData = new SimpleData({
    jsonFile: 'modelData.json',
    basePath: dataBase
});


module.exports = {
    modelData
};
