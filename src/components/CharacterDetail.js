import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => setCharacter(response.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!character) return <p>Carregando...</p>;

    return (
        <div className="character-details-card">
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p>Status: {character.status}</p>
            <p>Espécie: {character.species}</p>
            <p>Gênero: {character.gender}</p>
            <p>Origem: {character.origin.name}</p>
            <p>Localização: {character.location.name}</p>
        </div>
    );
};

export default CharacterDetails;
