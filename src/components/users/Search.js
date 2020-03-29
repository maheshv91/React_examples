import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: ''
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }


    onSubmit = e => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter something', 'light')
        } else {

            // console.log(this.state.text)
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });

        }

    }


    render() {
        const { clearUsers, showClear } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input type='text' name='text' onChange={this.onChange}
                        value={this.state.text}
                        placeholder='Search users....!' />

                    <input type="submit" value="Search" className='btn btn-dark btn-block' />

                </form>
                <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>

            </div>
        )
    }
}

export default Search
