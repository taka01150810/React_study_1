const items = [
  { id:1, name: 'あああ'},
  { id:2, name: 'いいい'},
  { id:3, name: 'ううう'} ]

export const getItems = () => items

export const getItem = id => {
  return items.find( item => id === item.id)
}
