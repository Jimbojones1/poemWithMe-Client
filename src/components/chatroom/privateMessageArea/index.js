import React, { Component } from 'react';


class PrivateMessageArea extends Component {
    sorter = (data) => {
      // var user = this.props.data;
      // if(user === data.userTo){
      //   return "Sender"
      // }
      // else{
      //   return "Reciepient"
      // }
    }
    render(){
      // var user = this.props.data
      // var filteredData = this.props.PrvMsgData.filter(function(data, i){
      //   console.log(data)
      //   return data.userTo === user || user === data.from
      // })

      // var self = this;
      // // console.log('-------------------------------------filteredData----------------------------------------------------------------------------------')
      // // console.log(filteredData)
      // // console.log('-----------------------------------------------------------------------------------------------------------------------------------')
      // var userData = filteredData.map(function(data, i){
      //   return (
      //     <p key={i}><span></span></p>
      //     )
      // })
      return (
         <div className='PrivateMessage'>
            PrivateMessage Datae
         </div>
        )

    }
  }

  export default PrivateMessageArea;
