
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('register').del()
    .then(function () {
      // Inserts seed entries
      return knex('register').insert([
        {id: 1, username: 'john', email: 'john@john.com', password: '1234'},
        {id: 2, username: 'sally', email: 'sally@sally.com', password: '4321'}
      ]);
    });
};
