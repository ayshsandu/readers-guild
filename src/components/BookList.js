import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Input, Card } from 'semantic-ui-react';
import BookCard from './BookCard';
import { useAuthContext } from "@asgardeo/auth-react";

function BookList() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const baseUrl = process.env.REACT_APP_REST_API_BACKEND_URL;

  const { httpRequest } = useAuthContext();

  const requestConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    method: "GET",
    url: baseUrl + '/books',
    attachToken: false
  };

  useEffect(() => {
    async function fetchBooks() {
      console.log('baseUrl', baseUrl);
      //use Axios for the public API invocation
      const response = await axios.get(baseUrl + '/books', {
        headers: { "Access-Control-Allow-Origin": "*" }
      }, {});

      console.log(response.data);
      setBooks(response.data);

      // Use httpRequest from auth-react library
      // const response = await httpRequest(requestConfig);
      // console.log(response.data);
      // setBooks(response.data);
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
