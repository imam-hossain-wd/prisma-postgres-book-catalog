# prisma-postgres-book-catalog

Technology Stack:
Use TypeScript as the Programming Language.
Use Express.js as the web framework.
Use Prisma as the Object Realtion Model (ORM)
Use postgreSQL as the database
Use JWT for attentication and Authorization
Use Zod for validation


Application Routes:

root-url : https://book-catalog-postgres.vercel.app/api/v1/

singup : https://book-catalog-postgres.vercel.app/api/v1/auth/singup
singin : https://book-catalog-postgres.vercel.app/api/v1/auth/singin
refresh-token: https://book-catalog-postgres.vercel.app/api/v1/auth/refresh-token

my-profile : https://book-catalog-postgres.vercel.app/api/v1/profile

all users : https://book-catalog-postgres.vercel.app/api/v1/users

single user : https://book-catalog-postgres.vercel.app/api/v1/users/:id

update user : https://book-catalog-postgres.vercel.app/api/v1/users/:id

delete user : https://book-catalog-postgres.vercel.app/api/v1/users/:id


Category-------------
create-category : https://book-catalog-postgres.vercel.app/api/v1/categories/create-category

get all category : https://book-catalog-postgres.vercel.app/api/v1/categories

get single category : https://book-catalog-postgres.vercel.app/api/v1/categories/:id

update category : https://book-catalog-postgres.vercel.app/api/v1/categories/:id

delete category : https://book-catalog-postgres.vercel.app/api/v1/categories/:id


Books

create-book : https://book-catalog-postgres.vercel.app/api/v1/books/create-book

get all books : https://book-catalog-postgres.vercel.app/api/v1/books

search filtering pagination : 

pagination: 

https://book-catalog-postgres.vercel.app/api/v1/books?page=2&size=5

https://book-catalog-postgres.vercel.app/api/v1/books?sortBy=author&sortOrder=desc


search: 
https://book-catalog-postgres.vercel.app/api/v1/books?searchTerm=nay


filtering with min or max Price : 
https://book-catalog-postgres.vercel.app/api/v1/books?minPrice=200&maxPrice=1500


filtering CategoryId 
https://book-catalog-postgres.vercel.app/api/v1/books?category=5d53b9ae-ae47-49d5-9677-989786d5f735




get book by categoryId :
https://book-catalog-postgres.vercel.app/api/v1/books/:id/category


get single books : https://book-catalog-postgres.vercel.app/api/v1/books/:id

get update books :  https://book-catalog-postgres.vercel.app/api/v1/books/:id

get delete books :  https://book-catalog-postgres.vercel.app/api/v1/books/:id


Order routes:


create-order : https://book-catalog-postgres.vercel.app/api/v1/orders/create-order

get all orders : https://book-catalog-postgres.vercel.app/api/v1/orders

get single order : https://book-catalog-postgres.vercel.app/api/v1/orders/:id

get update order : https://book-catalog-postgres.vercel.app/api/v1/orders/:id

get delete order : https://book-catalog-postgres.vercel.app/api/v1/orders/:id



