/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import FormLyrics from '../FormLyrics';
import ApiService from '../../utils/ApiService';

function ContainerLyrics() {
  const [lyrics, setLyrics] = useState('');

  function showLyrics(artist, music) {
    ApiService.getLyrics(artist, music)
      .then(
        (response) => {
          if(response.lyrics !== ''){
            setLyrics(response.lyrics);
          } else {
            setLyrics('Desculpe, não encontramos a música.');
          }
        }
      )
      .catch(
        (error) => {
          setLyrics('Desculpe, não encontramos a música.');
          console.log(error);
        }
      )
  }

  return(
  <>
    <FormLyrics onSubmit={showLyrics}></FormLyrics>
    <p>{lyrics}</p>
  </>
  )
}

export default ContainerLyrics;