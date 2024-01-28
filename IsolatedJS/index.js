module.exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "Use me when you need an custom Memory or CPU for your Microservice",
    }),
  };
};
