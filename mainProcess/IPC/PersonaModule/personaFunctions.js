const DataManager = require("../../Data/dataManager");

function getPersonaData() {
    return DataManager.getPersonaData();
}

module.exports = {
    getPersonaData,
};
