const { db } = require("@vercel/postgres");
const { countries, monthly, products } = require("../app/lib/placeholder.js");

async function seedCountries(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "countries" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS countries (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        country VARCHAR(255) NOT NULL,
        mode TEXT NOT NULL,
        cost INT NOT NULL,
        share INT NOT NULL
      );
    `;

    console.log(`Created "countries" table`);
    return { createTable };
  } catch (error) {
    console.error("Error seeding countries:", error);
    throw error;
  }
}
// create monthly report table
async function seedMonthly(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "monthly report" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS monthly (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          month VARCHAR(255) NOT NULL,
          mode TEXT NOT NULL,
          cost INT NOT NULL
        );
      `;

    console.log(`Created "monthly report" table`);
    return { createTable };
  } catch (error) {
    console.error("Error seeding monthly report:", error);
    throw error;
  }
}

// create main eport-import report table
async function seedProducts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "monthly report" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS products (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          code TEXT NOT NULL,
          mode TEXT NOT NULL,
          cost INT NOT NULL,
          category TEXT NOT NULL,
        );
      `;

    console.log(`Created "products" table`);
    return { createTable };
  } catch (error) {
    console.error("Error seeding monthly report:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedCountries(client);
  await seedMonthly(client);
  await seedProducts(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
