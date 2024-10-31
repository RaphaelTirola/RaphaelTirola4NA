import pool from '../config/database';

const createBooksTable = async () => {
  const book = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        author VARCHAR(100) UNIQUE NOT NULL,
        price DECIMAL NOT NULL
      );
    `;
    await book.query(queryText);
    console.log('Tabela "book" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela:', err);
  } finally {
    book.release();
  }
};

createBooksTable().then(() => process.exit(0));