import SQLite from 'react-native-sqlite-storage';

// Enable SQLite (use the correct promise-based API)
SQLite.enablePromise(true);

// Create the database connection
let db: SQLite.Database;

const openDatabase = async (): Promise<void> => {
  try {
    // Open the database (or create it if it doesn't exist)
    db = await SQLite.openDatabase({ name: 'onlineApp.db', location: 'default' });
    console.log('Database opened successfully');
  } catch (error) {
    console.error('Error opening database', error);
  }
};

// Create a table to store orders
export const createTable = async (): Promise<void> => {
  if (!db) {
    await openDatabase(); // Ensure the database is opened before creating the table
  }

  try {
    const query = `
      CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_name TEXT,
        quantity INTEGER,
        status TEXT
      );
    `;
    await db.executeSql(query);
    console.log('Table created successfully');
  } catch (error) {
    console.error('Error creating table', error);
  }
};

// Insert an order into the database
export const insertOrder = async (order: { product_name: string; quantity: number; status: string }): Promise<void> => {
  if (!db) {
    await openDatabase(); // Ensure the database is opened before inserting
  }

  try {
    const query = `INSERT INTO orders (product_name, quantity, status) VALUES (?, ?, ?)`;
    await db.executeSql(query, [order.product_name, order.quantity, order.status]);
    console.log('Order inserted successfully');
  } catch (error) {
    console.error('Error inserting order', error);
  }
};

// Fetch orders from the database
export const getOrders = async (): Promise<any[]> => {
  if (!db) {
    await openDatabase(); // Ensure the database is opened before querying
  }

  try {
    const [results] = await db.executeSql('SELECT * FROM orders');
    const orders = [];
    for (let i = 0; i < results.rows.length; i++) {
      orders.push(results.rows.item(i));
    }
    return orders;
  } catch (error) {
    console.error('Error fetching orders', error);
    return [];
  }
};

// Delete an order from the database
export const deleteOrder = async (id: number): Promise<void> => {
  if (!db) {
    await openDatabase(); // Ensure the database is opened before deleting
  }

  try {
    const query = `DELETE FROM orders WHERE id = ?`;
    await db.executeSql(query, [id]);
    console.log('Order deleted successfully');
  } catch (error) {
    console.error('Error deleting order', error);
  }
};
