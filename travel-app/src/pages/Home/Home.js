import { Fragment, useEffect, useState } from "react";
import { HotelCard, Navbar } from "../../components";
import axios from "axios";

import "./Home.css";

export const Home = () => {

    useEffect(() => {
        ( async () => {
            try {
                const data = await axios.get("https://breezetraveloapp.herokuapp.com/api/hotels");
                console.log(data);
            } catch(err) {  
                console.log(err)
            }
        })()
    }, [])
    return (
        <Fragment>
            <Navbar />
            <main className="main">
                <HotelCard />
            </main>
        </Fragment>
    );
};

