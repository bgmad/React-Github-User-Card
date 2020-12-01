import React from 'react';

class SearchForm extends React.Component {
    state = {
        textInput: ""
    }

    handleChange = e => {
        this.setState({
            textInput: e.target.value,
            typed: true
        });
        
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addUser(this.state.textInput);
        this.setState({
            textInput: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.textInput} type="text" name="search"></input>
                </form>
                {/* an input for the search */}
            </div>
        )
    }
}

export default SearchForm;