import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Input, Card } from 'semantic-ui-react';
import BookCard from './BookCard';

function BookList() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const baseUrl = 'https://66277e3c-5cbc-4840-83e8-490c20d45fce-dev.e1-us-east-azure.st.choreoapis.dev/mcbs/books/1.0.0';

  useEffect(() => {
    async function fetchBooks() {
      console.log('fetching books');
      console.log('baseUrl', baseUrl);
      //add allow origin header to the request
      const response = await axios.get(baseUrl + '/books', {
        headers: { "Access-Control-Allow-Origin": "*" }
      }, {});

      // const response = await axios.get('http://localhost:9090/readers/books');
      console.log(response.data);
      setBooks(response.data);
    }

    fetchBooks();
  }, []);

  useEffect(() => {
    const results = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [books, searchTerm]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  // show book list
  return (
    <Container>
      <Input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={handleSearchChange}
        fluid
      />
      <Card.Group>
        {searchResults.map(book => (
          <BookCard key={book.isbn_code} book={book} />
        ))}
      </Card.Group>
    </Container>
  );

}

export default BookList;
