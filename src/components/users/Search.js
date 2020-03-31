import React, { useState } from 'react'
import PropTypes from 'prop-types';

const Search = ({ searchUsers, clearUsers, showClear, setAlert }) => {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);

    }
    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter something', 'light')
        } else {

            // console.log(this.state.text)
            searchUsers(text);
            setText('');

        }

    }

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input type='text' name='text' onChange={onChange}
                    value={text}
                    placeholder='Search users....!' />

                <input type="submit" value="Search" className='btn btn-dark btn-block' />

            </form>
            <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>

        </div>
    )

}
Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Search
