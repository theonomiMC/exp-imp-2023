import { sql } from "@vercel/postgres";
import { normilized, numFormater } from "./utils";

// MONTH_23_22 database
//get 2022 month export-import data
export async function get2022MonthInfo() {
  try {
    const data = await sql`
        SELECT * FROM month_23_22
        WHERE year='2022' 
    `;
    const reports = data.rows;
    return reports;
  } catch (error) {
    console.error("Failed to fetch 2022 months Info:", error);
    throw new Error("Failed to fetch 2022 months Info.");
  }
}

//get 2023 month export-import data
export async function get2023MonthInfo() {
  try {
    const data = await sql`
        SELECT * FROM month_23_22
        WHERE year='2023'  
    `;
    const reports = data.rows;
    return reports;
  } catch (error) {
    console.error("Failed to fetch 2023 months Info:", error);
    throw new Error("Failed to fetch 2023 months Info.");
  }
}
// get total export amount
export async function getKpis() {
  try {
    const data = await sql`
    SELECT 
      CAST(SUM(export) AS numeric) as total_export,
      CAST(SUM(import) AS numeric) as total_import,
      CAST((SUM(export) - SUM(import)) AS numeric) as trade_balance
    FROM month_23_22
    WHERE year='2023'         
      `;
    // Log the raw data for inspection
    // console.log("Raw data from SQL query:", data);

    const kpis = {
      totalExport: Number(data.rows[0].total_export),
      totalImport: Number(data.rows[0].total_import),
      tradeBalance: Number(data.rows[0].trade_balance),
    };
    return kpis;
  } catch (error) {
    console.error("Failed to fetch KPI's:", error);
    throw new Error("Failed to fetch KPI's");
  }
}
// get Export-Import growth rates
export async function getGrowthRate() {
  try {
    const data = await sql`
    SELECT 
    (SUM(CASE WHEN year = '2023' THEN export ELSE 0 END) - 
     SUM(CASE WHEN year = '2022' THEN export ELSE 0 END)) / 
    SUM(CASE WHEN year = '2022' THEN export ELSE 0 END)*100 AS export_growth_rate,
    (SUM(CASE WHEN year = '2023' THEN import ELSE 0 END) - 
     SUM(CASE WHEN year = '2022' THEN import ELSE 0 END)) / 
    SUM(CASE WHEN year = '2022' THEN import ELSE 0 END)*100 AS import_growth_rate
    FROM month_23_22
    WHERE year IN ('2022', '2023');
      `;
    const res = data.rows[0];
    const rates = {
      export_growth_rate: parseFloat(res.export_growth_rate.toFixed(2)),
      import_growth_rate: parseFloat(res.import_growth_rate.toFixed(2)),
    };
    return rates;
  } catch (error) {
    console.error("Failed to fetch main export countries:", error);
    throw new Error("Failed to fetch user.");
  }
}
// get Main Export Countries
export async function getTopExportCountries() {
  try {
    const data = await sql`
    SELECT country, SUM(cost) AS total_cost, SUM(share) AS total_share
    FROM countries
    WHERE type = 'Export'
    GROUP BY country
    ORDER BY total_cost DESC
    LIMIT 10;
      `;
    const topExportCountries = data.rows;
    return topExportCountries.map((el) => ({
      ...el,
      total_cost: numFormater(el.total_cost, true),
      total_share: Number(el.total_share.toFixed(2)),
    }));
  } catch (error) {
    console.error("Failed to fetch main export countries:", error);
    throw new Error("Failed to fetch export countries.");
  }
}

