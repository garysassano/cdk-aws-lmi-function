# cdk-aws-lmi-function

CDK app that deploys a Lambda function with an LMI (Lambda Managed Instances) capacity provider. This repository is intended to demonstrate [AWS Lambda Managed Instances](https://aws.amazon.com/about-aws/whats-new/2025/11/aws-lambda-managed-instances/).

## Prerequisites

- **_AWS:_**
  - Must have authenticated with [Default Credentials](https://docs.aws.amazon.com/cdk/v2/guide/cli.html#cli_auth) in your local environment.
  - Must have completed the [CDK bootstrapping](https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html) for the target AWS environment.
- **_Node.js + pnpm:_**
  - Must be installed in your system.

## Installation

```sh
pnpm install
```

## Deployment

```sh
pnpm deploy
```

## Cleanup

```sh
pnpm destroy
```
