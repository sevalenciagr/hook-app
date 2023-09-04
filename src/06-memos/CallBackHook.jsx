import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";



export const CallBackHook = () => {

    const [counter, setCounter] = useState( 0 );

    const increment = useCallback(
        () => {
            setCounter( (value) => value + 1  );
        },
        [],
    )

  return (
    <>
        <h1>useCallback Hook: { counter } </h1>
        <hr />

        <ShowIncrement increment={ increment } />
    </>
  )
}
