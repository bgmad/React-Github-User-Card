import React from 'react';
import styled from 'styled-components';

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
            <FormContainer>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.textInput} type="text" name="search" placeholder='Search by username'></input>
                </form>
            </FormContainer>
        )
    }
}

export default SearchForm;

const FormContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    form {
        width: 80%;
        input {
            width: 100%;
            font-size: 2rem;
        }
    }
`;