import React from "react"
import {useQuery} from "react-query";
import { fetchPeople } from "../Queries";
import { PeopleCard } from "./PeopleCard";

const People = () => {
    const {data, status} = useQuery("people", fetchPeople, {
        staleTime: 5000 //dont refetch for 5 seconds
    });

    return (
        <div>
            <h2>People</h2>
            {status === 'loading' && (
                <div>Loading data</div>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <div>
                    {data.results.map((ele, index) =>
                        <PeopleCard key={index} people={ele} />
                    )}
                </div>
            )}
        </div>
    )
};

export default People;