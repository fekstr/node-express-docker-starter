# Add credentials
export GOOGLE_APPLICATION_CREDENTIALS=./credentials/service-account.json
export PORT=8080

# Parse env and set environment from it
cat .env.prod.yaml | while read line; do
    export $(echo $line | sed -E "s/:\ /=/; s/\'//g")
done