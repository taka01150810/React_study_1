const books = [
  { id:1, title: '本のタイトル1' },
  { id:2, title: '本のタイトル2' },
  { id:3, title: '本のタイトル3'}, ]

// exportで関数を外に出している
export const getBooks = () => books

export const getBook = id => {
  return books.find( book => book.id === id) // findで検索
}