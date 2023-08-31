

export const Character = (data) => {
    return (
        <blockquote className="blockquote text-end">
            <p className="mb-1">{data.name}</p>
            <footer className="blockquote-footer">{data.species}</footer>
        </blockquote>
    )
}
