import React, { useContext } from 'react'
import DataContext from '../context/dataContext'


const Home = () => {
  const { posts } = useContext(DataContext);

  return (
    <main className="Home">

      {posts.map(post => (
        <div className="section" key={post.id}>
          <div className="title">
              <img src={post.Img} alt="" />
              <div className="titleTxt">
                <h2>{post.title}</h2>
                <p>{post.subTitle}</p>
              </div>
          </div>
          <p className="content">
            {post.postContent.split('\n').map((line, lineIndex) => (
              <p className='postContent' key={lineIndex}>{line}</p>
            ))}
          </p>
          <figure>
          <img src={post.postImg} alt="" />
        </figure>
        </div>
      ))}

    </main>
  )
}

export default Home