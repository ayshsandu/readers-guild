import React from "react";
import logo from '../images/book-reader.png';
import { useAuthContext } from "@asgardeo/auth-react";
import { Button, Header, Image, Icon } from 'semantic-ui-react';
import BookList from './BookList';

export const Home = () => {
   const { state } = useAuthContext();

   return (

      <div>
         {!state.isAuthenticated ? (
            <><Header as='h2' icon textAlign='center'>
               <Image
                  centered
                  size='enormous'
                  src={logo} />

               <Header.Content>Welcome to <strong>Reader's Guild</strong> !!!</Header.Content>
            </Header><BookList /></>
         ) : (
            <><Header as='h2' icon textAlign='center'>
               <Button primary className="center aligned"> Add Book</Button>
            </Header>
               <BookList />
            </>
         )}

      </div>
   );
};

export default Home;