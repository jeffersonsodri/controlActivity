import React from 'react'
import '../assets/home.css'
import Tarefa from './Tarefa'
// import api from '../services/api'
// import { useEffect, useState } from "react";



export default function Home({math}) {

    // const [task, setTask] = useState([]);

    // useEffect(() => {
    //     async function loadTask() {
            
    //     }
    //     return () => {
    //         cleanup
    //     }
    // }, [math.params.id])


    return (
        <div className='Home'>
            <Tarefa>Essa é uma tarefa</Tarefa>        
            <Tarefa></Tarefa>
            <Tarefa></Tarefa>

        </div>
    );
};



    
        


    
