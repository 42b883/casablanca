import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Background from './components/Background.jsx';
import Introduction from './components/Introduction.jsx';
import Projects from './components/Projects.jsx';
import Clients from './components/Clients.jsx';
import './App.css';
{/* <image src="./img/Introduction_bg.jpg"></image> */}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      engContent: {
        menu: [
          {id: 1, content: 'Header'},
          {id: 2, content: 'Projects'},
          {id: 3, content: 'Clients'},
          {id: 4, content: 'About us'},
          {id: 5, content: 'Why choose us'},
          {id: 6, content: 'Get in touch'}
        ],
        header: {
          h1: "we've got the talent",
          p: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        },
        introduction: {
          h1: "Introduction",
          p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          bgText: "Pure Creativity.",
          bgImage: "'./img/Introduction_bg.jpg'"
        },
        projects: {
          h1: "Some of our works",
          menu: ["All", "Branding", "Weg design", "Mobile UI", "Illustrations"]
        }
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Header 
        header={this.state.engContent.header.h1}
        p={this.state.engContent.header.p}
        menuItems={this.state.engContent.menu} />
        <Introduction 
        header={this.state.engContent.introduction.h1}
        p={this.state.engContent.introduction.p}
        bgText={this.state.engContent.introduction.bgText}
        />
        <Background 
         bgText={this.state.engContent.introduction.bgText}
         />
        <Projects 
        header={this.state.engContent.projects.h1}
        menu={this.state.engContent.projects.menu} />
         <Background 
         bgText={this.state.engContent.introduction.bgText}/>
        <Clients />
        </div>
        
    );
  }
}

export default App;
