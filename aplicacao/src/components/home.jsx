import React from 'react'
import '../assets/home.css'
import Tarefa from './Tarefa'
import Header from './templates/Header'
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
        <div>
            <Header></Header>
            <div>
                <h1>Tarefas a serem executadas</h1>
            </div>
            <div>
                <h3 className="Subtitulos">Para fazer</h3>
                <div className='Home'>
                    <Tarefa ></Tarefa>
                    <Tarefa></Tarefa>
                    <Tarefa></Tarefa>
                    <Tarefa></Tarefa>

                </div>
            </div>
            <div>
                <h3 className="Subtitulos">Fazendo</h3>
                <div className='Home'>
                    <Tarefa></Tarefa>
                    <Tarefa></Tarefa>
                    <Tarefa></Tarefa>

                </div>
            </div>
            <div>
                <h3 className="Subtitulos">Feito</h3>
                <div className='Home'>
                    <Tarefa></Tarefa>
                    <Tarefa></Tarefa>

                </div>
            </div>
        </div>
    );
};



    
        


    
