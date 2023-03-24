const DataManager = require("../../Data/dataManager");

function updateSettings(data){
    return DataManager.updateSettings(data);
}

module.exports = {
        updateSettings
}