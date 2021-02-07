import { db } from "./connection/db";
import { createApp } from "./app";

import { createInMemoryBookRepository } from "./repository/inMemoryBooksRepository";
import { createPgSQLBooksRepository } from "./repository/pgSQLBooksRepository";

import type { BooksRepository } from "./types/BooksRepository";

const booksRepository: BooksRepository = createPgSQLBooksRepository(db);

const app = createApp(booksRepository);

export default app;
