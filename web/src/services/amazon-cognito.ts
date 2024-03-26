import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: process.env.REACT_APP_AMAZON_COGNITO_USER_POOL_ID!,
  ClientId: process.env.REACT_APP_AMAZON_COGNITO_APP_CLIENT_ID!,
};

const userPool = new CognitoUserPool(poolData);

export { userPool };
