import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
function FormLyrics({ onSubmit }) {
  const [artist, setArtist] = useState('');
  const [music, setMusic] = useState('');

  function _handleArtist(event) {
    setArtist(event.target.value);
  }

  function _handleMusic(event) {
    setMusic(event.target.value);
  }

  function _submitForm(event) {
    event.preventDefault();

    onSubmit(artist, music);
  }

  return(
    <form onSubmit={_submitForm}>
      <label>Artista</label>
      <input 
        type="text"
        name="Artista"
        value={artist}
        onChange={_handleArtist}
        required
      />
      <label>Música</label>
      <input 
        type="text"
        name="Musica"
        value={music}
        onChange={_handleMusic}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormLyrics;