import React from 'react';
import {useQuery} from "@apollo/client";
import {HELLO} from "../Queries/Hello";

const DemoComponent = () => {
    const {error, loading, data} = useQuery(HELLO); //can also use useLazyQuery
    console.log({error, loading, data})
    return (
        <div>
            <h1>Testing Graphql Query</h1>
        </div>
    );
};

export default DemoComponent;