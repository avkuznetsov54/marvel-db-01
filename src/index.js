// import React from 'react';
// import ReactDOM from 'react-dom';
//
//
// ReactDOM.render(<div>Hello World</div>,
//   document.getElementById('root')
// );


class MarvelService {

  _apiKey = '2b160ff00ade6892a67efc3ae016906c';
  _ts = '1';
  _hash = '648af0b16539b34c875ebd06950e0b4a';
  _paramAuth = `?apikey=${this._apiKey}&ts=${this._ts}&hash=${this._hash}&limit=100`;

  _ipiBase = 'http://gateway.marvel.com/v1/public';

  async getResource(url) {
    const res = await fetch(`${this._ipiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllCharacters() {
    const res = await this.getResource(`/characters` + this._paramAuth);
    return res.data.results;
  }

  async getCharacter(id) {
    const res = await this.getResource(`/characters/${id}` + this._paramAuth);
    return res.data.results[0];
  }

  async getAllComics() {
    const res = await this.getResource(`/comics` + this._paramAuth);
    return res.data.results;
  }

  async getComics(id) {
    const res = await this.getResource(`/comics/${id}` + this._paramAuth);
    return res.data.results[0];
  }

  async getAllCreators() {
    const res = await this.getResource(`/creators` + this._paramAuth);
    return res.data.results;
  }

  async getCreator(id) {
    const res = await this.getResource(`/creators/${id}` + this._paramAuth);
    return res.data.results[0];
  }
}

const marvel = new MarvelService();

// marvel.getAllCharacters().then((char) => {
//   char.forEach(c => {
//     console.log(c.name);
//   });
// });

marvel.getCharacter(1010354).then((char) => {
    console.log(char.name);
});
