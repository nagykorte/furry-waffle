import React from "react";
import { Link } from "gatsby";

export default class MainButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            red: 0,
            green: 0,
            blue: 0,
        };
        this.calculate = this.calculate.bind(this);
    }
    async calculate(event) {
        const red = 0;
        const green = 0;
        const blue = 0;
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    }

    hexToDec(hexString) {
        let newNumber = parseInt(hexString, 16);
        return newNumber + 1;
    }
    render() {
        const { isDown } = this.state;
        const inputs = ["red", "green", "blue"];

        return (
            <div style={{ background: "#FFFFFF" }}>
                <form>
                    {inputs.map((input, i) => (
                        <>
                            <label id="" for="rr">
                                inserte {`${input}`}:
                            </label>
                            <input
                                defaultValue="0"
                                type="text"
                                name={`${input}`}
                                onChange={this.calculate}
                            ></input>
                            <br></br>
                        </>
                    ))}
                </form>
                <div>
                    color:
                    <div
                        id="color"
                        style={{
                            backgroundColor: `#${
                                this.state.red + this.state.green + this.state.blue
                            }`,
                        }}
                    >
                        #{this.state.red}
                        {this.state.green}
                        {this.state.blue}
                    </div>
                    Mátray's brightness coefficient:{" "}
                    <span id="total">
                        {Number(this.hexToDec(this.state.red)) *
                            Number(this.hexToDec(this.state.green)) *
                            Number(this.hexToDec(this.state.blue))}
                    </span>
                </div>
            </div>
        );
    }
}
