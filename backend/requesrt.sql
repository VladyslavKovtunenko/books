-- Get all books of author by id --
select Book.Title, Book.Year, Author.Name Book
from Book
inner join Author
on Book.Author_idAuthor = 1 && Author.idAuthor = 1;
--

-- Get user id by name --
select User.idUser from User where User.Name = 'John';
--

-- Get books id read by user --
select User_has_Book.Book_idBook from User_has_Book where User_has_Book.User_idUser = (select User.idUser from User where User.Name = 'John')
--

-- Get all books read by user
select Book.idBook, Book.Title from Book
where Book.idBook in (
	select User_has_Book.Book_idBook
	from User_has_Book
	where User_has_Book.User_idUser = (
		select User.idUser
		from User
		where User.Name = 'John'
	)
);
--

--Get all books read by user with author
select Author.Name, Book.Title, Book.Year from Book, Author
where Book.idBook in (
	select User_has_Book.Book_idBook
	from User_has_Book
	where User_has_Book.User_idUser = (
		select User.idUser
		from User
		where User.Name = 'John'
	)
) and Author.idAuthor = Book.Author_idAuthor;
--

-- Get all writers with their books
select Author.Name, Book.Title, Book.Year from Book, Author where Book.Author_idAuthor = Author.idAuthor;
--