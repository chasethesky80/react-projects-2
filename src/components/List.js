import { useEffect, useState } from "react";
import Character from "./Character";

export default function List() {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('https://rickandmortyapi.com/api/character');
            const { results } = await data.json()
            setCharacters(results)
            setLoading(false)
        }
        fetchData().then(() => {})
    })
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div className="row">
            {characters?.map((character) => <Character key={character?.key} origin={character?.origin} image={character?.image} name={character?.name}/>)}
        </div>
    )
}