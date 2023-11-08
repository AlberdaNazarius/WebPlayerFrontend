import {Injectable} from "@angular/core";
import * as AWS from "aws-sdk";

@Injectable({
  providedIn: 'root'
})
export class AwsS3Service {
  s3 = new AWS.S3();

  public getS3Image(params: {Bucket: string, Key: string}) {
    return new Promise((resolve, reject) => {
      this.s3.getObject(params, (err, data) => {
        if (err) {
          console.error(err);
          reject(err)
        }
        else {
          resolve(`data:${data.ContentType};base64,${data.Body.toString('base64')}`);
        }
      });
    })
  }
}
