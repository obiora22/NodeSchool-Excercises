function getShortMessages(objs) {
  retrun objs.map(function(obj) {
      return obj.messages;
  }).filter(function(message) {
      return message.length < 50;
  })
}
