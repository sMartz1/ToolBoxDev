const profileController = require("./controllers/profile");

function getProfile() {
    return profileController.getProfile();
}

function updateSettings(data) {
    return profileController.updateSettings(data)
}

module.exports = {
    getProfile,
    updateSettings
}