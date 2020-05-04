/* eslint-disable no-await-in-loop */
const haiku = require('./haiku');

const users = {};

// Random ID until the ID is not in use
async function randomID() {
  let id = haiku();
  while (id in users) {
    await Promise.delay(5);
    id = haiku();
  }
  return id;
}

exports.create = async (socket,user_id) => {
  const id = user_id;
  users[id] = socket;
};

exports.get = (id) => users[id];

exports.remove = (id) => delete users[id];
