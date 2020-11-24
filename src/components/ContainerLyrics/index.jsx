/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import FormLyrics from '../FormLyrics';
import ApiService from '../../utils/ApiService';
import Loader from '../Loader';
import { SectionLyrics, PreLyrics } from './styles';

function ContainerLyrics() {
  const [lyrics, setLyrics] = useState('');
  const [hiddenLoader, setHiddenLoader] = useState(true);
  const [Music, setMusic] = useState('');
  const [Artist, setArtist] = useState('');

  function showLyrics(artist, music) {
    setMusic('');
    setArtist('');
    setLyrics('');
    setHiddenLoader(false);
    ApiService.getLyrics(artist, music)
      .then(
        (response) => {
          setHiddenLoader(true);
          if(response.lyrics !== ''){
            setMusic(music);
            setArtist(artist);
            setLyrics(response.lyrics);
          } else {
            setMusic('');
            setArtist('');
            setLyrics('Desculpe, não encontramos a música.');
          }
        }
      )
      .catch(
        (error) => {
          setHiddenLoader(true);
          setMusic('');
          setArtist('');
          setLyrics('Desculpe, não encontramos a música.');
          console.log(error);
        }
      )
  }

  return(
  <>
    <FormLyrics onSubmit={showLyrics}></FormLyrics>
    <Loader hidden={hiddenLoader} />
    <SectionLyrics>
      <h2>{Music}</h2>
      <h4>{Artist}</h4>
      <PreLyrics>{lyrics}</PreLyrics>
    </SectionLyrics>
  </>
  )
}

export default ContainerLyrics;