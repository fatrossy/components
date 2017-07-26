import React from 'react';
import { Wrap, Switch } from './styles'

export default class Button extends React.Component{
  constructor(){
    super();
    this.state = {
      isComp: false,
      compPulse: false
    }
    this.handleComp = this.handleComp.bind(this);
  }

  handleComp(){

    this.setState({
      isComp: !this.state.isComp,
      compPulse: true
    })


    setTimeout( () => {
      this.setState({
        compPulse: false
      })
    }, 100)

  }

  render(){

    console.log(this.state.compPulse)

    return (
    <Wrap onClick={() => this.handleComp()} state={this.state.isComp}>
      <Switch pulse={this.state.compPulse} state={this.state.isComp}>{this.state.isComp ? 'c' : 't'}</Switch>
    </Wrap>
    )
  }
}
