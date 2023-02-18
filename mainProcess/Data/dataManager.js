const profileController = require("./controllers/profile");

function getProfile() {
    return profileController.getProfile();
}

module.exports = {
    getProfile
}