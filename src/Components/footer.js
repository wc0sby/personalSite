import React, { Component } from 'react'

export default class Footer extends Component{
  render(){
    const styles = {
      footer:{
        position: 'relative',
        bottom: 0,
        height: 50,
        margin: 20
        // width: '100%'
      },
      container:{
        display: 'flex',
        justifyContent: 'space-between'
      }

    }


    return(
      <div style={styles.footer}>
        <hr />
        {/* Container */}
        <div style={styles.container}>
          {/* section 1 */}
          <div>
            this is just text
          </div>
          {/* section 2 */}
          <div>
            This will be social media links
          </div>
        </div>
      </div>
    )
  }
}