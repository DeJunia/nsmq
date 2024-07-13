import React, { useContext, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import DataContext from '../context/dataContext';
import backIconD from '../assets/icons/left.svg';
import backIcon from '../assets/icons/leftdk.svg';


const PostPage = () => {
  const { posts, theme} = useContext(DataContext);
  const { id } = useParams();




const post = posts.find(post => (post.id).toString() === (id));  

  if (!post ) {
    return [
     <main>
      <p>No post</p>
      <p>Reload</p>
     </main>
    ];
  } 

  return (  
      <main className="postPage">
        {post && <>
          <div className="top">
        <div className="headerImg">
          <img src={post.postImg} width='100%' height='100%' alt="" />
        </div>
        
        <NavLink to="/" className="back">
          {theme === 'light' ? (
            <img src={backIconD} width={26} height={26} alt="Back" />
          ) : (
            <img src={backIcon} width={26} height={26} alt="Back" />
          )} <p>Back</p>
        </NavLink>
        
        <div className="profileInfo">
          <div className="profileImg">
            <img src={post.Img} width='100%' height='100%' alt="" />
          </div>
          <div className="profileTitle">
            <h2>{post.title}</h2>
            <p>{post.subTitle}</p>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="postContent">
          {post.postContent.split('\n').map((line, lineIndex) => (
            <p key={lineIndex}>{line}</p>
          ))}
        </div>
      </div>
      <figure>
        <img src={post.postImg} width='100%' height='100%' alt="" />
      </figure>
      <div className="bottom"></div></>}

    </main>

  )
  
}

export default PostPage