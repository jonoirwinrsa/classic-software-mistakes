import _ from "lodash";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default class Questions extends React.Component {
  state = {
    slideIndex: 0,
    answers: []
  };

  answerQuestion(answer, index) {
    const answers = this.state.answers;
    if (answer === "yes") {
      answers[index] = "yes";
      this.setState({ answers });
    } else if (answer === "no") {
      answers[index] = "no";
      this.setState({ answers });
    }
    this.setState({ slideIndex: this.state.slideIndex + 1 });
    this.slider.slickGoTo(this.state.slideIndex + 1);
  }

  reset() {
    this.setState({ slideIndex: 0, answers: [] });
    this.slider.slickGoTo(0);
  }

  prev() {
    this.setState({ slideIndex: this.state.slideIndex - 1 });
    this.slider.slickGoTo(this.state.slideIndex - 1);
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: true,
      swipe: false
    };
    const questions = this.props.pageContext.site.data.questions.questions;
    const { slideIndex, answers } = this.state;

    return (
      <section
        id={_.get(this.props, "section.section_id")}
        className="block hero-block outer"
      >
        <div className="inner-small">
          <div className="block-content">
            <div className="block-copy">
              <div>
                {slideIndex}/{questions.length + 1}
              </div>
              <Slider {...settings} ref={slider => (this.slider = slider)}>
                <div>
                  <h3>There are {questions.length} in this quiz.</h3>
                  <h4>
                    It should take about 2 minutes to complete and you will be
                    able to see your results right after completing it.
                  </h4>
                  <button onClick={() => this.answerQuestion("start", 0)}>
                    Start
                  </button>
                </div>
                {questions.map((question, index) => (
                  <div key={index}>
                    <h3>{_.get(question, "title")}</h3>
                    <p>{_.get(question, "description")}</p>

                    <div>
                      <button
                        className={answers[index] === "yes" && "filled"}
                        onClick={() => this.answerQuestion("yes", index)}
                        style={{ marginRight: "10px" }}
                      >
                        Yes
                      </button>
                      <button
                        className={answers[index] === "no" && "filled"}
                        onClick={() => this.answerQuestion("no", index)}
                      >
                        No
                      </button>
                    </div>
                  </div>
                ))}
                <div>
                  <h3>Results</h3>
                  <h3>
                    Yes:{" "}
                    {answers.length &&
                      answers.filter(answer => answer === "yes").length}
                  </h3>
                  <h3>
                    No:{" "}
                    {answers.length &&
                      answers.filter(answer => answer === "no").length}
                  </h3>
                  <button onClick={() => this.reset()}>Reset</button>
                </div>
              </Slider>

              {slideIndex > 0 && (
                <div style={{ marginTop: "10px" }}>
                  <a onClick={() => this.prev()}>Prev</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
