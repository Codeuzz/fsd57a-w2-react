import "./style.css";
import { Library } from "./library";

const library1 = new Library();
library1.addBook({
  title: "1984",
  author: "George Orwell",
  year: 1949,
  id: "1",
});
library1.addBook({
  title: "Brave New World",
  author: "Aldous Huxley",
  year: 1932,
  id: "2",
});
library1.addBook({
  title: "Fahrenheit 451",
  author: "Ray Bradbury",
  year: 1953,
  id: "3",
});

library1.addUser({
  name: "Alice",
  email: "alice@example.com",
  borrowedBooks: [],
});
library1.addUser({ name: "Bob", email: "bob@example.com", borrowedBooks: [] });
console.log("Available books:", library1.listBooks().available);
console.log(library1.borrowBook("1", "alice@example.com"));

console.log("Books after borrowing", library1.listBooks());
console.log(library1.returnBook("1", "alice@example.com"));

console.log("Books after returning:", library1.listBooks());
library1.removeBook("2");
console.log("Books after removal:", library1.listBooks());

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 id="lala"></h1>
  </div>
`;

const lalaElement = document.querySelector<HTMLHeadingElement>("#lala");
if (lalaElement) {
  lalaElement.textContent = "< Hello Planet />";
}
