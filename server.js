const api = require('./index')

const PORT = process.env.PORT || 4000

api.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})