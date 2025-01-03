const fetch = require("node-fetch");

exports.handler = async (event, context) => {
    try {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.174214&lng=79.0600207");
        const data = await response.json();

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
