
exports.up = function(knex) {
    return knex.schema.createTable("cars", function(cars) {
        cars.increments();
        cars.string("vin").notNullable();
        cars.string("make").notNullable();
        cars.string("model").notNullable();
        cars.string("mileage").notNullable();
        cars.string("transmission")
        cars.string("title")
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};

