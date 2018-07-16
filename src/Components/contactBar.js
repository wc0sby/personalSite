import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class contactBar extends Component{
  render(){
    const { contacts } = this.props

    const styles={
      container:{
        textAlign: 'center',
        margin: '25px 0px',
      },
      linksContainer:{
        textAlign: 'left',
        margin: '2% 25%',
      },
      links:{
        textDecoration: 'none',
        color: '#575a60',
      }
    }

    const getContactLinks = ()=>{
      return contacts.map((i, k)=>{
        return <div key={k} style={styles.linksContainer}>
          <a href={i.link} style={styles.links}>
          <FontAwesomeIcon icon={i.icon} />
          <span style={{margin: '0 10px'}}>{i.name}</span>
        </a>
        </div>
      })
    }
    // console.log(this.props.contacts)
    return(
      <div style={styles.container} >
        <Typography variant='title' style={{margin: '10px 0px'}}>
          Contact
        </Typography>
          {getContactLinks()}
      </div>
    )
  }
}