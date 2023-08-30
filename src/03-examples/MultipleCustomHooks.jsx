import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {
    const { data, isLoading, hasError } = useFetch('https://rickandmortyapi.com/api/character/2')

    console.log({ data, isLoading, hasError });

    

    return (
        <>
            <h1>Personajes de Rick and Morty</h1>
            <hr />

            {
                isLoading
                    ? (
                        <div className="alert alert-info text-center">
                            Cargando...
                        </div>
                    ) : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-1">{ data.name }</p>
                            <footer className="blockquote-footer">{ data.species }</footer>
                        </blockquote>
                    )
            }
        </>
    )
}
