import { SecretManagerServiceClient } from '@google-cloud/secret-manager'

const client = new SecretManagerServiceClient()

const getSecret = async (name: string | undefined) => {
  const [version] = await client.accessSecretVersion({
    name: name,
  })

  let payload
  if (version && version.payload && version.payload.data) {
    payload = version.payload.data.toString()
  }

  return payload
}

export default getSecret
