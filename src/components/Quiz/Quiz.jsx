import React from "react";
import { quizData } from "./QuizData";
import './quiz.css';

class Quiz extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false
  };


  loadQuizData = () => {
    // console.log(quizData[0].question)

    
    this.setState(() => {
      return {
        questions: quizData[this.state.currentQuestion].question,
        answer: quizData[this.state.currentQuestion].answer,
        options: quizData[this.state.currentQuestion].options
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    // console.log('test')
    this.setState({disableOptions: false});
    const { myAnswer, answer, score } = this.state;

    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData[this.state.currentQuestion].question,
          options: quizData[this.state.currentQuestion].options,
          answer: quizData[this.state.currentQuestion].answer
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {

    this.setState({ myAnswer: answer, disabled: false, disableOptions: true });
  };
  finishHandler = () => {
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });  
    }
    if (this.state.currentQuestion === quizData.length - 1) {
      this.setState({
        isEnd: true
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;
    if (isEnd) {
       
      return (
        <div className="Quiz result">
          <h2>Final score is {this.state.score}/{quizData.length}! </h2>
          <p>
            The correct answer's for the questions was
            <ul>
              {quizData.map((item, index) => (
                <li className={this.state.class} key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
          </p>
        </div>
      );
    } else {
      return (
        <div className="Quiz">
          <h1>{this.state.questions} </h1>
          <span>{`Questions ${currentQuestion+1}/${quizData.length}`}</span>
          <ul>
          {options.map(option => (
            <li
            disabled={this.state.disableOptions}
              key={option.id}
              className={`ui floating message options ${this.state.class}
         ${myAnswer === option ? "selected" : null}
         `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </li>
          ))}
          </ul>
          {currentQuestion < quizData.length - 1 && (
            <button
              className="ui inverted button"
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Next
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === quizData.length - 1 && (
            <button className="ui inverted button" onClick={this.finishHandler}>
              Finish
            </button>
          )}
        </div>
      );
    }
  }
}

export default Quiz;
