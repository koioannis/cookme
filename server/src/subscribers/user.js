const { Container } = require('typedi');
const { EventSubscriber, On } = require('event-dispatch');
const mongoose = require('mongoose');
const events = require('./events');

@EventSubscriber()
class UserSubscriber {
  
}