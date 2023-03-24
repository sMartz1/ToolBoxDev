const profileController = require("./controllers/profile");
const moduleController = require("./controllers/modules")
function getProfile() {
    return profileController.getProfile();
}

function updateSettings(data) {
    return profileController.updateSettings(data)
}

function getModuleData(name,settings){
    moduleController.getModuleData(name,settings)
}

module.exports = {
    getProfile,
    updateSettings,
    getModuleData
}