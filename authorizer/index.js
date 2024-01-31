module.exports.handler = async (event) => {
  try {
    console.log("Authorized!!!");
    const policyDocument = buildIAMPolicy(
      "teste",
      "Allow",
      event.methodArn,
      {}
    );
    return policyDocument;
  } catch (error) {
    if (process.env.NODE_ENV !== "test")
      console.log("**Auth Error", error.stack);
    return {
      statusCode: 401,
      body: error.stack,
    };
  }
};
const buildIAMPolicy = (userId, effect, resource, context) => {
  const policy = {
    principalId: userId,
    policyDocument: {
      Statement: [
        {
          Action: "execute-api:Invoke",
          // Allow | Deny
          Effect: effect,
          // arn
          Resource: resource,
        },
      ],
    },
    // response context
    context,
  };
  return policy;
};
