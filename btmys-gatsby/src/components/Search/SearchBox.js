import React from 'react';

import Button from '@material-ui/core/Button'

const SearchBox = ({search}) => {
	return (
		<div>
			<input
				type='search'
				placeholder='Enter Keyword'
			/>
			<Button variant='contained' onClick={search}>Search</Button>

		</div>

	)
}

export default SearchBox;