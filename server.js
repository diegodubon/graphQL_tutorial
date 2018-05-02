const express =  require('express');
const expressGraphQL = require('express-graphql')
const userSchema = require('./schema/schema')

const app = express();

app.use('/graphql', expressGraphQL({
    schema:userSchema,
    graphiql:true
   
}))


app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));