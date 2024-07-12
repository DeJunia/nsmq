import React, { useState, useContext, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import DataContext from '../context/dataContext';
import backIconD from '../assets/icons/left.svg';
import backIcon from '../assets/icons/leftdk.svg';
import ansIcon from '../assets/icons/ans.svg';
import ansIconhide from '../assets/icons/anshide.svg';

const ContestPage = () => {
  const { contests, theme } = useContext(DataContext);
  const [contest, setContest] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (contests && contests.length > 0) {
      const foundContest = contests.find(contest => contest.id.toString() === id);
      setContest(foundContest);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [contests, id]);

  const [visibleAnswers, setVisibleAnswers] = useState({});

  const toggleAnswerVisibility = (roundIndex, questionIndex) => {
    const key = `${roundIndex}-${questionIndex}`; 
    setVisibleAnswers((prevState) => ({
      ...prevState,
      [key]: !prevState[key] 
    }));
  };


  if (!contest || loading) {
    return (
      <main className="ContestPage">
        <div className="header">
          <NavLink to="/contest" className="back">
            {theme === 'light' ? (
              <img src={backIconD} width={20} height={20} alt="Back" />
            ) : (
              <img src={backIcon} width={24} height={24} alt="Back" />
            )}
          </NavLink>
          <h2>Contest Not Found</h2>
          <div className="none" height={24} width={24}></div>
        </div>
        <h2>Post not found</h2>
        <p>Well... That's disappointing</p>
        <p>
          <NavLink to="/">Visit our Homepage</NavLink>
        </p>
      </main>
    );
  }

  return (
    <main className="ContestPage">
      <div className="header">
        <NavLink to="/contest" className="back">
          {theme === 'light' ? (
            <img src={backIconD} width={20} height={20} alt="Back" />
          ) : (
            <img src={backIcon} width={24} height={24} alt="Back" />
          )}
        </NavLink>
        
        <h2>{contest.title}</h2>

        <div className="none" height={24} width={24}></div>
      </div>

      {contest.rounds.map((round, roundIndex) => (
        <div className="article" key={round.id}>
          <h2 className="title">{round.title}</h2>
          <p className="subtitle">{round.subtitle}</p>
          {round.body.map((bod, questionIndex) => {

            const key = `${roundIndex}-${questionIndex}`;
            const isAnswerVisible = visibleAnswers[key]; 

            return (
              <div key={questionIndex} className="body">
                <div className="top">
                  <p className="question">Q:{questionIndex + 1} {bod.question.split('\n').map((line, lineIndex) => (
                    <p className='c-question' key={lineIndex}>{line}</p>
                  )
                  )}</p>
                  <button className='ansBtn'
                    onClick={() => toggleAnswerVisibility(roundIndex, questionIndex)}
                    aria-expanded={isAnswerVisible}
                  >
                    {isAnswerVisible ? (<>
                      <img src={ansIconhide} alt="" width={24} height={24} /> <p>Hide</p>
                    </>) : (<><img src={ansIcon} alt="" width={24} height={24} /> <p>Ans</p></>) } 
                  </button>
                </div>
                
                <p className="answer" style={{ display: isAnswerVisible ? 'block' : 'none' }}>
                  {bod.answer}
                </p>
              </div>
            );
          })}
        </div>
      ))}
    </main>
  );
};

export default ContestPage;
