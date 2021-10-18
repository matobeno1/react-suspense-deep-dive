import React, {Suspense} from "react";
import { Person, createResource } from "./Person";
import {Number} from "./Number";

const resource = createResource();

const WaitForBothToLoad = () => (
    <div>
        <h4>Waits for both to finish loading</h4>
        <Suspense fallback={(
            <div>Loading resources...</div>
        )} >
            <Number resource={resource} />
            <Person resource={resource} />
        </Suspense>
    </div>
)

const LoadSeparately = () => (
    <div>
        <h4>LoadSeparately</h4>
        <Suspense fallback={(
            <div>Loading person...</div>
        )} >
            <Person resource={resource} />
        </Suspense>
        <Suspense fallback={(
            <div>Loading number...</div>
        )} >
            <Number resource={resource} />
        </Suspense>
    </div>
)

function App() {
  return (
    <div className="App">
        <h1>React suspense</h1>
        <WaitForBothToLoad />
        <hr/>
        <LoadSeparately />
    </div>
  );
}

export default App;
