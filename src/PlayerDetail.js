import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class PlayerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btn1: 0,
            btn2: 0
        };
    }
    onIncreament1(e) {
        this.setState({
          btn1: this.state.btn1++,
          ...this.state
        });
      }
      onIncreament2(e) {
        this.setState({
          btn2: this.state.btn2++,
          ...this.state
        });
      }
    render() {
        console.log("this.props",this.props)
        const { Player1, Player2, } = this.props;
        const { btn1, btn2 } = this.state
        return (
            <div>
                <div>
                    {Player1}
                    <Button
                        type='submit'
                        variant='contained'
                        className='mt-10'
                        name='btn1'
                        onClick={() => this.onIncreament1()}>
                        Add Win
                    </Button>
                    {this.state.btn1}
                </div>
                <div>
                    {Player2}
                    <Button
                        type='submit'
                        variant='contained'
                        className='mt-10'
                        name='btn2'
                        onClick={() => this.onIncreament2()}>
                        Add WIn
                    </Button>
                    {this.state.btn2}
                </div>
                {"Current Winner : "}{" "}
                {btn1 > btn2
                    ? Player1
                    : btn2 > btn1
                        ? Player2
                        : btn1 == btn2
                            ? ""
                            : ""}
                {"With difference : "}
                {btn1 > btn2 ? btn1 - btn2 : btn2 - btn1}
            </div>
        )
    }
}

export default PlayerDetail;