// get Main Export Countries
export async function getTopImportCountries() {
  try {
    const data = await sql`
    SELECT country, SUM(cost) AS total_cost, SUM(share) AS total_share
    FROM countries
    WHERE type = 'Import'
    GROUP BY country
    ORDER BY total_cost DESC
    LIMIT 10;
      `;
    const res = data.rows;
    return res.map((el) => ({
      ...el,
      total_cost: Number(el.total_cost.toFixed(2)),
      total_share: Number(el.total_share.toFixed(2)),
    }));
  } catch (error) {
    console.error("Failed to fetch main import countries:", error);
    throw new Error("Failed to fetch import countries.");
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
// Get top 20 imported products fro products database
export async function getImportedProducts() {
  try {
    const data = await sql`
          SELECT 
          *
            FROM products
          WHERE type='Import'
      `;
    const res = data.rows;
    return res.map((el) => ({
      ...el,
      cost: Number(el.cost.toFixed(2)),
      cost_share: Number(el.cost_share.toFixed(2)),
    }));
  } catch (error) {
    console.error("Failed to fetch Imported Prodcts", error);
    throw new Error("Failed to fetch Imported Prodcts.");
  }
}

// Get top 20 exported products fro products database
export async function getExportedProducts() {
  try {
    const data = await sql`
          SELECT 
          *
            FROM products
          WHERE type='Export'

      `;

    const res = data.rows;
    return res.map((el) => ({
      ...el,
      cost: Number(el.cost.toFixed(2)),
      cost_share: Number(el.cost_share.toFixed(2)),
    }));
  } catch (error) {
    console.error("Failed to fetch Imported Prodcts", error);
    throw new Error("Failed to fetch Imported Prodcts.");
  }
}
// Get all countries from countries database
export async function getCountries() {
  // const { sort } = query;

  try {
    const data = await sql`
    SELECT
    country,
    COALESCE(SUM(CASE WHEN type = 'Import' THEN cost END), 0) AS import_cost,
    COALESCE(SUM(CASE WHEN type = 'Export' THEN cost END), 0) AS export_cost,
    COALESCE(SUM(CASE WHEN type = 'Import' THEN share END), 0) AS import_share,
    COALESCE(SUM(CASE WHEN type = 'Export' THEN share END), 0) AS export_share
    FROM countries
    GROUP BY country
    ORDER BY Import_share DESC;
      `;

    const res = data.rows;
    return res.map((el) => ({
      ...el,
      import_cost: numFormater(el.import_cost, true),
      export_cost: numFormater(el.export_cost, true),
      import_share: normilized(el.import_share, 3),
      export_share: normilized(el.export_share, 3),
    }));
  } catch (error) {
    console.error("Failed to fetch Countries", error);
    throw new Error("Failed to fetch Countris.");
  }
}
// Get country info from countries database
export async function getCountry(country) {
  try {
    const data = await sql`
    SELECT type,
    SUM(cost) AS total_cost,
    SUM(share) as total_share
    FROM countries
    WHERE LOWER(country) = LOWER(${country})
    GROUP BY country, type;
      `;

    const res = data.rows;
    return res;
  } catch (error) {
    console.error("Failed to fetch Country info", error);
    throw new Error("Failed to fetch Country info.");
  }
}
// Get country's top 5 exported-imported product from countries database
export async function getCountryTopImpProducts(country) {
  try {
    const data = await sql`
      SELECT
        country,
        type,
        name,
        category,
        SUM(cost) AS total_cost,
        SUM(share) AS total_share
      FROM countries
      WHERE LOWER(country) = LOWER(${country}) AND type = 'Import'
      GROUP BY country, type, category, name
      ORDER BY total_cost DESC
      LIMIT 5
      `;

    const res = data.rows;
    return res.map((el) => ({
      ...el,
      total_cost: numFormater(el.total_cost, true),
      total_share: normilized(el.total_share, 3),
    }));
  } catch (error) {
    console.error("Failed to fetch Country info", error);
    throw new Error("Failed to fetch Country's imported products.");
  }
}

// Get country's top 5 exported-imported product from countries database
export async function getCountryTopExpProducts(country) {
  try {
    const data = await sql`
    SELECT
        country,
        type,
        name,
        category,
        SUM(cost) AS total_cost,
        SUM(share) AS total_share
      FROM countries
      WHERE LOWER(country) = LOWER(${country}) AND type = 'Export'
      GROUP BY country, type, category, name
      ORDER BY total_cost DESC
      LIMIT 5
      `;

    const res = data.rows;
    return res.map((el) => ({
      ...el,
      total_cost: numFormater(el.total_cost, true),
      total_share: normilized(el.total_share, 3),
    }));
  } catch (error) {
    console.error("Failed to fetch Country info", error);
    throw new Error("Failed to fetch Country's exported products.");
  }
}
