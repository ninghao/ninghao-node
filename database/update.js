const Event = require('../models/event')

let id = '5962f28017cf3a088486578c'
let body = {
  title: 'Google I/O 开发者大会'
}

Event.findByIdAndUpdate(id, { $set: body }, { new: true })
  .then(document => console.log(document))
