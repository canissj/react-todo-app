import React from 'react'
import './../css/home.css'
import TodoList from './TodoList'

const Home = () => {
    return <div className='home-container'>
        <h1 className='home-title'>My todo</h1>
        <TodoList  />
    </div>
}

export default Home;