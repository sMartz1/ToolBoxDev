const { Configuration, OpenAIApi } = require("openai");
const { getModuleData } = require("../../Data/dataManager");

const apiKey = async () => {
    const readKey = await getModuleData("naviModule", "ApiKey");
    return readKey;
};

const configuration = new Configuration({
    apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

const sendRequest = async (query) => {
    try {
        const response = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{
                        role:"user",
                        content:query
                }],
            });
            return response;
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
    
};

module.exports = {
    sendRequest,
};
