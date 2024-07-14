import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import DataContext from '../context/dataContext';
import backIcon from '../assets/icons/leftdk.svg';
import backIconD from '../assets/icons/left.svg';

const SearchPage = () => {
  const { theme, query, filteredPosts, filteredContests } = useContext(DataContext)
  
  return (
    <main className="Search">
      <div className="header">
          <NavLink to="/" className="back">
            {theme === 'light' ? (
              <img src={backIconD} width={20} height={20} alt="Back" />
            ) : (
              <img src={backIcon} width={24} height={24} alt="Back" />
            )}
          </NavLink>
          <p>Results for : <span>{query}</span></p>
          <div className="none" height={24} width={24}></div>
        </div>

      {
        query ? (
          <div>
            {filteredContests.length > 0 ? (
            filteredContests.map(contest => (
              <div key={contest.id} className='searchResults'>
                <NavLink to={`/contest/${contest.id}`}>{contest.title}</NavLink>
              </div>
        )).reverse() 
        
      ) : <p>No contests found</p> }
      {
        filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <div key={post.id} className='searchResults red'>
              <NavLink to={`/post/${post.id}`}>{post.title}
              </NavLink>
            </div>
      )).reverse() 
      
    ) : <p>No posts found</p>
      }
      
          </div>
        ) : (
          <p>Please Enter a search term</p>
        )
      }
      
    </main>
  )
}

export default SearchPage