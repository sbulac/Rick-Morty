import React from 'react'
import { ApiContext } from '../Components/Context/Context'
import CardsContainer from '../Components/CardsContainer/CardsContainer'
import SkeletonCard from '../Components/SkeletonCard/SkeletonCard'
import CardSingle from '../Components/CardSingle/CardSingle'
import SearchBar from '../Components/SearchBar/SearchBar'
import PaginationLayout from '../Components/Pagination/PaginationLayout'

const HomePage = () => {

    return (
        <>
            <SearchBar />

            <ApiContext.Consumer>
                {({ loading, characters }) => (
                    <CardsContainer>
                        {loading
                            ? <>
                                <SkeletonCard />
                                <SkeletonCard />
                                <SkeletonCard />
                                <SkeletonCard />
                            </>
                            : characters.map(item => <CardSingle
                                key={item.id}
                                name={item.name}
                                status={item.status}
                                img={item.image}
                                gender={item.gender}
                            />)
                        }
                    </CardsContainer>
                )}
            </ApiContext.Consumer>

            <PaginationLayout />

        </>
    )
}

export default HomePage