import { create } from "zustand";
import { persist } from "zustand/middleware";
type Book = {
  id: number;
  name: string;
};

type BookStore = {
  books: Book[];
  addBook: (book: string) => void;
};

// export const useBookStore = create<BookStore>()(
//   persist(
//     // wrap set, options
//     (set) => ({
//       // set returns object
//       books: [], // initial state
//       addBook: (
//         book // actions
//       ) =>
//         set((state) => ({
//           // inner set accepts state
//           books: [...state.books, { id: Date.now(), name: book }],
//         })),
//     }),
//     {
//       name: "book-store",
//     }
//   )
// );
// wrap set, options
// set returns object
// initial state
// actions
// inner set accepts state
export const useBookStore = create<BookStore>()(
  persist(
    (set) => {
      return {
        books: [],
        addBook: (book) =>
          set((state) => ({
            books: [...state.books, { id: Date.now(), name: book }],
          })),
      };
    },
    { name: "book-store" }
  )
);
