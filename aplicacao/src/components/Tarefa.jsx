import React from 'react'
import '../assets/Card.css'
// import api from '../services/api'

/**
 *
 * @param {match} pega todos os parâmetros passado para a função
 */
export default function Tarefa({math}, props) {
    

    return(
        <div className="Card">
            <div className="Status">Status: {props.status}</div>
            <div className="Conteudo">Conteúdo: {props.conteudo} </div>
            <div className="Footer">Responsável: {props.user}</div>
        </div>        
        
    )

}