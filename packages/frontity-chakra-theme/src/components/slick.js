import React , {Component } from "react";
import { connect } from "frontity";
import Slider from "react-slick";
import axios from 'axios';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: true,
  slidesToScroll: 1
};


class Slick extends Component {
  constructor(props) {
      super(props)
      this.props = props;
      // console.log("  this.props  this.props", )

   
  }
   render() {
    var imgList
       axios.get(this.props.imgList)
      .then(res => {
         this.imgL=res.data
        // this.props.img=res
      //  return res.data
      })
    
    
    // console.log("slick img",this.props.img)

  
    if(this.imgL){
  console.log("this.props.imgthis.props.img",this.imgL)

      return (
     
        <Slider {...settings}>
  
                {this.imgL.map((slide, i) => {
                      return <img src={slide.guid.rendered} />
  
                })}
        </Slider>
        )
      
    }else{
      return (
        <>
        </>
      )
    }

   

  }
}
    
// const Slick = (data) => {
//   console.log("statestatestatestate",data)

// };

// export default connect(Slick);

export default Slick