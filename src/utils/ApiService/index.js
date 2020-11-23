const URL = 'https://api.lyrics.ovh/v1';

const ApiService = {
  getLyrics: (artist, title) => {
    const urlWithMusic = `${URL}/${artist}/${title}`;
    console.log(urlWithMusic);
    return fetch(urlWithMusic)
      .then(response => response.json())
      .catch(error => error);
  }
}

export default ApiService;