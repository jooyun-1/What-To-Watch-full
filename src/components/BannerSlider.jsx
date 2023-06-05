import React from 'react';
import styled from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner1 from '../images/Banner1.png';
import Banner2 from '../images/Banner2.png';

export default function BannerSlider() {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      };
    return (
        
        <div>
            <Container>
            <Slider {...settings}>   
            <>
            <BannerImg src ={Banner1} alt ="banner1"/>
            </>
            <>
            <BannerImg src = {Banner2} alt ="banner2"/>
            </>
            </Slider>
            </Container>
        </div>
    );
}

const Container = styled.div`
	width: 650px;

  .slick-dots {
    .slick-active {
      button::before {
        color: #c1c1c1;
      }
    }
    button::before {
      color: #e9e9e9;
    }
  }
`;
const BannerImg = styled.img`
  width:100%;

`;