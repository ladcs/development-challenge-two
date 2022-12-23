import type { AWS } from '@serverless/typescript';

import { hello } from './src/functions';

const serverlessConfiguration: AWS = {
  service: 'backend-medcloud',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild'],
  provider: {
    name: 'aws',
    runtime: 'nodejs16.x',
    region: "us-east-1",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      myTable: "${self:custom.myTable}",
    },
    iamRoleStatements: [{
      Effect: 'Allow',
      Action: "dynamodb:*",
      Resource: "arn:aws:dynamodb:us-east-1:*:table/Patients",
    }
  ]
  },
  // import the function via paths
  functions: { hello },
  
  package: { individually: true },
  custom: {
    myTable: "${sls:stage}-Patients",
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node16',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },

};

module.exports = serverlessConfiguration;
