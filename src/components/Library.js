import React from "react";
import { useAuthContext } from "@asgardeo/auth-react";

export const Library = () => {
const { state } = useAuthContext();

return (
       <div className="greeting">
            <h1>
                Hello { state.username }!
            </h1>
            <h2>We are glad you are here.</h2>
            <p>Browse the books from our catalog and start reading today.</p>
        </div>
    );

};

export default Library;