#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkSampleAppStack } from '../lib/cdk-sample-app-stack';

const app = new cdk.App();
new CdkSampleAppStack(app, 'CdkSampleAppStack');
