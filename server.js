const app = require('./app')
const { PORT } = require('./utils/config')

app.listen(PORT, (req) => {
  console.log(`application has started on port ${PORT}`)
})