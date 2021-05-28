#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { AppsyncWorkshopStack } = require('../lib/appsync-workshop-stack');

const app = new cdk.App();
new AppsyncWorkshopStack(app, 'AppsyncWorkshopStack');
