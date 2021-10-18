import React, {Suspense} from "react";
import { Person, createResource } from "./Person";

const resource = createResource();

function App() {
  return (
    <div className="App">
        <h1>React suspense</h1>
        <Suspense fallback={(
            <div>Loading person...</div>
        )} >
            <Person resource={resource} />
        </Suspense>
    </div>
  );
}

export default App;
