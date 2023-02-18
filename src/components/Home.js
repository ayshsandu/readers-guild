import React, { useState } from "react";
import { Button, Header, Image, Icon, Modal, Form } from "semantic-ui-react";
import BookList from "./BookList";
import { useAuthContext } from "@asgardeo/auth-react";
import logo from "../images/book-reader.png";

export const Home = () => {
   const [showAddBookModal, setShowAddBookModal] = useState(false);
   const [newBook, setNewBook] = useState({});
   const baseUrl = 'https://66277e3c-5cbc-4840-83e8-490c20d45fce-dev.e1-us-east-azure.st.choreoapis.dev/mcbs/books/1.0.0';
   const { state, httpRequest } = useAuthContext();

   const requestConfig = {
       method: "POST",
       url: baseUrl + "/books",
       data : [newBook],
       withCredentials: false
   };

/**
 * Implement handleAddbook function with auth-react library
 */
   const handleAddBook = async () => {
         try {
            newBook.isAvailable = true;
            const response = await httpRequest(requestConfig);
            console.log("Book added successfully:", response.data);
            setShowAddBookModal(false);
         } catch (error) {
            console.error("Error adding book:", error);
         }
   };
   return (
      <div>
         {!state.isAuthenticated ? (
            <>
               <Header as="h2" icon textAlign="center">
                  <Image centered size="enormous" src={logo} />
                  <Header.Content>
                     Welcome to <strong>Reader's Guild</strong> !!!
                  </Header.Content>
               </Header>
               <BookList />
            </>
         ) : (
            <>
               <Header as="h2" icon textAlign="center">
                  <Button
                     primary
                     className="center aligned"
                     onClick={() => setShowAddBookModal(true)}
                  >
                     Add Book
                  </Button>
               </Header>
               <BookList />
               <Modal open={showAddBookModal} onClose={() => setShowAddBookModal(false)}>
                  <Modal.Header>Add a new book</Modal.Header>
                  <Modal.Content>
                     <Form>
                        <Form.Field>
                           <label>ISBN</label>
                           <input
                              placeholder="ISBN"
                              onChange={(e) =>
                                 setNewBook({ ...newBook, isbn_code: e.target.value })
                              }
                           />
                        </Form.Field>
                        <Form.Field>
                           <label>Title</label>
                           <input
                              placeholder="Title"
                              onChange={(e) =>
                                 setNewBook({ ...newBook, title: e.target.value })
                              }
                           />
                        </Form.Field>
                        <Form.Field>
                           <label>Author</label>
                           <input
                              placeholder="Author"
                              onChange={(e) =>
                                 setNewBook({ ...newBook, author: e.target.value })
                              }
                           />
                        </Form.Field>
                        <Form.Field hidden>
                           <label>Description</label>
                           <input
                              placeholder="Description"
                              onChange={(e) =>
                                 setNewBook({ ...newBook, description: e.target.value })
                              }
                           />
                        </Form.Field>
                     </Form>
                  </Modal.Content>
                  <Modal.Actions>
                     <Button color="black" onClick={() => setShowAddBookModal(false)}>
                        Cancel
                     </Button>
                     <Button
                        positive
                        icon="checkmark"
                        labelPosition="right"
                        content="Add Book"
                        onClick={handleAddBook}
                     />
                  </Modal.Actions>
               </Modal>
            </>
         )}
      </div>
   );
};

export default Home;
