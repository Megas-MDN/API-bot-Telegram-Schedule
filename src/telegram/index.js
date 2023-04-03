require('dotenv/config');
const axios = require('axios');

const urlApiTelegram = `https://api.telegram.org/bot${process.env.KEY_BOT_TELEGRAM}`;
const endpointPostMessages = `/webhook/${process.env.KEY_BOT_TELEGRAM}`;
const webhook = `${process.env.URL_WEBHOOK}${endpointPostMessages}`;

const setwebHook = async () => {
  try {
    console.clear();
    const response = await axios.get(
      `${urlApiTelegram}/setWebhook?url=${webhook}`
    );
    console.log('Webhook linkado com sucesso.');
    console.log(response.data, '\n\n\n');
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { setwebHook, urlApiTelegram, endpointPostMessages };
