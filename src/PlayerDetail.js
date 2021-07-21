import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { FormGroup, Label } from "reactstrap";

class PlayerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btn1: 0,
            btn2: 0
        };
    }
    onIncreament1() {
        this.setState({
          btn1: this.state.btn1++,
          ...this.state
        });
      }
      onIncreament2() {
        this.setState({
          btn2: this.state.btn2++,
          ...this.state
        });
      }
      onSubmit(e,winner) {
        //call API from here
        console.log("winner",winner)
      }
    render() {
        const { Player1, Player2 } = this.props;
        const { btn1, btn2 } = this.state
        var winner_name = btn1 > btn2 ? Player1 : btn2 > btn1 ? Player2 : btn1 === btn2 ? "Both are at equal level" : "";
        return (
            <div>
                <div>
                <FormGroup className='has-wrapper'>
                    <Label>{Player1} : </Label>
                    <Button
                        type='submit'
                        color="primary"
                        variant='contained'
                        className='mt-10 mlr-20'
                        name='btn1'
                        onClick={() => this.onIncreament1()}
                        >
                        Add Win
                    </Button>
                    {btn1}
                    </FormGroup>
                </div>
                <div>
                <FormGroup className='has-wrapper'>
                        <Label>{Player2} : </Label>
                    <Button
                        type='submit'
                        color="primary"
                        variant='contained'
                        className='mt-10 mlr-20'
                        name='btn2'
                        onClick={() => this.onIncreament2()}>
                        Add WIn
                    </Button>
                    {btn2}
                    </FormGroup>
                </div>
                <p>Current Winner : {winner_name}</p>
                <p>With difference : {btn1 > btn2 ? btn1 - btn2 : btn2 - btn1}</p>

                    <Button
                        type='submit'
                        color="primary"
                        variant='contained'
                        className='mt-10 mlr-20'
                        name='btn2'
                        onClick={(e) => this.onSubmit(e,winner_name)}>
                        Save Game
                    </Button>
            </div>
        )
    }
}

export default PlayerDetail;