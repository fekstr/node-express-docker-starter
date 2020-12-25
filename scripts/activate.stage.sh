# Add credentials
export GOOGLE_APPLICATION_CREDENTIALS=./credentials/service-account-stage.json
export PORT=8080

# Parse env and set environment from it
cat .env.stage.yaml | while read line; do
    export $(echo $line | sed -E "s/:\ /=/; s/\'//g")
done