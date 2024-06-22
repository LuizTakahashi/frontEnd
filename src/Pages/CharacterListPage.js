import React from 'react';
import CharacterList from '../components/CharacterList';
import './CharacterListPage.css';

const CharacterListPage = () => (
    <div className="character-list-page-container">
        <h1 className="character-list-title">Lista de Personagens</h1>
        <div className="character-list-wrapper">
            <CharacterList />
        </div>
    </div>
);

export default CharacterListPage;
