import React from 'react'
import nsmqIcon from '../assets/img/nsmqqq.png'
import whatsIcon from '../assets/img/whatsapp.svg'
import earthIcon from '../assets/img/world.svg'
import facebookIcon from '../assets/img/facebook.svg'
const About = () => {
  return (
    <main className="aboutPage">
      <div className="follow">
        <a href="https://wa.me/233534582327">Contact Team </a> <a href="https://wa.me/233534582327"><img src={whatsIcon} width={26} height={26} alt="" /></a>
      </div>
      <div className="head">
        <a href="https://nsmq.vercel.app">nsmq.vercel.app</a>
        <p>This platform is an interactive platform designed to provide a fun and educational experience for users. The app fetches quiz data from a JSON file hosted on Vercel, offering multiple quizzes with various rounds and questions from past nsmq contests. Users can select a quiz from a list of contests on the contest page, navigate to the quiz page, and engage with the questions one by one.</p>
      </div>
     <div>

      <div className="title">
        <img src={nsmqIcon} width='70px' height='100%' alt="" /><p>About NSMQ</p>
      </div>
      <p className='p'> The NSMQ was first organized in 1993. It has since become one of the most prestigious academic competitions in Ghana, aiming to promote the study of science and mathematics at the secondary school level.</p>
      <p className='p'>
      The competition is usually divided into several stages, including regional qualifiers, quarter-finals, semi-finals, and the grand finale. Each stage tests students’ knowledge and skills in various areas of science and mathematics. 
      </p>
      <p className='p'>
      Each participating school is represented by a team of three students. 
      </p>
      <p className='p'>
      The quiz typically has multiple rounds, such as problem-solving, general science questions, and a "speed race" where quick and accurate answers are required. 
      </p>
      <p className='p'> Questions cover a range of topics in mathematics, physics, chemistry, and biology.</p>
      <p className='p'>The event is widely broadcasted on television and online, drawing significant public attention and support from alumni, students, and various stakeholders.</p>
      <p className='p'>
      Winning the NSMQ is considered a significant achievement and brings great honor to the schools involved. The competition is known for its rigorous standards and has inspired many students to pursue careers in science, technology, engineering, and mathematics (STEM).
      </p>
      <p className='p'>
      Schools from all regions of Ghana compete, showcasing the diversity and competitive spirit across the nation.
      </p>
      <p className='p'>
      The competition is supported by various sponsors, including educational institutions, corporate bodies, and government agencies, which help to sustain and enhance its reach and impact.
      </p>
      <p className='p'>
      The NSMQ not only highlights academic excellence but also encourages the study and appreciation of science and mathematics among young Ghanaians.
      </p >
      <p className='p'>
      Over the years, the NSMQ has introduced various innovations, including the use of technology in quiz delivery and more interactive formats.
      </p>
      <p className='p'>
      The competition has a strong online presence, with live streaming of events, social media updates, and engagement with fans and followers globally.
      </p>
      <p className='p'>
      The NSMQ continues to be a platform that not only celebrates academic excellence but also fosters a love for science and technology among young people in Ghana.
      </p >

      <div className="follow">
        <a href="">Contact NSMQ </a> <span>
        <a href="https://web.facebook.com/NSMQGhana"><img src={facebookIcon} width={26} height={26} alt="" /></a>
        <a href="https://www.nsmq.com.gh/?fbclid=IwZXh0bgNhZW0CMTAAAR2C1iKcZ3VYXQ7OXWsfCx9VqGqShtDe5rzT5N2679doSIWIOJOyHyXazUU_aem_8ZXcw3Nl6oTVxWgA5k-xrw">
          <img src={earthIcon} width={24} height={24} alt="" />
        </a>
        </span>
      </div>
     </div>
    </main>
  )
}

export default About