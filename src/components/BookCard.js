import React from 'react';
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function BookCard({ book }) {
    const imageUrl = book.image_url || 'https://via.placeholder.com/150';

    return (
        <Card as={Link} to={`/books/${book.isbn_code}`}>
            <Image src={imageUrl} wrapped ui={false} size="small" />
            <Card.Content className="left aligned">
                <Card.Header>{book.title}</Card.Header>
                <Card.Meta>
                    <span>{book.author}</span>
                </Card.Meta>
                <Card.Description>
                    {book.description}
                </Card.Description>
                {!book.isAvailable ? 
                (
                    <Label as='a'>
                        Borrowed
                    </Label>
                ) : (
                <Label as='a'>
                    Available
                </Label>
                )}
            </Card.Content>
            <Card.Content className="right aligned" extra>
                <a>
                    <Icon name='user' />
                    <span>{book.readcount}</span>
                </a>
                <Button primary>Info</Button>
            </Card.Content>
        </Card>
    );
}

export default BookCard;