const faker = require('faker');

module.exports = function generateUsers() {

  let users = []

  for (let id=1; id <= 10; id++) {

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();

    users.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "email": email
    });
  }

  return { "users": users }
}