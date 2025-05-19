import { Client } from "minio";

const minioClient = new Client({
  endPoint: "127.0.0.1",
  port: 9000,
  useSSL: false,
  accessKey: "KbmujYAOnOOa6dOVJoQD",
  secretKey: "9K48mapnX0buHRO3EyZVyDRhpfUOtvngN98Dfnna",
});

export default minioClient;
