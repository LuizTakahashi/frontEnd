import React from 'react';
import CharacterDetails from '../components/CharacterDetail';
import './CharacterDetailsPage.css';

const CharacterDetailsPage = () => (
    <div className="character-details-page-container">
        <h1 className="character-details-title">Detalhes do Personagem</h1>
        <CharacterDetails />
    </div>
);

export default CharacterDetailsPage;
