// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import Button from "@material-ui/core/Button";
import validator from "validator";
import PlayerDetail from './PlayerDetail';
class PingPong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Player1: "",
      Player2: "",
      display: true,
      errors: {},
      isValid: false,
      btn1: 0,
      btn2: 0
    };
  }
  onSubmit() {
    // this.validation(this.state);
    // if (this.state.isValid) {
    this.setState({
      display: false
    });
    // }
  }
  // validation(data) {
  //   console.log("data",data)
  //   if (validator.isEmpty(data.Player1)) {
  //     console.log("inside if")
  //     this.setState({
  //       isValid: false,
  //       ...this.state,
  //       errors: {
  //         ...this.state.errors,
  //         Player1: "Please Enter Player1 Name"
  //       }
  //     });
  //   } else {
  //     this.setState({
  //       isValid: true,
  //       errors: {
  //         ...this.state.errors,
  //         Player1: ""
  //       }
  //     });
  //   }
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { Player1, Player2, display } = this.state;
    return (
      <div>
        {display ? (
          <Form>
            <FormGroup className='col-sm-12'>
              <Label className='col-sm-6'>Player 1</Label>
              <Input
                type='text'
                value={Player1}
                name='Player1'
                className='col-sm-6'
                placeholder='Player1'
                onChange={e => this.onChange(e)}
                maxLength='20'
              // onBlur={e => this.validatePlayer1(e)}
              />
              {this.state.errors.PlayerName && (
                <span className='text-danger'>{this.state.errors.Player1}</span>
              )}
            </FormGroup>
            <FormGroup className='has-wrapper'>
              <Label for='Password'>Player 2</Label>
              <Input
                type='text'
                name='Player2'
                value={Player2}
                className='col-sm-6'
                placeholder='Player2'
                onChange={e => this.onChange(e)}
                // onBlur={e => this.validatePlayer2(e)}
                maxLength='20'
              />
            </FormGroup>
            <FormGroup className=''>
              <Button
                type='submit'
                variant='contained'
                className='mt-10'
                onClick={() => this.onSubmit()}>
                Continue
              </Button>
            </FormGroup>
          </Form>
        ) : (
          <PlayerDetail {...this.state} />
        )}
      </div>
    );
  }
}

export default PingPong;
