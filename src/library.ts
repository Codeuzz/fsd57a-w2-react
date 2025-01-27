interface Book {
  title: string;
  author: string;
  year: number;
  id: string;
}

interface User {
  name: string;
  email: string;
  borrowedBooks: Book[];
}

export class Library {
  private books: Book[] = [];
  private users: User[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  removeBook(bookId: string): void {
    this.books = this.books.filter((book) => book.id !== bookId);
  }

  borrowBook(bookId: string, userEmail: string): string {
    const bookIndex = this.books.findIndex((book) => book.id === bookId);
    const user = this.users.find((u) => u.email === userEmail);

    if (bookIndex === -1) {
      return "Book not found in the library.";
    }
    if (!user) {
      return "User not found.";
    }

    const [borrowedBook] = this.books.splice(bookIndex, 1);
    user.borrowedBooks.push(borrowedBook);
    return `Book '${borrowedBook.title}' borrowed by ${user.name}.`;
  }

  returnBook(bookId: string, userEmail: string): string {
    const user = this.users.find((u) => u.email === userEmail);

    if (!user) {
      return "User not found.";
    }

    const bookIndex = user.borrowedBooks.findIndex(
      (book) => book.id === bookId
    );
    if (bookIndex === -1) {
      return "Book not found in user's borrowed list.";
    }

    const [returnedBook] = user.borrowedBooks.splice(bookIndex, 1);
    this.books.push(returnedBook);
    return `Book '${returnedBook.title}' returned to the library.`;
  }

  listBooks(): {
    available: Book[];
    borrowed: { user: string; books: Book[] }[];
  } {
    const borrowed = this.users
      .filter((user) => user.borrowedBooks.length > 0)
      .map((user) => ({ user: user.name, books: user.borrowedBooks }));

    return {
      available: this.books,
      borrowed,
    };
  }

  addUser(user: User): void {
    this.users.push(user);
  }
}
