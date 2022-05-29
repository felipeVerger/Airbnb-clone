import React from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import Layout from '../../components/Layout/Layout'

function Home() {
  return (
    <Layout>
      <div className='home'>
        <Banner/>

        <div className='home__section'>
          <Card 
            src='https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZW50cmV0ZWlubWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
            title='Online Experiences'
            description='Unique activities we can do together, led by a world of hosts.'
          />
          <Card
            src='https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
            title='Unique stays'
            description='Spaces that are more just a space to sleep.'
          />
          <Card
            src='https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
            title='Entire homes'
            description='Comfortable private places, with room for friends or family.'
          />
        </div>
        <div className='home__section'>
          <Card
            src='https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
            title='3 Bedroom Flat in Bournemouth'
            description='Superhost with a stunning view of the  beachside in Sunny Bournemouth'
            price='€130/night'
          />
          <Card
            src='https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
            title='Penthouse in London'
            description='Enjoy the amazing sites of London with this stunning penthouse'
            price='€350/night'
          />
          <Card
            src='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
            title='1 Bedroom apartment'
            description='Superhost with great  ameneties and a fabolous shopping complex nearby'
            price='€70/night'
          />
        </div>
      </div>
    </Layout>
  )
}

export default Home