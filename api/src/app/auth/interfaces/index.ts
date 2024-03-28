export interface Identity {
  userId: string;
  providerName: string;
  providerType: string;
  issuer: string;
  primary: boolean;
  dateCreated: string;
}

export interface IJwtPayload {
  sub: string;
  'cognito:username'?: string;
  'cognito:groups': string[];
  iss: string;
  origin_jti: string;
  token_use: string;
  auth_time: number;
  exp: number;
  iat: number;
  jti: string;
  version?: number;
  client_id?: string;
  username?: string;
  email?: string;
  email_verified?: boolean;
  scope?: string;
  identities?: Identity[];
  nonce?: string;
  at_hash?: string;
}
