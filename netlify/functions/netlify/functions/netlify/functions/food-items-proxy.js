const axios = require("axios");

exports.handler = async (event) => {
  const { collectionId, offset } = event.queryStringParameters;

  // Combine foodItemsApi1 and foodItemsApi2 dynamically
  const apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.174214&lng=79.0600207&collection=${collectionId}&sortBy=&filters=&type=rcv2&offset=${offset}&page_type=null`;

  try {
    const response = await axios.get(apiUrl);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
