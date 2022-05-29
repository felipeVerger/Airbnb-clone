import React from 'react'
import './SearchPage.css'
import SearchResult from '../../components/SearchResult/SearchResult'

import Layout from '../../components/Layout/Layout'
import { Button } from '@mui/material'

function SearchPage() {
  return (
    <Layout>
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays - 26 august to 30 august - 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>Cancellation Flexibility</Button>
                <Button variant='outlined'>Type of place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and beds</Button>
                <Button variant='outlined'>More filters</Button>
            </div>
            <SearchResult
                img='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
                location='Private room in center of London'
                title='Stay at this spacious Edwardian House'
                description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing machine'
                star={4.73}
                price='€30 / night'
                total='€117 total'
            />
            <SearchResult
                img='https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
                location='Private room in center of London'
                title='Independent luxury studio apartment'
                description='2 guest - 3 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen'
                star={4.3}
                price='€40 / night'
                total='€157 total'
            />
            <SearchResult
                img='https://images.unsplash.com/photo-1592229505726-ca121723b8ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
                location='Private room in center of London'
                title='London studio apartment'
                description='4 guest - 4 bedroom - 4 bed - Kitchen - Free parking - Washing machine'
                star={3.8}
                price='€35 / night'
                total='€207 total'
            />
            <SearchResult
                img='https://images.unsplash.com/photo-1631049035634-c04c637651b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
                location='Private room in center of London'
                title='30 mins to Oxford Street, Excel London'
                description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing machine'
                star={4.1}
                price='€55 / night'
                total='€320 total'
            />
            <SearchResult
                img='https://images.unsplash.com/photo-1587874522487-fe10e954d035?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
                location='Private room in center of London'
                title='Spacious Peaceful Modern Bedroom'
                description='3 guest - 2 bedroom - 2 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking '
                star={5.0}
                price='€60 / night'
                total='€450 total'
            />
        </div>
    </Layout>
  )
}

export default SearchPage