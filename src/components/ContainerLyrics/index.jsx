import React, { useReducer } from 'react';
import FormLyrics from '../FormLyrics';
import ApiService from '../../utils/ApiService';
import Loader from '../Loader';
import { SectionLyrics, PreLyrics } from './styles';

const initialState = {
  lyrics: '',
  hiddenLoader: true,
  music: '',
  artist: '',
}

const ACTIONS = {
  TOGGLE_HIDDEN_LOADER: 'toggle-hidden-loader',
  SET_MUSIC: 'set-music',
  SET_MESSAGE: 'set-message',
}

function reducer(state, action) {
  switch(action.type){
    case ACTIONS.TOGGLE_HIDDEN_LOADER:
      return { ...state, hiddenLoader: !state.hiddenLoader };
    case ACTIONS.SET_MUSIC:
      return { 
        ...state, 
        artist: action.payload.artist, 
        music: action.payload.music,
        lyrics: action.payload.lyrics
      };
    case ACTIONS.SET_MESSAGE:
      return { 
        ...state,
        music: '', 
        artist: '', 
        lyrics: action.payload.message 
      };
    default:
      return {...state};
  }
}

function ContainerLyrics() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function showLyrics(artist, music) {
    dispatch({ type: ACTIONS.TOGGLE_HIDDEN_LOADER });

    ApiService.getLyrics(artist, music)
      .then(
        (response) => {
          dispatch({ type: ACTIONS.TOGGLE_HIDDEN_LOADER });
          if(response.lyrics !== ''){
            dispatch({ 
              type: ACTIONS.SET_MUSIC,
              payload: {
                artist: artist.toUpperCase(),
                music: music.toUpperCase(),
                lyrics: response.lyrics,
              }
            });
          } else {
            dispatch({
              type: ACTIONS.SET_MESSAGE,
              payload: {
                message: 'Desculpe, não encontramos a música.',
              }
            });
          }
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      )
  }

  return(
  <>
    <FormLyrics onSubmit={showLyrics}/>
    <Loader hidden={state.hiddenLoader} />
    <SectionLyrics>
      <h2>{state.music}</h2>
      <h4>{state.artist}</h4>
      <PreLyrics>{state.lyrics}</PreLyrics> 
    </SectionLyrics>
  </>
  )
}

export default ContainerLyrics;