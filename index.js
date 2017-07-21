const bcrypt = require('bcrypt')

const password = 'password'

bcrypt.genSalt(10, (error, salt) => {
  console.log('salt: ', salt)

  bcrypt.hash(password, salt, (error, hash) => {
    console.log('hash: ', hash)
  })
})

const hashPassword = '$2a$10$R83yg2xqFHHikRbp1mzf9.NwLk7dOqGL1WEre74kt/Y9YUxFxiFfW'
const userInputPassword = 'password1'

bcrypt.compare(userInputPassword, hashPassword)
  .then(result => console.log(result))
