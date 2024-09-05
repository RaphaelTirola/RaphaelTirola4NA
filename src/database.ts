import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://f8_hl22_user:lyfiwizuxn8j8XvembM3QeMuph7JSX02@dpg-cr7qs756l47c73bq6bhg-a.oregon-postgres.render.com/f8_hl22';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;