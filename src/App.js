import React, { Component } from 'react';
import './style.css';

// fungsi untuk membuat komponen
function Greeting() {
  return <h1> Halo Kamu </h1>;
}

// fungsi untuk komponen dan juga didalamnya terdapat properties
function Subtitle(props) {
  return (
    <p>
      {props.subs} - <Lanjutan kalimat={props.kalimat} />
    </p>
  );
}

// fungsi untuk komponen didalam kompenen beserta properties
function Lanjutan(props) {
  return <span>Lanjutannya {props.kalimat} </span>;
}

class App extends Component {
  render() {
    return (
      <div>
        {/* fungsi untuk memanggil komponen */}
        <Greeting />
        {/* fungsi untuk memanggil komponen dan properties */}
        <Subtitle subs="start editing from to the zero;" kalimat="semangat" />
        <Subtitle
          subs="jangankan sendiri aku pun bisa melakukannya;"
          kalimat="jangan menyerah"
        />
        <Subtitle
          subs="tetap semangat dan jangan menyerah;"
          kalimat="tetap bersyukur"
        />
      </div>
    );
  }
}

export default App;
