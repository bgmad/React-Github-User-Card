import React from 'react';
import { getData } from './data';

class SearchForm extends React.Component {
    state = {
        textInput: "",
        typed: false
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
    }

    //if textInput.length > 0 && typed === false then send textInput the App.js to make api request 
    componentDidUpdate = () => {
        if (this.state.textInput.length > 0 && !this.state.typed) {
            console.log(this.state); 
            // getData(`https://api.github.com/users/${this.state.textInput}`)
            //     .then(res => this.setState({userList: [...this.state.userList, res]}))
            //     .catch(err => console.error(`Error: ${err}`))
        }
    }


    render() {
        return (
            <div>
                <form>
                    <input onChange={this.handleChange} value={this.state.textInput} type="text" name="search"></input>
                </form>
                {/* an input for the search */}
            </div>
        )
    }
}

export default SearchForm;