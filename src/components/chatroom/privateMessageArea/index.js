import React, { Component } from 'react';


const PrivateMessageArea = ({user, prvMsgData, sortMessages}) => {

      // var user = this.props.data
      const filteredData = prvMsgData.filter((data, i) => {
        console.log(data)
        return data.recipient === user || user === data.username
      }).map(({from, message, recipient}, i) => {
        return (
          <p key={i}><span className={sortMessages(from)}>{from}</span>: {message}</p>
          )
      });

      return (
         <div className='PrivateMessage'>
            {filteredData}
         </div>
        )
}


  export default PrivateMessageArea;
