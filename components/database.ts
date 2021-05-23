import { Client } from 'pg'

const connectionString = process.env.DATABASE_URL
const client = new Client({ connectionString })

let connected = false

export default async function connect() {
    if (!connected) {
        await client.connect()

        connected = true
    }

    return client
}
