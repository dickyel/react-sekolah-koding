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

// belajar state react js
class Timer extends Component {
  // ini merupakan fungsi constructor
  constructor(props) {
    // ini adalah nilai - nilai yang akan dimasukkan
    super(props);
    this.state = {
      // kondisi awal dari state 0
      waktu: props.start,
    };
  }

  // lifecycle
  ComponentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000);
  }

  ComponentWillUnMount() {
    clearInterval(this.addInterval);
  }

  increase() {
    // update state time diatas setiap detik
    this.setState((state, props) => ({
      // melakukan konvert ke dalam integer
      waktu: parseInt(state.waktu) + 1,
    }));
  }

  render() {
    return <div>{this.state.waktu} detik</div>;
  }
}

// buat event menggunakan fungsi
function Clicker() {
  function handleClick(e) {
    alert('berhasil mengklik!');
    e.preventDefault();
  }

  return (
    <a href="" onClick={handleClick}>
      Klik
    </a>
  );
}

class Toggle extends Component {
  constructor(props) {
    // ini adalah nilai - nilai yang akan dimasukkan
    super(props);
    this.state = {
      // kondisi awal dari state 0
      toggleStatus: true,
    };

    this.Click = this.Click.bind(this);
  }

  Click() {
    this.setState((state) => ({
      toggleStatus: !state.toggleStatus,
    }));
  }

  render() {
    return (
      <button onClick={this.Click}>
        <p>Kondisi Sekarang Masih {this.state.toggleStatus ? 'ON' : 'FALSE'}</p><br/>
        <p>Lampu {this.state.toggleStatus ? 'Aktif' : 'mati'}</p>
      </button>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        {/* fungsi untuk memanggil komponen */}
        <Greeting />
        {/* fungsi untuk memanggil komponen dan properties */}
        {/* <Subtitle subs="start editing from to the zero;" kalimat="semangat" />
        <Subtitle
          subs="jangankan sendiri aku pun bisa melakukannya;"
          kalimat="jangan menyerah"
        />
        <Subtitle
          subs="tetap semangat dan jangan menyerah;"
          kalimat="tetap bersyukur"
        /> */}

        {/* DIPANGGIL DARI CLASS STATE IN THE TOP */}
        <Timer start="0" /><br/>
        <Clicker /><br/><br/>
        <Toggle />
      </div>
    );
  }
}

export default App;
