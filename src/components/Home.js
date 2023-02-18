import React from "react";
import logo from '../images/book-reader.png';
import { useAuthContext } from "@asgardeo/auth-react";
import { Button, Header, Image,Icon } from 'semantic-ui-react';

export const Home = () => {
const { state, signIn} = useAuthContext();

return (
       <div>
       <Header as='h2' icon textAlign='center'>
       <Image
         centered
         size='enormous'
         src={logo}/>
         <Header.Content>Welcome to <strong>Reader's Guild</strong> !!!</Header.Content>
         {/* <Button onClick={ () => signIn({"ui_locale": "en_US en_FR"}) } >Sing-In</Button> */}
       </Header>
     </div>
    );
};

export default Home;