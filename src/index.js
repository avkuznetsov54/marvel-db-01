// import React from 'react';
// import ReactDOM from 'react-dom';
//
//
// ReactDOM.render(<div>Hello World</div>,
//   document.getElementById('root')
// );

// fetch('http://gateway.marvel.com/v1/public/characters?apikey=2b160ff00ade6892a67efc3ae016906c&ts=1&hash=648af0b16539b34c875ebd06950e0b4a&offset=2')
//   .then((res) => {
//     return res.json();
//   })
//   .then((body) => {
//     console.log(body);
//   });

const  getResource = async (url) => {
  const res = await fetch(url);
  const body = await res.json();
  return body;
};

getResource('http://gateway.marvel.com/v1/public/characters/1010354?apikey=2b160ff00ade6892a67efc3ae016906c&ts=1&hash=648af0b16539b34c875ebd06950e0b4a')
  .then((body) => {
    console.log(body);
  });

