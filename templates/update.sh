#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Please provide a subdomain name"
    exit 1
fi

if [ $# -ge 1 ] && [ "$1" = "--root" ]; 
then
   aws cloudformation update-stack \
    --stack-name "poleselli-root-domain" \
    --template-body file://cfn-main.yaml \
    --capabilities CAPABILITY_IAM CAPABILITY_AUTO_EXPAND \
    --region us-east-1 \
    --parameters \
      ParameterKey=DomainName,ParameterValue="poleselli.com" \
      ParameterKey=HostedZone,ParameterValue="poleselli.com" \
      ParameterKey=AcmCertificateArn,ParameterValue="arn:aws:acm:us-east-1:056961530812:certificate/a3b60e9d-9d8e-4c01-946b-a1b39ba2f864"
else
  aws cloudformation update-stack \
    --stack-name "$1-poleselli-sub-domain" \
    --template-body file://cfn-main.yaml \
    --capabilities CAPABILITY_IAM CAPABILITY_AUTO_EXPAND \
    --region us-east-1 \
    --parameters \
      ParameterKey=DomainName,ParameterValue="$1.poleselli.com" \
      ParameterKey=HostedZone,ParameterValue="poleselli.com" \
      ParameterKey=AcmCertificateArn,ParameterValue="arn:aws:acm:us-east-1:056961530812:certificate/a3b60e9d-9d8e-4c01-946b-a1b39ba2f864"
fi