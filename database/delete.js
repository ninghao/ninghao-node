const Event = require('../models/event')

Event.findByIdAndRemove('5962f28017cf3a088486578c')
  .then(document => console.log(document))
