import React from 'react';

import Slide from '../components/Slide.jsx';
import LeftArrow from '../components/LeftArrow.jsx';
import RightArrow from '../components/RightArrow.jsx';

import s from '../../WhyChooseUs.module.css';

import iphoneImg from '../../../../img/carousel/iphone.jpg';
import ipadImg from '../../../../img/carousel/ipad.jpg';
import macbookImg from '../../../../img/carousel/imac.jpg';

class Slider extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            images: [
                iphoneImg,
                ipadImg,
                macbookImg,
                ipadImg,
                macbookImg,
                macbookImg
            ],
            currentIndex: 0,
            translateValue: 0
        }
    }

    goToPrevSlide = () => {
        if(this.state.currentIndex === 0) 
            return;
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
    }

    goToNextSlide = () => {
        if(this.state.currentIndex === this.state.images.length+4) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }))    
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    render(){
        return ( 
            <div className="slider">
                <div className="sliderWrapper"
                style={{
                    transform: `translateX(${this.state.translateValue}px)`,
                    transition: 'transform ease-out 0.45s'
                  }}>
                  {/* <div id="imgContainer"> */}
                  {
                        this.state.images.map((image, i) => (
                            <Slide 
                            h2={this.props.h2}
                            p2={this.props.p2}
                             key={i} 
                             image={image} />
                        ))
                    }
                  {/* </div> */}
                    
                </div>
               
                <LeftArrow
                goToPrevSlide={this.goToPrevSlide}
                />

                <RightArrow
                goToNextSlide={this.goToNextSlide}
                />
            </div>                  
        )
        }
    }


export default Slider;