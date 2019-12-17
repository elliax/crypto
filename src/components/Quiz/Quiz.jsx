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
   
    const { myAnswer, answer, score } = this.state;

    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: score + 1
      });

      this.setState({myAnswer: null});
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
          <h2>Du fick {this.state.score}/{quizData.length} rätt! </h2>
          <p>
            De rätta svaren var:
            </p>
            <ol className="quizResultat">
              {quizData.map((item, index) => (
                <li className={this.state.class} key={index}>
                  {item.answer}
                </li>
              ))}
            </ol>
          <a className="ui button btn" href="/">Gå tillbaka till startsidan</a> <a className="ui button btn" href="https://cryptomate.netlify.com/quiz">Testa igen</a> 
        </div>
      );
    } else {
      return (
        <div className="Quiz">
          <h1>{this.state.questions} </h1>
          <span>{`Fråga ${currentQuestion+1}/${quizData.length}`}</span>
          <ul>
          {options.map(option => (
            <li
            disabled={this.state.disableOptions}
              key={option.id}
              className={`ui floating message options 
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
              className="ui inverted button btn"
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Nästa fråga
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === quizData.length - 1 && (
            <button className="ui inverted button btn" onClick={this.finishHandler}>
              Rätta Quizet
            </button>
          )}
        </div>
      );
    }
  }
}

export default Quiz;
