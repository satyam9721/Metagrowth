


import React, { useState } from "react";
import { QuizData } from "../Data/QuizData";
import QuizResult from "./QuizResult/QuizResult";
import { Button, Form } from "react-bootstrap";

function Quiz() {
  //   const hi = QuizData[0].answers[2].text;
  // console.log(hi);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const weight = QuizData[currentQuestion].answers.weightage;
  const selectop = QuizData[currentQuestion].answers.answertype;
  const [score, setScore] = useState(weight);
  const [clickedOption, setClickedOption] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // const changeQuestion = () => {
  //   updateScore();
  //   if (currentQuestion < QuizData.length - 1) {
  //     setCurrentQuestion(currentQuestion + 1);
  //     setClickedOption(0);
  //   } else {
  //     setShowResult(true);
  //   }
  // };

  // const PrevQuestion = () => {
  //   updateScore();
  //   if (currentQuestion > 0) {
  //     setCurrentQuestion(currentQuestion - 1);
  //     setClickedOption(null);
  //   }
  // };
  const handleNext = () => {
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const updateScore = () => {
    const correctAnswers = QuizData[currentQuestion].answers.weightage;
    if (correctAnswers.includes(clickedOption)) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };

  const handleCheckboxChange = (optionIndex) => {
    if (clickedOption.includes(optionIndex + 1)) {
      // If the checkbox is already selected, remove it from the selected options
      const updatedOptions = clickedOption.filter(
        (item) => item !== optionIndex + 1
      );
      setClickedOption(updatedOptions);
    } else {
      // If the checkbox is not selected, add it to the selected options
      const updatedOptions = [...clickedOption, optionIndex + 1];
      setClickedOption(updatedOptions);
    }
  };

  // Set the current question index here

  return (
    <>
      <h2 className="head">Metagrowth</h2>

      {currentQuestion === QuizData.length - 1 ? (
        <QuizResult
          score={score}
          totalScore={QuizData.length}
          tryAgain={resetAll}
        />
      ) : (
        <>
          <span>Section: {QuizData[currentQuestion].section}</span>

          <h5 className="numoption">
            Select option: {QuizData[currentQuestion].answertype}
          </h5>
          <div className="question">
            <span>{QuizData[currentQuestion].index}. </span>
            <span id="question-txt">{QuizData[currentQuestion].question}</span>
          <div className="Answer">
            {QuizData[currentQuestion].answers.min ||
            QuizData[currentQuestion].answers.max ||
            QuizData[currentQuestion].answers.step ? (
              <form onInput="result.value = slider.value">
                <label>
                  Rate {QuizData[currentQuestion].answers.min} to{" "}
                  {QuizData[currentQuestion].answers.max}
                </label>
                <br />
                <input
                  type="range"
                  min={QuizData[currentQuestion].answers.min}
                  max={QuizData[currentQuestion].answers.max}
                  step={QuizData[currentQuestion].answers.step}
                />
                Steps{" "}
                <output name="result" for="slider">
                  {QuizData[currentQuestion].answers.step}
                </output>
              </form>
            ) : (
              <div className="form-check">
                {QuizData[currentQuestion].answers.map((answer, index) => (
                  <div key={index} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioOptions"
                      id={`radioOption-${index}`}
                      value={answer.weightage}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`radioOption-${index}`}
                    >
                      {answer.text}
                    </label>
                  </div>
                ))}
              </div>

              // <ul>
              //   {QuizData[currentQuestion].answers.map((answer, index) => (
              //     <li key={index}>{answer.text}</li>
              //   ))}
              // </ul>
            )}
            </div>

            </div >    
            <div>
            <Button
              onClick={handlePrevious}
              variant="outline-warning"
              className="next-btn"
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <Button
              onClick={() => handleNext()}
              variant="outline-danger"
              className="mt-2"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default Quiz;














































































































// return (
//     <>
//       <div>
//         <h2 className='head'>Metagrowth</h2>
//         <p className="heading-txt">Survey-Quiz APP</p>
//         <div>
//           {showResult ? (
//             <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
//           ) : (
//             <>
//               <h5 className='numoption'>Select option {QuizData[currentQuestion].answers.answertype} </h5>
//               <div className="question">
//                 <span>{QuizData[currentQuestion].index}.  </span>
//                 <span id="question-txt">  {QuizData[currentQuestion].question}</span>
//               </div>
//               <div className="option-container">
           
//              <div className='options'>
//               <div className="form-check">
//   <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" value={weight[0]}  />
//   <label className="form-check-label" htmlFor="flexCheckDefault">
//     {QuizData[currentQuestion].answers.options[0]}
    
//   </label>
// </div>

// <div className="form-check">
//   <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" value={weight[1]}  />
//   <label className="form-check-label" htmlFor="flexCheckDefault">
//   {QuizData[currentQuestion].answers.options[1]}
//   </label>
// </div>

// <div className="form-check">
//   <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault"  value={weight[2]} />
//   <label className="form-check-label" htmlFor="flexCheckDefault">
//   {QuizData[currentQuestion].answers.options[2]}
//   </label>
// </div>


// <div className="form-check">
//   <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" value={weight[3]}  />
//   <label className="form-check-label" htmlFor="flexCheckDefault" >
//   {QuizData[currentQuestion].answers.options[3]}
//   </label>
// </div>
// </div>



                {/* {QuizData[currentQuestion].answers.options.map((option, i) => (
                  <div className="form-check" key={i}>

                    <label className="form-check-label" htmlFor={`exampleRadios${i}`}>
                      <input
                        type="checkbox"
                        id={`exampleRadios${i}`}
                        className={`form-check-input ${clickedOption == i + 1 ? "checked" : null}`}
                        checked={clickedOption === i + 1}
                        onChange={() => handleCheckboxChange(i)}
                        onClick={() => setClickedOption(i + 1)}
                      />
                      {option}
                
                    </label>
                  </div>
//                 ))} */}
//               </div>
//               <Button variant="outline-warning" className="next-btn" onClick={changeQuestion}>
//                 Next
//               </Button>
//               <Button variant="outline-danger" className="mt-2" onClick={PrevQuestion}>
//                 Previous
//               </Button>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }


// import React, { useState } from 'react'
// import { QuizData } from '../Data/QuizData'
// import QuizResult from './QuizResult/QuizResult';
// import { Button } from 'react-bootstrap';

// function Quiz() {
//     const [currentQuestion,setCurrentQuestion]=useState(0);

//     const weight= QuizData[currentQuestion].answers.weightage;

//     const selectop=QuizData[currentQuestion].answers.answertype;

   
//     const [score,setScore] = useState(weight);
//     const [clickedOption,setClickedOption]=useState([]);
//     const [showResult,setShowResult]=useState(false);
    
//     const changeQuestion = ()=>{
//         updateScore();
//         if(currentQuestion< QuizData.length-1){
//             setCurrentQuestion(currentQuestion+1);
//             setClickedOption(0);
//         }else{
//             setShowResult(true)
//         }
//     }
//     const PrevQuestion=()=>{
//         updateScore();
//         if (currentQuestion > 0) {
//             setCurrentQuestion(currentQuestion - 1);
//             setClickedOption(null);
//           }

//     }
//     const updateScore=()=>{
//         // if(clickedOption===QuizData[currentQuestion].answer){
//         //     setScore(score+1);
//         // }
//         const correctAnswers = QuizData[currentQuestion].answers.weightage;
//   if (correctAnswers.includes(clickedOption)) {
//     setScore(score + 1);
//   }
//     }
//     const resetAll=()=>{
//         setShowResult(false);
//         setCurrentQuestion(0);
//         setClickedOption(0);
//         setScore(0);
//     }
    

  


//   return (<>
    
//     <div>
//     <h2 className='head'>Metagrowth</h2>
//         <p className="heading-txt">Survey-Quiz APP</p>
//         <div >
//             {showResult ? (
//                 <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
//             ):(
//             <>
//             <h5 className='numoption'>Select option {QuizData[currentQuestion].answers.answertype}   </h5> 
//             <div className="question">
                
              
//                 {/* <span id="question-number">{currentQuestion+1} </span> */}
//                 <span >{QuizData.index} </span>
//                 <span id="question-txt">{QuizData[currentQuestion].question}</span>
//             </div>
//             <div className="option-container">
//                 {QuizData[currentQuestion].answers.options.map((option,i)=>{
//                     return(
                        
//                         <Button
                        
//                         className={`option-btn ${
//                             clickedOption == i+1?"checked":null
//                         }`}
//                         key={i}
//                         onClick={()=>setClickedOption(i+1)}
//                         >
//                         {option}
//                         </Button>
//                     )
//                 })} 
//                 {/* {answerOptions.map((option, index) => (
//           <button
//             key={index}
//             onClick={() => handleOptionClick(index)}
//             disabled={clickedOption !== null}
//           >
//             {option}
//           </button>
//         ))} */}
                
                               
//             </div>
//             <Button variant="outline-warning" className="next-btn" onClick={changeQuestion} >Next</Button>
//             {/* <button type="button"  onClick={changeQuestion} > Next</button> */}
//             <Button variant="outline-danger" className="mt-2" onClick={PrevQuestion} >Previous</Button>

//             {/* <button type="button"  onClick={PrevQuestion} > Previous</button> */}
//             {/* <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
//             <input type="button" value="Prev"  onClick={PrevQuestion}/> */}

//             </>)}
//         </div>
//     </div>
//     </>
//   )
// }

// export default Quiz
