const fs = require("fs");

// Profile data path
const path = "../profileData.json";
const defaultData = {
  user: "Default",
  modules: "All",
};

async function getProfile() {
  if (await checkFileExists()) {
    console.log("Returning profileData");
    return getProfileData();
  } else {
    await createDefaultProfile();
    return getProfileData();
  }
}

function createDefaultProfile() {
  console.log("Creating default data");
  let data = JSON.stringify(defaultData);
  fs.writeFileSync(path, data);
  console.log("Data created");
}

function checkFileExists() {
  try {
    if (fs.existsSync(path)) {
      console.log("Profile data found!.");
      return true;
    }
  } catch (err) {
    console.log("Error checking file :", err);
  }
  console.log("Profile data not found.");
  return false;
}

function getProfileData() {
  const profile = JSON.parse(fs.readFileSync(path));
  console.log("dataProfile readed",profile)
  return profile;
}

module.exports = {
  getProfile,
};
