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
        
        <div className='teams-section'>
          <center><h1>Exclusão de times</h1></center>
          <ListaTeams teams={teams} carregaTeams={carregaTeams} excluir={true}></ListaTeams>
        </div>
      </div>
    );
}