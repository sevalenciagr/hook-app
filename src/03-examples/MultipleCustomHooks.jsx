import { useCounter, useFetch } from '../hooks';
import { Character, LoadingCharacter } from './';


export const MultipleCustomHooks = () => {
    
    const { counter, increment } = useCounter( 1 );
    
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`)

    console.log({ data, isLoading, hasError });


    return (
        <>
            <h1>Personajes de Rick and Morty</h1>
            <hr />

            {
                isLoading
                    ? <LoadingCharacter />
                    : <Character name={ data.name } species={ data.species }/>
            }
            
            <button 
                className='btn btn-primary' 
                disabled={ isLoading }
                onClick={ () => increment() } >
                Next Character
            </button>
        </>
    )
}
