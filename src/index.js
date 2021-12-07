// import { Map } from "immutable";
import { produce } from "immer";

let book = { title: "Harry Potter" };
function publish(book) {
  //   book.isPublished = true;
  return produce(book, draftBook => {
    draftBook.isPublished = true;
  });
}

let updatedBook = publish(book);

console.log("book", book);
console.log("updatedBook", updatedBook);
