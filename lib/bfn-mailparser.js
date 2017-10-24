'use strict'
var MailParser = require('mailparser').MailParser

module.exports = function (onEnd) {
  var mailparser = new MailParser()
  mailparser.on('end', onEnd)
  return mailparser
}
