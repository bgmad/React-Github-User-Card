import React from 'react';
import { getData } from './data';

class SearchForm extends React.Component {
    state = {
        textInput: "",
        typed: false,
        searchResult: undefined
    }

    //use onChange to update the value of input and textInput
    //if there is an update, and no more updates have happened in the last 500ms (if interval between keystrokes > 500ms) then send search term ('textInput') upstream (to App.js)
    handleChange = e => {
        this.setState({
            textInput: e.target.value,
            typed: true
        }, () => {
            setTimeout(() => {
                if (this.state.typed) {
                    this.setState({ typed: false })
                } else {
                    return null;
                }
            }, 1500)
        });
        if (!this.state.typed && typeof this.state.searchResult === 'undefined' && this.state.textInput !== "" ) {
            console.log(this.state); 
            getData(`https://api.github.com/users/${this.state.textInput}`)
                .then(res => this.setState({searchResult: res}))
                .catch(err => console.error(`Error: ${err}`))
        } else if (this.state.textInput === "") {
            this.setState({
                searchResult: undefined
            })
        }
    }

    //if textInput.length > 0 && typed === false then send textInput the App.js to make api request 
    componentDidUpdate = () => {
        // if (!this.state.typed && typeof this.state.searchResult === 'undefined' && this.state.textInput.length > 0 ) {
        //     console.log(this.state); 
        //     getData(`https://api.github.com/users/${this.state.textInput}`)
        //         .then(res => this.setState({searchResult: res}))
        //         .catch(err => console.error(`Error: ${err}`))
        // } else if (this.state.textInput === "") {
        //     this.setState({
        //         searchResult: undefined
        //     })
        // }
    }


    render() {
        return (
            <div>
                <form>
                    <input onChange={this.handleChange} value={this.state.textInput} type="text" name="search"></input>
                    {typeof this.state.searchResult === 'object' ?
                        <div>{this.state.searchResult.name}</div> :
                        null}
                </form>
                {/* an input for the search */}
            </div>
        )
    }
}

export default SearchForm;