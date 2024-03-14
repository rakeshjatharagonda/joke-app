import React,{ useEffect, useState} from 'react'
import axios from "axios"
import './index.css'

const Home = ()=>{
    const [data,setData] = useState([])
        useEffect(()=>{
            axios.get("https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10")
            .then(res => setData(res.data.jokes))
            .catch(err => console.log(err))
        },[])

    return (
        <div className='container'>
            <div className='mt-3'>
                <h2>Jokes Page</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>category</th>
                            <th>joke</th>
                            <th>lang</th>
                            <th>safe</th>
                            <th>type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((jokes,index)=>{
                                return(
                                    <tr key ={index}>
                                        <td>{jokes.id}</td>
                                        <td>{jokes.category}</td>
                                        <td>{jokes.joke}</td>
                                        <td>{jokes.lang}</td>
                                        <td>{jokes.safe}</td>
                                        <td>{jokes.type}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home