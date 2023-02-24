import React from 'react';

const MySelect = ({sortOptions, defaultValue, value, sortPosts}) => {
    return (
        <select value={value} onChange={e => sortPosts(e.target.value)}>
            <option disabled value=''>{defaultValue}</option>
            {sortOptions.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>)
            }
        </select>
    );
};

export default MySelect;