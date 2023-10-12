import { Pagination } from '@mui/material'
import React, { useContext } from 'react'
import { ApiContext } from '../Context/Context'

const PaginationLayout = () => {
    const { pageNumber, setPageNumber, infoApi } = useContext(ApiContext)
    return (
        <Pagination count={infoApi.pages} page={pageNumber} onChange={(event, page) => {
            setPageNumber(page)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }} color='primary' />
    )
}

export default PaginationLayout