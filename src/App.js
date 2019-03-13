import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Background from './components/Background.jsx';
import Introduction from './components/Introduction.jsx';
import Projects from './components/projects/Projects.jsx';
import Clients from './components/Clients.jsx';
import AboutUs from './components/AboutUs.jsx';
import Video from './components/Video.jsx';
import WhyChooseUs from './components/whyChooseUsSection/WhyChooseUs.jsx';
import Slider from './components/whyChooseUsSection/slider/container/Slider.jsx';
import PhotoGallery from './components/projects/PhotoGallery.jsx';
import GetInTouch from './components/GetInTouch.jsx';
import Footer from './components/Footer.jsx';

import './App.css';

import introBg from './img/Introduction_bg.jpg';
import clientsBg from './img/clients_bg.jpg';
import getintouch from './img/getintouch_bg.jpg';


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
        },
        clients: {
          h1: "Our clients",
          bgText: "We're here to help."
        },
        aboutus: {
          h1: "About us",
          p:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        whychooseus: {
          h1: "Why choose us",
          p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          bgText: "Get a quote now.",
          bgimage: './img/getintouch_bg.jpg'
        },
        getintouch: {
          h1: "Get in touch",
          p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          locationHeader: "Our location",
          address: "174 Mimosa ST. NW Casablanca, MA 20370 (212) 123 456 7 Samir Timezguida"
        },
        footerContent: {
          footerHeader: "Samir Tiezguida.",
          spec: "UI/UX & Web Designer",
          year: "All Rights Reserved."

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
        menuItems={this.state.engContent.menu} 
        />
        <Introduction 
        header={this.state.engContent.introduction.h1}
        p={this.state.engContent.introduction.p}
        bgText={this.state.engContent.introduction.bgText}
        />
        <Background 
         bgText={this.state.engContent.introduction.bgText}
         imgBg={introBg}
         />
        <Projects 
        header={this.state.engContent.projects.h1}  
        menu={this.state.engContent.projects.menu} 
        />
         <Background 
         bgText={this.state.engContent.clients.bgText}
         imgBg={clientsBg}
         />
        <Clients header={this.state.engContent.clients.h1}
        />
        <AboutUs 
        header={this.state.engContent.aboutus.h1}
        p={this.state.engContent.aboutus.p}
         />
         <Video />
         <WhyChooseUs 
          header={this.state.engContent.whychooseus.h1}
          p={this.state.engContent.whychooseus.p}
         />
         <Slider />      
         <Background 
         bgText={this.state.engContent.whychooseus.bgText}
         imgBg={getintouch}
         /> 
         <GetInTouch
          header={this.state.engContent.getintouch.h1}
          p={this.state.engContent.getintouch.p}
          locationHeader={this.state.engContent.getintouch.locationHeader}
          address={this.state.engContent.getintouch.address}
          />
          <Footer 
          footerHeader={this.state.engContent.footerContent.footerHeader}
          spec={this.state.engContent.footerContent.spec}
          year={this.state.engContent.footerContent.year}
          />
        </div>
        
    );
  }
}

export default App;
