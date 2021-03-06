exports.up = async function (knex) {
  return await knex.schema
    .createTable('users', table => {
      table.increments()
      table.string('email').unique()
      table.string('password')
      table.boolean('is_admin')
      table.string('stripe_customer_id')
      table.timestamps(false, true)
    })
    .createTable('customer_info', table => {
      table.increments()
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.string('first_name')
      table.string('last_name')
      table.string('address1')
      table.string('address2')
      table.string('district')
      table.string('area')
      table.string('phone')
      table.string('gender')
      table.timestamps(false, true)
    })
  // .createTable('admin', table => {
  //   table.increments()
  //   table.integer('user_id')
  //   table.foreign('user_id').references('users.id')
  //   table.string('admin_name');
  //   table.string('admin_email');

  // })
}

exports.down = function (knex) {
  return knex.schema.dropTable('customer_info').dropTable('users')
}
