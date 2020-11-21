const { EventDispatcherClass} = require('event-dispatch');
const { Container} = require('typedi');

const EventDispatcher = () => (object, propertyName, index) => {
  const eventDispatcher = new EventDispatcherClass();
  Container.registerHandler(object, propertyName, index, eventDispatcher);
};

module.exports = EventDispatcher;
