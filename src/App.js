import React from 'react';
import './App.css';

import Header from './components/header';
import GuessSection from './components/guess-section';
import InfoSection from './components/info-section';
import StatusSection from './components/status-section';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />

      </div>
      )
  }

}


