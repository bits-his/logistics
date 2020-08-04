import React, {Component} from 'react'
import {Button} from 'reactstrap'
import './style.css'

export default class Background extends Component{
  render(){
    return(
      <div className='BackgroundImage'>
        <center>
          <Button color='danger' style={{marginTop : '200px', borderRadius : '0px', fontWeight : '200px', }}>
            Create Order
          </Button>
        </center>
      </div>
    )
  }
}
