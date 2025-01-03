const axios = require("axios");

exports.handler = async (event) => {
  const restaurantId = event.queryStringParameters.restaurantId;
  try {
    const response = await axios.get(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.174214&lng=79.0600207&restaurantId=${restaurantId}`
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
