'use strict'
var fs = require('fs')
var MailParser = require('mailparser').MailParser

module.exports = function (filePath, onEnd) {
  var mailparser = new MailParser()
  mailparser.on('end', onEnd)
  fs.createReadStream(filePath).pipe(mailparser)
}
