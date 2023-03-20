const fs = require("fs");
const pathM = require('path');
const logger = require("../../utils/logger");
// Profile data path
const path =  pathM.join(__dirname, "../db/profileData.json");
const modulesController = require("./modules");
const defaultData = {
  user: "Default",
  modules: modulesController.defaultModules(),
};

async function getProfile() {
  if (await checkFileExists()) {
    logger.info("Returning profileData");
    return getProfileData();
  } else {
    await createDefaultProfile();
    return getProfileData();
  }
}

function createDefaultProfile() {
  logger.info("Creating default data into",path);
  let data = JSON.stringify(defaultData);
  fs.writeFileSync(path, data);
  logger.info("Data created");
}

function checkFileExists() {
  try {
    if (fs.existsSync(path)) {
      logger.info("Profile data found!.");
      return true;
    }
  } catch (err) {
    logger.info("Error checking file :", err);
  }
  logger.info("Profile data not found.");
  return false;
}

function getProfileData() {
  const profile = JSON.parse(fs.readFileSync(path));
  logger.info("dataProfile readed",profile)
  return profile;
}

function updateSettings(dataUpdate){
  logger.info("Modifying settings");
  const profile = JSON.parse(fs.readFileSync(path));
  let newData = {
    ...profile,
    modules: dataUpdate
  }
  let data = JSON.stringify(newData);
  fs.writeFileSync(path, data);
  logger.info("Settings updated");
}

module.exports = {
  getProfile,
  updateSettings
};
