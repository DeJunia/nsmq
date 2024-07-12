import React, { useContext } from 'react'
import DataContext from '../context/dataContext'
import AutoScroll from './autoscroll';
import { NavLink } from 'react-router-dom';

const Home = ( ) => {
  const { posts } = useContext(DataContext);

  if(!posts) {
    return[
      <main>
        <p>Reload Page</p>
      </main>
    ]
  }

  return (
    <main className="Home">
      <AutoScroll />
      {posts.map(post => (
        <div className="section" key={post.id}>
          <NavLink to={`/post/${post.id}`} className="title">
              <img src={post.Img} alt="" />
              <div className="titleTxt">
                <h2>{post.title}</h2>
                <p>{post.subTitle}</p>
              </div>
          </NavLink>
          <NavLink to={`/post/${post.id}`}>
          <p className="content">
            {post.postContent.split('\n').map((line, lineIndex) => (
              <p className='postContent' key={lineIndex}>{line}</p>
            ))}
          </p>
          </NavLink>
          <figure>
          <img src={post.postImg} alt="" />
        </figure>
        </div>
      ))}

    </main>
  )
}

export default Home