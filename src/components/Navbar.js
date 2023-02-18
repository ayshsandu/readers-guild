import React from 'react';
import { useAuthContext } from '@asgardeo/auth-react';
import { Container, Menu, Button } from 'semantic-ui-react';

export const Navbar = () => {
    const { state, signIn, signOut } = useAuthContext();

    return (
        <Menu inverted>
            <Container>
                <Menu.Item header>Reader's Guild</Menu.Item>
                {!state.isAuthenticated ? (
                    <Menu.Item position="right">
                        <Button onClick={() => signIn({ "ui_locale": "en_US en_FR" })}>Login</Button>
                    </Menu.Item>
                ) : (
                    <><Menu.Item position="right">
                        <span>{`Welcome, ${state.username}`}</span>
                    </Menu.Item><Menu.Item>
                            <Button onClick={signOut}>Logout</Button>
                        </Menu.Item></>
                )}
            </Container >
        </Menu >
    );
};

export default Navbar;