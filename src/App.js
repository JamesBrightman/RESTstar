import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";
import {ReactQueryDevtools} from 'react-query-devtools';

function App() {
    const [page, setPage] = useState("Planets");

    return (
        <>
            <div className="App">
                <h1>RESTstar - Star Wars API</h1>
                <Navbar setPage={setPage}/>
                <div className="Content">
                    {page === "Planets" ? <Planets/> : <People/>}
                </div>
            </div>
            <ReactQueryDevtools initialIsOpen={false}/>
        </>
    );
}

export default App;
