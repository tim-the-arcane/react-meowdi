import * as React from 'react';
import './style.css';
import * as Tone from 'tone';

const meow1Url = 'https://wavlist.com/wav/cat-meow8.wav';
const meow2Url = 'https://wavlist.com/wav/cat-meow5.wav';

const player1 = new Tone.Player(meow1Url);
const player2 = new Tone.Player(meow2Url);

export default function App() {
  const play = () => {
    Tone.loaded().then(() => {
      player1.start();
    });
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <button onClick={play}>Play</button>
    </div>
  );
}
