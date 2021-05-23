import { Http2ServerRequest } from "http2";
import connect from "./database";

export default async function queryCounter({ url } : Http2ServerRequest) {
    const { pathname } = new URL(`http://x.com${url}`)
    const client = await connect()

    try {
        const { rows } = await client.query(`SELECT value FROM counters WHERE id = $1;`, [ pathname ])

        // console.log(rows)

        if (rows.length !== 1) {
            await client.query(`INSERT INTO counters VALUES ($1, 1);`, [ pathname ])

            return 1
        }

        await client.query(`UPDATE counters SET value = value + 1 WHERE id = \$1;`, [ pathname ])

        const { value } = rows[0]

        // console.log(value)

        return value + 1
    }
    catch (error) {
        console.log(error)

        return 0
    }

}
