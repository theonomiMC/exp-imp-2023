import { sql } from "@vercel/postgres";

// get monthly reports
export async function getMonthlyReports() {
  try {
    const data = await sql`
        SELECT * FROM monthly  
        ORDER BY EXTRACT(MONTH from TO_DATE(month,'Month'));    
    `;
    const reports = data.rows;
    return reports;
  } catch (error) {
    console.error("Failed to fetch monthly reports:", error);
    throw new Error("Failed to fetch user.");
  }
}
// get total export amount
export async function getTotalExport() {
  try {
    const data = await sql`
          SELECT SUM(cost) FROM monthly
          WHERE mode='export'
      `;
    const totalExport = Number(data.rows[0].sum);
    return totalExport;
  } catch (error) {
    console.error("Failed to fetch monthly reports:", error);
    throw new Error("Failed to fetch user.");
  }
}

// get total import amount
export async function getTotalImport() {
  try {
    const data = await sql`
          SELECT SUM(cost) FROM monthly
          WHERE mode='import'
      `;
    const totalImport = Number(data.rows[0].sum);
    return totalImport;
  } catch (error) {
    console.error("Failed to fetch monthly reports:", error);
    throw new Error("Failed to fetch user.");
  }
}
// get Main Export Countries
export async function getTopExportCountries() {
  try {
    const data = await sql`
          SELECT *,cost::DECIMAL, share::DECIMAL FROM countries
          WHERE mode='export' and country!='Other Countries'
          ORDER BY cost DESC
      `;
    const topExportCountries = data.rows;
    return topExportCountries;
  } catch (error) {
    console.error("Failed to fetch main export countries:", error);
    throw new Error("Failed to fetch user.");
  }
}

export async function getTopImportCountries() {
  try {
    const data = await sql`
          SELECT * FROM countries
          WHERE mode='import' and country!='Other Countries'
          ORDER BY cost DESC
      `;
    const topImportCountries = data.rows;
    return topImportCountries;
  } catch (error) {
    console.error("Failed to fetch main import countries::", error);
    throw new Error("Failed to fetch user.");
  }
}

export async function getTopImportCountryItems() {
  try {
    const data = await sql`
          SELECT id,cost,pct,category,country FROM top_countries_items
          WHERE mode='import'
          
      `;
    const topImpCountryItems = data.rows;
    return topImpCountryItems;
  } catch (error) {
    console.error("Failed to fetch main import countries::", error);
    throw new Error("Failed to fetch user.");
  }
}

export async function getTopExportCountryItems() {
  try {
    const data = await sql`
          SELECT id,cost,pct,category,country FROM top_countries_items
          WHERE mode='export'
      `;
    const topExpCountryItems = data.rows;
    return topExpCountryItems;
  } catch (error) {
    console.error("Failed to fetch main import countries::", error);
    throw new Error("Failed to fetch user.");
  }
}
export async function getTopImportedProducts() {
  try {
    const data = await sql`
          SELECT category, cost, ROUND(cost/(SELECT SUM(import) FROM monthly),3
          ) AS share FROM products
          WHERE mode='import'
          ORDER BY cost DESC
      `;
    const topExpCountryItems = data.rows;
    return topExpCountryItems;
  } catch (error) {
    console.error("Failed to fetch main import countries::", error);
    throw new Error("Failed to fetch user.");
  }
}
export async function getTopExportedProducts() {
  try {
    const data = await sql`
          SELECT category, cost, ROUND(cost/(SELECT SUM(export) FROM monthly),3
          ) AS share FROM products
          WHERE mode='export'
          ORDER BY cost DESC
      `;
    const topExpCountryItems = data.rows;
    return topExpCountryItems;
  } catch (error) {
    console.error("Failed to fetch main import countries::", error);
    throw new Error("Failed to fetch user.");
  }
}
