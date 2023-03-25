const profileController = require("./controllers/profile");
const moduleController = require("./controllers/modules")
const environmentController = require("./controllers/environments")
function getProfile() {
    return profileController.getProfile();
}

function updateSettings(data) {
    return profileController.updateSettings(data)
}

function getModuleData(name,settings){
    moduleController.getModuleData(name,settings)
}

function getEnvironments(){
    return environmentController.getEnvironments();
}
function updateEnvironmentData(data){
    return environmentController.updateEnvironmentData(data);
}



module.exports = {
    getProfile,
    updateSettings,
    getModuleData,
    getEnvironments,
    updateEnvironmentData

}