import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

const ApiContext = createContext()

const ApiProvider = ({ children }) => {
    const [pageNumber, setPageNumber] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [infoApi, setInfoApi] = useState({})
    const [characters, setCharacters] = useState([])
    const [drawer, setDrawer] = useState(false)

    const [loading, setLoading] = useState(true)
    const searchedCharacters = characters.filter((character) => {
        const characterName = character.name.toLowerCase()
        const searchText = searchValue.toLowerCase()
        return characterName.includes(searchText)
    })

    let url

    if (searchValue === '') {
        url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
    } else {
        url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchValue}`
    }

    useEffect(() => {
        setLoading(true)
        try {
            axios.get(url)
                .then(response => {
                    setCharacters(response.data.results)
                    setInfoApi(response.data.info)
                })
                .finally(() => setLoading(false))
        } catch (error) {

        }
    }, [pageNumber, searchValue])


    return (
        <ApiContext.Provider value={{
            loading,
            characters,
            pageNumber,
            setPageNumber,
            searchValue,
            setSearchValue,
            searchedCharacters,
            infoApi,
            drawer,
            setDrawer
        }} >
            {children}
        </ApiContext.Provider>
    )
}

export { ApiProvider, ApiContext }