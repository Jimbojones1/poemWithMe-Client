import React, { Component } from 'react';


const PrivateMessageArea = ({user, prvMsgData, sortMessages}) => {
  console.log('PrivateMessageArea, is being CALLED WHY NOT')
      // var user = this.props.data
      const filteredData = prvMsgData.filter((data, i) => {
        console.log(data)
        return data.recipient === user || user === data.from
      })



      const userData = filteredData.map(({from, recipient, message}, i) => {
        console.log(message, ' in message filter')
        return (
          <p key={i}><span className={sortMessages(from)}>{from}</span>: {message}</p>
          )
      });

      console.log('this is filteredData', filteredData)
      console.log('this is userData: ', userData)

      return (
         <div className='privateMessage'>
            {userData}
         </div>
        )
}


  export default PrivateMessageArea;
