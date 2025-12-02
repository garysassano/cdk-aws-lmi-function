import { App } from "aws-cdk-lib";
import { MyStack } from "./stacks/my-stack";

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: "eu-west-1",
};

const app = new App();

new MyStack(app, "cdk-aws-lmi-function", {
  env: devEnv,
});

app.synth();
