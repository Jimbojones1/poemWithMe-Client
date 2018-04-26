import React from 'react';


const PoemArea = ({handlePoemInput, poemText}) =>{

  return (
     <div id="poemArea" className='six columns'>
          <h4>Let's Poem!</h4>
          <textarea onChange={handlePoemInput} autoFocus="true" type='text' value={poemText}/>
      </div>

    )
}

export default PoemArea;
