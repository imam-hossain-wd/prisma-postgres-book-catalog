export const BookSearchAbleFields: string[] = ['title', 'author', 'genre'];

export const BookFilterableFields: string[] = [
    'searchTerm',
    'minPrice',
    'maxPrice',
    'category'
];


type BookRelationalFieldsMapper = {
    [key: string]: string;
  };
  
 export const bookRelationalFieldsMapper: BookRelationalFieldsMapper = {
    category: 'category',
  };
  