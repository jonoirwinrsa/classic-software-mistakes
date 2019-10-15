import _ from 'lodash'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export default class Questions extends React.Component {
  state = {
    slideIndex: 0,
    yes: 0,
    no: 0
  }

  answerQuestion (answer) {
    if (answer === 'yes') {
      this.setState({yes: this.state.yes + 1})
    } else {
      this.setState({no: this.state.no + 1})
    }
    this.setState({slideIndex: this.state.slideIndex + 1})
    this.slider.slickGoTo(this.state.slideIndex + 1)
  }

  render () {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: true,
      swipe: false
    }

    return (
      <section id={_.get(this.props, 'section.section_id')} className='block hero-block outer'>
        <div className='inner-small'>
          <div className='block-content'>
            <div className='block-copy'>
              <Slider {...settings} ref={slider => (this.slider = slider)}>
                {_.map(_.get(this.props, 'pageContext.site.data.questions.questions'), (question, link_idx) => (
                  <div key={link_idx}>
                    <h3>{_.get(question, 'title')}</h3>
                    <h4>{_.get(question, 'description')}</h4>

                    <div>
                      <button onClick={() => this.answerQuestion('yes')}>Yes</button>
                      <button onClick={() => this.answerQuestion('no')}>No</button>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
