
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: 1322354234234, 
          make: 'Kia',
          model: "Telluride",
          mileage: '10000',
          transmission: "auto"
        },
        {
          vin: 15436754635, 
          make: 'Tesla',
          model: "Cybertruck",
          mileage: '500',
          transmission: "auto",
          title: "clean"
        },
        {
          vin: 135785978423, 
          make: 'Tesla',
          model: "Model 3",
          mileage: '10000',
          transmission: "auto"
        },
      ]);
    });
};
