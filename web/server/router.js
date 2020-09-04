const ctrlIndex = require('./controller/index');
const ctrlGetModelList = require('./controller/getModelList');

module.exports = (app) => {

    app.get('/', ctrlIndex);
    app.get('/async/modelList', ctrlGetModelList);
}