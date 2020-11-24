/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import FormLyrics from '../FormLyrics';
import ApiService from '../../utils/ApiService';
import Loader from '../Loader';
import { PreLyrics } from './styles';

function ContainerLyrics() {
  const [lyrics, setLyrics] = useState('');
  const [hiddenLoader, setHiddenLoader] = useState(true);

  function showLyrics(artist, music) {
    setLyrics('');
    setHiddenLoader(false);
    ApiService.getLyrics(artist, music)
      .then(
        (response) => {
          setHiddenLoader(true);
          if(response.lyrics !== ''){
            setLyrics(response.lyrics);
          } else {
            setLyrics('Desculpe, não encontramos a música.');
          }
        }
      )
      .catch(
        (error) => {
          setHiddenLoader(true);
          setLyrics('Desculpe, não encontramos a música.');
          console.log(error);
        }
      )
  }

  return(
  <>
    <FormLyrics onSubmit={showLyrics}></FormLyrics>
    <Loader hidden={hiddenLoader} />
    <PreLyrics>{lyrics}</PreLyrics>
  </>
  )
}

export default ContainerLyrics;