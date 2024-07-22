import React from "react";
import Imports from "./Imports";

const links = [
    { text: "Help & Service" },
    { text: "Privacy Policy" },
    { text: "Terms & Conditions" },
    { text: "About Us" },
    { text: "FAQ" }
];

const UsefulLinks = () => {
    return (
        <Imports.Grid container direction="column" spacing={2}>
            {links.map((link, index) => (
                <Imports.Grid
                    key={index}
                    container
                    item
                    xs={10}
                    sx={{
                        color: 'gray',
                        mt: 2,
                        mb: 2,
                        ml: 2,
                        p: 1,
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Imports.Typography>{link.text}</Imports.Typography>
                    <Imports.Typography>&gt;</Imports.Typography>
                </Imports.Grid>
            ))}
        </Imports.Grid>
    );
};

export default UsefulLinks;
