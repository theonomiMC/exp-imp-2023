const { db } = require("@vercel/postgres");
const {
  // countries,
  // monthly,
  // products,
  top_countries_items,
} = require("../app/lib/placeholder.js");

// async function seedCountries(client) {
//   try {
//     // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     // Create the "countries" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS countries (
//         id serial PRIMARY KEY,
//         country VARCHAR(255) NOT NULL,
//         mode TEXT NOT NULL,
//         cost DECIMAL NOT NULL,
//         share DECIMAL NOT NULL
//       );
//     `;

//     console.log(`Created "countries" table`);
//     // Insert data into the "countries" table
//     const insertedCountries = await Promise.all(
//       countries.map(
//         (country) => client.sql`
//                 INSERT INTO countries (id, country, mode, cost,share)
//                 VALUES (${country.id},${country.country},${country.mode},${country.cost},${country.share})
//                 ON CONFLICT (id) DO NOTHING;
//             `
//       )
//     );
//     return { createTable, countries: insertedCountries };
//   } catch (error) {
//     console.error("Error seeding countries:", error);
//     throw error;
//   }
// }
// // create monthly report table
// async function seedMonthly(client) {
//   try {
//     // await client.sql`CREATE EXTENSION "uuid-ossp"`;
//     // Create the "monthly report" table if it doesn't exist
//     const createTable = await client.sql`
//         CREATE TABLE monthly (
//           id serial PRIMARY KEY,
//           month VARCHAR(255) NOT NULL,
//           export DECIMAL NOT NULL,
//           import DECIMAL NOT NULL
//         );
//       `;

//     console.log(`Created "monthly report" table`);
//     // insert values in the table
//     const insertedReports = await Promise.all(
//       monthly.map(
//         (report) => client.sql`
//                 INSERT INTO monthly(id,month,export, import)
//                 VALUES (${report.id},${report.month},${report.export},${report.import})
//                 ON CONFLICT (id) DO NOTHING;
//             `
//       )
//     );
//     return { createTable, monthly: insertedReports };
//   } catch (error) {
//     console.error("Error seeding monthly report:", error);
//     throw error;
//   }
// }

// // create main eport-import report table
// async function seedProducts(client) {
//   try {
//     // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     // Create the "monthly report" table if it doesn't exist
//     const createTable = client.sql`
//         CREATE TABLE IF NOT EXISTS products (
//           id serial PRIMARY KEY,
//           code TEXT NOT NULL,
//           mode TEXT NOT NULL,
//           cost DECIMAL NOT NULL,
//           category TEXT NOT NULL
//         );
//       `;
//     const insertedProducts = await Promise.all(
//       products.map(
//         (product) => client.sql`
//             INSERT INTO products(id,code,mode,cost,category)
//             VALUES (${product.id},${product.code},${product.mode},${product.cost},${product.category})
//         `
//       )
//     );
//     console.log(`Created "products" table`);
//     return { createTable, products: insertedProducts };
//   } catch (error) {
//     console.error("Error seeding monthly report:", error);
//     throw error;
//   }
// }
async function seedCountryPtoducts(client) {
  try {
    const createTable = client.sql`
        CREATE TABLE IF NOT EXISTS top_countries_items (
          id serial PRIMARY KEY,
          country TEXT NOT NULL,
          mode TEXT NOT NULL,
          code TEXT NOT NULL,
          cost DECIMAL NOT NULL,
          total DECIMAL NOT NULL,
          pct DECIMAL NOT NULL,
          category TEXT NOT NULL
        );
      `;
    const insertedCountryProducts = await Promise.all(
      top_countries_items.map(
        (product) => client.sql`
            INSERT INTO top_countries_items(id,country,mode,code,cost,total,pct,category)
            VALUES (${product.id},${product.country},${product.mode},${product.code},${product.cost},${product.total},${product.pct},${product.category})
        `
      )
    );
    console.log(`Created "country-products" table`);
    return { createTable, top_countries_items: insertedCountryProducts };
  } catch (error) {
    console.error("Error seeding monthly report:", error);
    throw error;
  }
}
async function main() {
  const client = await db.connect();

  // await seedCountries(client);
  // await seedMonthly(client);
  // await seedProducts(client);
  await seedCountryPtoducts(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
