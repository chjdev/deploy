/**
 * Created by chris on 19/01/2017.
 */
if (process.env.DEV_MODE === 'true') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

import Swagger from "swagger-client";

const client = (swagger) => new Swagger({
  url: `${process.env.DOMAIN}${swagger}`,
  usePromise: true,
  authorizations: {
    headerAuth: new Swagger.ApiKeyAuthorization('Authorization-Token', process.env.API_KEY, 'header')
  }
});

export const activities = client('/v3/activities/swagger.json');

export const model = client('/v3/model/swagger.json');
