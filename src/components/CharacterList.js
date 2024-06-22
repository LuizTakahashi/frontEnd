import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Pages/CharacterListPage.css';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => setCharacters(response.data.results))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="character-list">
            {characters.map(character => (
                <div key={character.id} className="character-card">
                    <Link to={`/characters/${character.id}`}>
                        <img src={character.image} alt={character.name} />
                        <p>{character.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default CharacterList;
