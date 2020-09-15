import React, { useState } from "react"
import { usePaginatedQuery } from "react-query";
import { fetchPlanets } from "../Queries";
import { PlanetCard } from "./PlanetCard";

const Planets = () => {
    const [page, setPage] = useState(1);
    const {
        resolvedData,  //last successfully fetched data - is output
        latestData,  //data for ongoing queries, not cached. Sets resolvedData when ready.
        status
    } = usePaginatedQuery(["planets", page], fetchPlanets, {
        staleTime: 5000 //dont refetch for 5 seconds
    });

    return (
        <div>
            <h2>Planets</h2>

            {status === 'loading' && (
                <div>Loading data</div>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <>
                <div>
                    {resolvedData.results.map((ele, index) =>
                        <PlanetCard key={index} planet={ele} />
                    )}
                </div>
                    <button
                        onClick={()=> setPage(old => Math.max(old -1, 1))}
                        disabled={page === 1}
                    >Prev Page</button>
                    <span>{ page }</span>
                    <button
                        onClick={()=> setPage(old => !latestData || !latestData.next ? old : old + 1)}
                        disabled={!latestData || !latestData.next}
                    >Next Page</button>
                </>
            )}
        </div>
    )
};

export default Planets;