import { ResourcesConfig } from "aws-amplify";

const awsExports: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.REACT_APP_SSO_USER_POOLS_ID!,
      userPoolClientId: process.env.REACT_APP_SSO_USER_POOLS_WEB_CLIENT_ID!,
      loginWith: {
        oauth: {
          domain: process.env.REACT_APP_SSO_COGNITO_DOMAIN!,
          scopes: ["openid", "email", "phone"],
          redirectSignIn: [
            process.env.REACT_APP_SSO_COGNITO_SIGNIN_REDIRECT_URL!,
          ],
          redirectSignOut: [
            process.env.REACT_APP_SSO_COGNITO_SIGNOUT_REDIRECT_URL!,
          ],
          responseType: "token",
        },
      },
    },
  },
};

export default awsExports;
