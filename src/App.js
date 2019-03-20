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
      lang: 'english',
      engContent: {
        menu: [
          {id: 1, content: 'Main', identify: '#Header_header__2c9_s'},
          {id: 2, content: 'Projects', identify: '#Projects_projects__2rWae'},
          {id: 3, content: 'Clients', identify: '#Clients_clients__ww87K'},
          {id: 4, content: 'About us', identify: '#AboutUs_introduction__cK_9U'},
          {id: 5, content: 'Why choose us', identify: '#WhyChooseUs_introduction__g_Bdl'},
          {id: 6, content: 'Get in touch', identify: '#GetInTouch_introduction__3EW95'}
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
          menu: ["All", "Branding", "Weg design", "Mobile UI", "Illustrations"],
          showBtn: "Show me more"
        },
        clients: {
          h1: "Our clients",
          bgText: "We're here to help."
        },
        aboutus: {
          h1: "About us",
          p:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          header2: "We are hiring",
          person1: "John",
          p1: "CEO/founder",
          person2: "Helsey",
          p2: "Backend dev",
          person3: "Kelsey",
          p3: "Frontend dev",
          apply: "Apply"
        },
        whychooseus: {
          h1: "Why choose us",
          p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          bgText: "Get a quote now.",
          bgimage: './img/getintouch_bg.jpg'
        },
        slider: {
          p2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempsdfff",
          h2: "Hed consectetru"
        },
        getintouch: {
          h1: "Get in touch",
          p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          locationHeader: "Our location",
          address: "174 Mimosa ST. NW Casablanca, MA 20370 (212) 123 456 7 Samir Timezguida",
          placeholderText: "Name",
          placeholderEmail: "Email",
          placeholderMessage: "Message",
          send: "Send"
        },
        footerContent: {
          footerHeader: "Samir Tiezguida.",
          spec: "UI/UX & Web Designer",
          year: "All Rights Reserved."

        }

      },
      rusContent: {
        menu: [
          {id: 1, content: 'Главное', identify: '#Header_header__2c9_s'},
          {id: 2, content: 'Проекты', identify: '#Projects_projects__2rWae'},
          {id: 3, content: 'Клиенты', identify: '#Clients_clients__ww87K'},
          {id: 4, content: 'О нас', identify: '#AboutUs_introduction__cK_9U'},
          {id: 5, content: 'Почему мы', identify: '#WhyChooseUs_introduction__g_Bdl'},
          {id: 6, content: 'Связаться', identify: '#GetInTouch_introduction__3EW95'}
        ],
        header: {
          h1: "У нас есть таланты",
          p: "Значимость этих проблем настолько очевидна"
        },
        introduction: {
          h1: "Введение",
          p: "Имеется спорная точка зрения, гласящая примерно следующее: элементы политического процесса набирают популярность среди определенных слоев населения, а значит, должны быть.",
          bgText: "Креатив.",
          bgImage: "'./img/Introduction_bg.jpg'"
        },
        projects: {
          h1: "Наши работы",
          menu: ["Все", "Бренды", "Веб дизайн", "Мобильный UI", "Иллюстрации"],
          showBtn: "Показать все"
        },
        clients: {
          h1: "Наши клиенты",
          bgText: "Мы готовы вам помочь."
        },
        aboutus: {
          h1: "О нас",
          p:  "Имеется спорная точка зрения, гласящая примерно следующее: элементы политического процесса набирают популярность среди определенных слоев населения, а значит, должны быть.",
          header2: "Ваканция",
          person1: "Джон",
          p1: "CEO",
          person2: "Хэлси",
          p2: "Бэкенд дев",
          person3: "Келси",
          p3: "Фронтенд дев",
          apply: "Подать"
        },
        whychooseus: {
          h1: "Почему мы",
          p: "Имеется спорная точка зрения, гласящая примерно следующее: элементы политического процесса набирают популярность среди определенных слоев населения, а значит, должны быть.",
          bgText: "Получите цитату.",
          bgimage: './img/getintouch_bg.jpg'
        },
        slider: {
          p2: "Имеется спорная точка зрения, гласящая примерно следующее: элементы политического процесса",
          h2: "Лорем имсам"
        },
        getintouch: {
          h1: "Связаться с нами",
          p: "Имеется спорная точка зрения, гласящая примерно следующее: элементы политического процесса набирают популярность среди определенных слоев населения, а значит, должны быть.",
          locationHeader: "Наш адрес",
          address: "174 Миоза ул. Н.В. Касабланка, MA 20370 (212) 123 456 7 Самир Тиезгуида",
          placeholderText: "Имя",
          placeholderEmail: "Email",
          placeholderMessage: "Сообщение",
          send: "Отправить"
        },
        footerContent: {
          footerHeader: "Самир Тиезгуида.",
          spec: "UI/UX & Веб дизайнер",
          year: "Все права защищены."

        }
      }
    }
  }

  getLang = (selectedLang) => {
    let lang = selectedLang;
      this.setState({
        lang
      })
  }

  render() {
    const currentLang = null;
    if(this.state.lang === 'русский') {
      return (
        <div className="App">
          <Header 
          getLang={this.getLang}
          header={this.state.rusContent.header.h1}
          p={this.state.rusContent.header.p}
          menuItems={this.state.rusContent.menu} 
          />
          <Introduction 
          header={this.state.rusContent.introduction.h1}
          p={this.state.rusContent.introduction.p}
          bgText={this.state.rusContent.introduction.bgText}
          />
          <Background 
           bgText={this.state.rusContent.introduction.bgText}
           imgBg={introBg}
           />
          <Projects 
          header={this.state.rusContent.projects.h1}  
          menu={this.state.rusContent.projects.menu} 
          showBtn={this.state.rusContent.projects.showBtn}
          />
           <Background 
           bgText={this.state.rusContent.clients.bgText}
           imgBg={clientsBg}
           />
          <Clients header={this.state.rusContent.clients.h1}
          />
          <AboutUs 
          header={this.state.rusContent.aboutus.h1}
          p={this.state.rusContent.aboutus.p}
          header2={this.state.rusContent.aboutus.header2}
          person1={this.state.rusContent.aboutus.person1}
          p1={this.state.rusContent.aboutus.p1}
          person2={this.state.rusContent.aboutus.person2}
          p2={this.state.rusContent.aboutus.p2}
          person3={this.state.rusContent.aboutus.person3}
          p3={this.state.rusContent.aboutus.p3}
          apply={this.state.rusContent.aboutus.apply}
           />
           <Video />
           <WhyChooseUs 
            header={this.state.rusContent.whychooseus.h1}
            p={this.state.rusContent.whychooseus.p}
           />
           <Slider 
           p2={this.state.rusContent.slider.p2}
           h2={this.state.rusContent.slider.h2}  
           />      
           <Background      
           bgText={this.state.rusContent.whychooseus.bgText}
           imgBg={getintouch}
           /> 
           <GetInTouch
            header={this.state.rusContent.getintouch.h1}
            p={this.state.rusContent.getintouch.p}
            locationHeader={this.state.rusContent.getintouch.locationHeader}
            address={this.state.rusContent.getintouch.address}
            placeholderText={this.state.rusContent.getintouch.placeholderText}
            placeholderEmail={this.state.rusContent.getintouch.placeholderEmail}
            placeholderMessage={this.state.rusContent.getintouch.placeholderMessage}
            send={this.state.rusContent.getintouch.send}
            />
            <Footer 
            footerHeader={this.state.rusContent.footerContent.footerHeader}
            spec={this.state.rusContent.footerContent.spec}
            year={this.state.rusContent.footerContent.year}
            />
          </div>
          
      );
    } else {
      return (
        <div className="App">
          <Header 
          getLang={this.getLang}
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
          showBtn={this.state.engContent.projects.showBtn}
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
          header2={this.state.engContent.aboutus.header2}
          person1={this.state.engContent.aboutus.person1}
          p1={this.state.engContent.aboutus.p1}
          person2={this.state.engContent.aboutus.person2}
          p2={this.state.engContent.aboutus.p2}
          person3={this.state.engContent.aboutus.person3}
          p3={this.state.engContent.aboutus.p3}
          apply={this.state.engContent.aboutus.apply}
           />
           <Video />
           <WhyChooseUs 
            header={this.state.engContent.whychooseus.h1}
            p={this.state.engContent.whychooseus.p}
           
           />
           <Slider 
            p2={this.state.engContent.slider.p2}
            h2={this.state.engContent.slider.h2}
           />      
           <Background 
           bgText={this.state.engContent.whychooseus.bgText}
           imgBg={getintouch}
           /> 
           <GetInTouch
            header={this.state.engContent.getintouch.h1}
            p={this.state.engContent.getintouch.p}
            locationHeader={this.state.engContent.getintouch.locationHeader}
            address={this.state.engContent.getintouch.address}
            placeholderText={this.state.engContent.getintouch.placeholderText}
            placeholderEmail={this.state.engContent.getintouch.placeholderEmail}
            placeholderMessage={this.state.engContent.getintouch.placeholderMessage}
            send={this.state.engContent.getintouch.send}
            />
            <Footer 
            footerHeader={this.state.engContent.footerContent.footerHeader}
            spec={this.state.engContent.footerContent.spec}
            year={this.state.engContent.footerContent.year}
            />
          </div>
          
      ); 
    }
    // return (
    //   <div className="App">
    //     <Header 
    //     getLang={this.getLang}
    //     header={this.state.engContent.header.h1}
    //     p={this.state.engContent.header.p}
    //     menuItems={this.state.engContent.menu} 
    //     />
    //     <Introduction 
    //     header={this.state.engContent.introduction.h1}
    //     p={this.state.engContent.introduction.p}
    //     bgText={this.state.engContent.introduction.bgText}
    //     />
    //     <Background 
    //      bgText={this.state.engContent.introduction.bgText}
    //      imgBg={introBg}
    //      />
    //     <Projects 
    //     header={this.state.engContent.projects.h1}  
    //     menu={this.state.engContent.projects.menu} 
    //     />
    //      <Background 
    //      bgText={this.state.engContent.clients.bgText}
    //      imgBg={clientsBg}
    //      />
    //     <Clients header={this.state.engContent.clients.h1}
    //     />
    //     <AboutUs 
    //     header={this.state.engContent.aboutus.h1}
    //     p={this.state.engContent.aboutus.p}
    //      />
    //      <Video />
    //      <WhyChooseUs 
    //       header={this.state.engContent.whychooseus.h1}
    //       p={this.state.engContent.whychooseus.p}
    //      />
    //      <Slider />      
    //      <Background 
    //      bgText={this.state.engContent.whychooseus.bgText}
    //      imgBg={getintouch}
    //      /> 
    //      <GetInTouch
    //       header={this.state.engContent.getintouch.h1}
    //       p={this.state.engContent.getintouch.p}
    //       locationHeader={this.state.engContent.getintouch.locationHeader}
    //       address={this.state.engContent.getintouch.address}
    //       />
    //       <Footer 
    //       footerHeader={this.state.engContent.footerContent.footerHeader}
    //       spec={this.state.engContent.footerContent.spec}
    //       year={this.state.engContent.footerContent.year}
    //       />
    //     </div>
        
    // );
  }
}

export default App;
