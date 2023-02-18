const DataManager = require("../../Data/dataManager");

function getCurrentProfile(){
    return DataManager.getProfile();
}

module.exports = {
    getCurrentProfile
}