const axios = require("axios");

exports.handler = async () => {
  try {
    const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.174214&lng=79.0600207");
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
