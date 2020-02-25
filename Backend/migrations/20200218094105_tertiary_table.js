exports.up = function (knex) {
  return knex.schema

    .createTable('order', table => {
      table.increments()
      table.integer('user_id')
      table.foreign('user_id').references('users.id')
      table.string('status')
    })

    .createTable('ordered_item', table => {
      table.increments()
      table.integer('product_id')
      table.foreign('product_id').references('product.id')
      table.integer('order_id')
      table.foreign('order_id').references('order.id')
      table.integer('quantity')
      table.string('product_size')
      table.string('product_milk')
      table.string('product_temperature')
      table.string('special_instruction')
      table.integer('price')
    })
}

exports.down = function (knex) {
  return (
    knex.schema
      // .dropTable('shoppingCart')
      .dropTable('ordered_item')
      .dropTable('order')
  )
}
