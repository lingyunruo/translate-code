const data = require('../data');


module.exports = async function(req, res) {

    const modelList = await data.modelData.get('modelList');

    res.send({
        success: true,
        data: modelList
    });

}