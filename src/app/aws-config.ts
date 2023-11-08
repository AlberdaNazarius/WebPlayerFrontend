import * as AWS from "aws-sdk";

export function activateAwsCredentials() {
  AWS.config.credentials = new AWS.Credentials({
    accessKeyId: 'AKIASLCJ4UZ5R7F4PDGL',
    secretAccessKey: '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'
  });
}
