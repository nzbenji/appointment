
exports.up = function(knex, Promise) {
  return knex.schema.createTable('register', (table) => {
    table.increments('id').primary()
    table.string('username')
    table.string('email')
    table.string('password')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('register')
};
