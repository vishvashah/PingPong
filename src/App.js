import "./App.css";
import React, { Component } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import Button from "@material-ui/core/Button";
import PlayerDetail from './PlayerDetail';
import FormValidation from './validation';
class PingPong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Player1: "",
      Player2: "",
      display: true,
      errors: {},
      isValid: false,
    };
  }
  onSubmit() {
    const { errors, isValid } = FormValidation(this.state);
    this.setState({ errors: errors });
    if (isValid) {
      this.setState({
        display: false
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { Player1, Player2, display } = this.state;
    return (
      <div className="form-container">
        {display ? (
          <Form>
            <FormGroup>
              <Label>Player 1</Label>
              <Input
                type='text'
                value={Player1}
                name='Player1'
                className='col-sm-6'
                placeholder='Player1'
                onChange={e => this.onChange(e)}
                maxLength='20'
              />
              {this.state.errors.Player1 && (
                <span className='text-danger'>{this.state.errors.Player1}</span>
              )}
            </FormGroup>
            <FormGroup className='has-wrapper'>
              <Label>Player 2</Label>
              <Input
                type='text'
                name='Player2'
                value={Player2}
                className='col-sm-6'
                placeholder='Player2'
                onChange={e => this.onChange(e)}
                maxLength='20'
              />
              {this.state.errors.Player2 && (
                <span className='text-danger'>{this.state.errors.Player2}</span>
              )}
            </FormGroup>
            <FormGroup className='text-center'>
              <Button
                color="primary"
                variant='contained'
                className='mt-10'
                onClick={() => this.onSubmit()}
                >
                Continue
              </Button>
            </FormGroup>
          </Form>
        ) : (
        <div className='result-main'>
          <PlayerDetail {...this.state} />
          </div>
        )}
      </div>
    );
  }
}

export default PingPong;
