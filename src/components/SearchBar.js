import React from "react";
import { Link } from "gatsby";
import searchStyles from "../styles/search.module.css";
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


export default class Header extends React.Component {
    constructor() {
        super();
        this.search = React.createRef();
        this.focusSearch = this.focusSearch.bind(this);
        this.searchToggle = this.searchToggle.bind(this);
        this.state = { searchDisplay: 'none', panelHeight: '3vh', inputSize: '1', caretDisplay: 'block', listDisplay: 'none' }
    }
    focusSearch() {
        // alert('focus search')
        this.search.current.focus()
    }
    async searchToggle(e) {
        // alert('search toggle')
        // e.preventDefault();
        this.setState((prevState) => {
            let searchDisplay = prevState.searchDisplay;
            let caretDisplay = prevState.caretDisplay;
            if (searchDisplay == 'none') {
                return {  panelHeight: '30vh', caretDisplay: 'none', searchDisplay: 'flex',}
            };
        })
        await setTimeout(function () { 
             
        }, 1000);
        this.setState((prevState) => {
            return {listDisplay:'flex'}
            }
        )
        
    }
    consoleDown(event) {
        this.searchToggle(event);
        this.focusSearch(event)
    }
    consoleUp(event) {
        this.setState((prevState) => {
            let searchDisplay = prevState.searchDisplay;
            if (searchDisplay == 'flex') {
                return { searchDisplay: 'none', panelHeight: '3vh', caretDisplay: 'block', listDisplay: 'none' }
            }
        })
    }
    render() {
        return (
            <div className={searchStyles.container}>
                <div onClick={this.consoleDown.bind(this)} className={searchStyles.inputContainer} style={{ height: this.state.panelHeight }} >
                    <input ref={this.search} size={this.state.inputSize} className={searchStyles.input} style={{ display: this.state.searchDisplay }}  ></input>
                    <ul className={searchStyles.list} style={{ display: this.state.listDisplay }} >
                        <li>online resume</li>
                        <li>irl projects</li>
                        <li>portfolio</li>
                        <li>other</li>
                    </ul>
                </div>
                <FontAwesomeIcon icon={faTimes} onClick={this.consoleUp.bind(this)} className={searchStyles.closeIcon} style={{ display: this.state.searchDisplay, top: this.state.closePos }} />
                <div className={searchStyles.caret} style={{ display: this.state.caretDisplay }} ></div>
            </div>
        );
    }
}
