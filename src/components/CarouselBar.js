import React from 'react';
import { connect } from 'dva';
import { Carousel, WingBlank, WhiteSpace } from 'antd-mobile';
import styles from './CarouselBar.css';

const CarouselBar  = () => {
  this.state = {
    data: ['0', '1', '2'],
    imgHeight: 176
  };
  return (
    <div>
      <Carousel
        autoplay={true}
        infinite={true}
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log('slide to', index)} >
        {this.state.data.map(val => (
          <a key={val}
            //href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
              <img src={require(`../assets/carousel-${val}.jpg`)}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                //this.setState({ imgHeight: 'auto' });
              }} />
          </a>
        ))}
      </Carousel>
      <WhiteSpace />
    </div>
  );
};

CarouselBar.propTypes = {
};

export default CarouselBar;
