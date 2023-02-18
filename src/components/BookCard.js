import React from 'react';
import { Card , Icon, Image, Button} from 'semantic-ui-react';

function BookCard({ book }) {
    const imageUrl = book.image_url || 'https://via.placeholder.com/150';

    return (
        <Card >
             <Image src={imageUrl} wrapped ui={false} size="small" />
            <Card.Content className="left aligned">
                <Card.Header>{book.title}</Card.Header>
                <Card.Meta>
                    <span>{book.author}</span>
                </Card.Meta>
                <Card.Description>
                          {book.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    <span>{book.readcount}</span>
                </a>
                <Button>Read</Button>
            </Card.Content>
        </Card>
    );
}

export default BookCard;