import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  //to strore which component is stored
  state = {
    component: null
  }

   updateState = (component) =>{ 
    this.setState({component:component})
    //console.log(this.state.component)
  }

  render() {
    let detailsToDisplay = <div>Hi, I'm a div!</div>

    if(this.state.component == "profile"){
       detailsToDisplay = <Profile/> 
    }else if(this.state.component == "photo"){
       detailsToDisplay = Photos()
    }else if(this.state.component == "cocktail"){
       detailsToDisplay = Cocktails()
    }else if(this.state.component == "pokemon"){
       detailsToDisplay = <Pokemon/>
    }
    
    
    return (
      <div>
        <MenuBar whichComponent = {this.updateState}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
