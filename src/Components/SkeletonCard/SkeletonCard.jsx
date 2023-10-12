import { Box, Skeleton } from '@mui/material'
import React from 'react'

const SkeletonCard = () => {
    return (
        <Box sx={{
            width: '100%',
            height: 166,
            backgroundColor: '#B3B6B7',
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            p: 1
        }}>
            <Skeleton variant="rectangular" width={150} height={150} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Skeleton variant="text" width={150} height={35} />
                <Skeleton variant="text" width={100} height={20} />
            </Box>
        </Box>
    )
}

export default SkeletonCard