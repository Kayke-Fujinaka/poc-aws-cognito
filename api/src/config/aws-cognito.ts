import { ResourcesConfig } from 'aws-amplify';

export const provider = {
  custom: process.env.SSO_IDENTITY_PROVIDER!,
};

const awsExports: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.SSO_USER_POOL_ID!,
      userPoolClientId: process.env.SSO_USER_POOL_CLIENT_ID!,
      loginWith: {
        oauth: {
          domain: process.env.SSO_COGNITO_DOMAIN!,
          scopes: ['openid', 'email', 'phone'],
          redirectSignIn: [process.env.SSO_COGNITO_SIGNIN_REDIRECT_URL!],
          redirectSignOut: [process.env.SSO_COGNITO_SIGNOUT_REDIRECT_URL!],
          responseType: 'code',
        },
      },
    },
  },
};

export default awsExports;
