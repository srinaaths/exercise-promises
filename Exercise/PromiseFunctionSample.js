import pg from 'pg'
const {Client} = pg
const writeUserToDB = () => {
}

const client = new Client({
    user: 'srinaaths',
    port: 5432,
    host: 'localhost',
    database: 'test',
})

client.connect(() => console.log('connected'))