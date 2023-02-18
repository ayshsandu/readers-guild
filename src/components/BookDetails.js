/**
 * This component is responsible for displaying the details of a book.
 */
import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';

const BookDetails = ({ book }) => {
  return (
    <Card fluid>
      <Image src={book.image_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{book.title}</Card.Header>
        <Card.Meta>
          <span className='date'>{book.author}</span>
        </Card.Meta>
        <Card.Description>{book.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button color='green' floated='right' onClick={() => window.alert(`Thank you for purchasing ${book.title}!`)}>
          <Icon name='shop' />
          Purchase
        </Button>
      </Card.Content>
    </Card>
  );
};

export default BookDetails;

// function BookDetails(props) {
//     const { isbn } = props.match.params;
  
//     // Call your API to fetch the book details using the ISBN
  
//     return (
//       <div>
//         <h2>Book Details</h2>
//         <p>ISBN: {isbn}</p>
//         <p>Title: {book.title}</p>
//         <p>Author: {book.author}</p>
//         <p>Description: {book.description}</p>
//         <Button>Add to Cart</Button>
//       </div>
//     );
//   }
  