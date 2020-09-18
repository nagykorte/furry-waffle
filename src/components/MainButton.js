import React from "react";
import { Link } from "gatsby";

export default class MainButton extends React.Component {
    constructor() {
        super();
        this.title = React.createRef();
        this.animate = this.animate.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    animate() {
    console.log(this.title);
        alert("alert");
        this.title.current.style.width = "15vw";
    }
    handleClick(e) {
        e.preventDefault();
        this.title.current.style.width="13vw"
        this.title.current.style.height="10vh"
    }
    render() {
        return (
            <Link to={this.props.url}>
                <button
                    className = "mainButton"
                    ref={this.title}
                    mouseOver={this.animate}
                    onClick = {this.handleClick}
                    style={{
                        backgroundColor: `${this.props.color || "black"}`,
                        borderStyle: `inset`,
                        borderColor: `${this.props.color}`,
                        border: "none",
                        color: "white",
                        float: "left",
                        fontSize: "20px",
                        margin: "7px 7px",
                        cursor: "pointer",
                        width: "25vw",
                        height: "20vw",
                        transition: "all 0.3s ease"
                    }}
                >
                    {this.props.buttonText}
                </button>
            </Link>
        );
    }
}



// export default class MainButton extends React.Component {

//      constructor(props) {
//          super(props);
//          this.state = {
//          isDown: null
//       };

//   }

//   pressButton = (i) => {
//     this.setState({ isDown: i });
//   };
//   releaseButton = () => {
//     this.setState({ isDown: null });
//   };

//   render() {
//     const { isDown } = this.state;
//     const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-'];

//     return (
//       <div className="mainButton">
//         {buttons.map((button, i) => (
//           <button
//             className={`${isDown === i ? 'btnDown' : ''}`}
//             onMouseDown={this.pressButton.bind(undefined, i)}
//             onMouseUp={this.releaseButton}
//             value={button}
//           >
//             {button}
//           </button>
//         ))}
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <MainButton />,
//   document.getElementById('container')
// );`