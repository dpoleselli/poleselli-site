if [ $# -eq 0 ]; then
    echo "Please provide a subdomain name"
    exit 1
fi

aws cloudformation create-stack \
  --stack-name "$1-poleselli-sub-domain" \
  --template-body file://cf-subdomain-cloudfront.yaml \
  --capabilities CAPABILITY_IAM CAPABILITY_AUTO_EXPAND \
  --region us-east-1 \
  --parameters \
    ParameterKey=SubDomainName,ParameterValue="$1" \
    ParameterKey=AcmCertificateArn,ParameterValue='arn:aws:acm:us-east-1:056961530812:certificate/a3b60e9d-9d8e-4c01-946b-a1b39ba2f864'

if [ $# -eq 2 ] && [ "$2" -eq "--wait" ]; then
   aws cloudformation wait stack-create-complete \
        --stack-name "$1-poleselli-sub-domain"
   exit;
fi
