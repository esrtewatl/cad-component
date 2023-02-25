import React from 'react'

function Content() {

  const sedanProps = {
    logo: './Group 2.png',
    title: 'SUDANS',
    content: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    buttonText: 'Learn More'
  };

  const suvProps = {
    logo: './Group 3.png',
    title: 'SUVS',
    content: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    buttonText: 'Learn More'
  };

  const luxuryProps = {
    logo: './Group 4.png',
    title: 'LUXURY',
    content: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    buttonText: 'Learn More'
  };

  return (
    <div className='container'>
      <div className ='card-1'>
        <div className='logo'>
          <img src={sedanProps.logo} alt='Sedan Logo'/>
        </div>
        <div className ='title'>{sedanProps.title}</div>
        <div className ='content'>
          <p>{sedanProps.content}</p>
        </div>
        <div className='button-div'>
          <button className ='learnBtn'>{sedanProps.buttonText}</button>
        </div>
      </div>

      <div className ='card-2'>
        <div className='logo'>
          <img src={suvProps.logo} alt='SUV Logo'/>
        </div>
        <div className ='title'>{suvProps.title}</div>
        <div className ='content'>
          <p>{suvProps.content}</p>
        </div>
        <div className='button-div'>
          <button className ='learnBtn'>{suvProps.buttonText}</button>
        </div>
      </div>

      <div className ='card-3'>
        <div className='logo'>
          <img src={luxuryProps.logo} alt='Luxury Logo'/>
        </div>
        <div className ='title'>{luxuryProps.title}</div>
        <div className ='content'>
          <p>{luxuryProps.content}</p>
        </div>
        <div className='button-div'>
          <button className ='learnBtn'>{luxuryProps.buttonText}</button>
        </div>
      </div>
    </div>

  )
}


export default Content
