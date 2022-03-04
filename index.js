exports.handler = async (event) => {

    console.log("Running Lambda No VPC Config");

    const response = {
        statusCode: 200,
        body: JSON.stringify("Hello World, Lambda No VPC Config!"),
    };

    return response;

};