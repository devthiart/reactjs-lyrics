import React, { useState } from 'react';
import { Form, Input, Button } from './styles';

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
    setArtist('');
    setMusic('');
  }

  return(
    <Form onSubmit={_submitForm}>
      <label>Artista</label>
      <Input 
        type="text"
        name="Artista"
        value={artist}
        onChange={_handleArtist}
        required
      />
      <label>Música</label>
      <Input 
        type="text"
        name="Musica"
        value={music}
        onChange={_handleMusic}
        required
      />
      <Button type="submit">Pesquisar</Button>
    </Form>
  );
}

export default FormLyrics;