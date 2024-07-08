import React, { useContext } from 'react'
import DataContext from '../context/dataContext'
import downloadIcon from '../assets/icons/download.svg'
import { NavLink } from 'react-router-dom'

const Contest = () => {

  const { contests } = useContext(DataContext);

  return (
    <main className="Contest">
      {
        contests.map(contest => (
        <div className="c-Section" key={contest.id}>
          <NavLink to={`/contest/${contest.id}`} className="title">
            <h2>{contest.title}</h2>
            <p>{contest.subTitle}</p>
          </NavLink>
          <div className="l-Side">
            <p>{(contest.schoolsNo < 2) ? 'Sch: ' : 'Schs: '} <span>{contest.schoolsNo}</span></p>
            <div className="download">
              <img src={downloadIcon} width={16} height={16} alt="" />
            </div>
          </div>
      </div>
        ))
      }

    </main>
  )
}

export default Contest