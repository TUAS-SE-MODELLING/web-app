import React from "react";
import Navigation from "./Navigation";
const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div>
                <Navigation />
                <main>{children}</main>
            </div>
        </React.Fragment>
    );
};

export default Layout;
