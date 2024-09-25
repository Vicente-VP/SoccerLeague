import ListaTeams from '../../Componentes/Listateams/index';
import axios from 'axios';
import {useEffect, useState} from 'react';
import BarraMenu from '../../Componentes/BarraMenu';


export default function PaginaExcluirTeam() {
    const [teams, setTeams] = useState([]);
  
    useEffect(()=>{
      carregaTeams();
    }, []);
  
    function carregaTeams(){
            axios.get('https://project-ea-football.onrender.com/teams')
            .then (res=>{
              setTeams(res.data);
            console.log(teams);
        });
    }
    return (
      <div className='principal'>
        <BarraMenu/>
        <center><h1>Bem Vindo a Soccer League</h1></center>
        <div className='teams-section'>
          <h1>Lista de Times</h1>
          <ListaTeams teams={teams} carregaTeams={carregaTeams} excluir={true}></ListaTeams>
        </div>
      </div>
    );
}