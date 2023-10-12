import { TextField } from '@mui/material'
import React, { useContext } from 'react'
import { ApiContext } from '../Context/Context'

const SearchBar = () => {
    const { searchValue, setSearchValue } = useContext(ApiContext)
    return (
        <TextField
            fullWidth
            color='primary'
            label="Buscar"
            id="fullWidth"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
        />
    )
}

export default SearchBar