
exports.up = function(knex, Promise) {
  return knex.schema.createTable("pessoas", function(table){
      table.increments("idpessoa");
      table.string("nomepessoa").notNullable();;
      table.string("telefonepessoa");
      table.string("enderecopessoa");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("pessoas");
};
