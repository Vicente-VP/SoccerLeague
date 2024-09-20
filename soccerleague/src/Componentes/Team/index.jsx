import axios from 'axios';
import '../../index.css';
import {MdDelete} from 'react-icons/md';

const Team = ({valor, carregaTeams}) => {
    return (
        <div className='cardProd'>
            <center>
                <h3 className='titulo'>{valor.nome_team}</h3>
                <p className='subtitulo'>Treinador: {valor.coach}</p>
                <p className='subtitulo'>Presidente: {valor.descricao}</p>
                <p className='subtitulo'>Categoria: {valor.president}</p>
                <p className='subtitulo'>Estádio: {valor.stadium}</p>
                <p className='subtitulo'>Cidade: {valor.city}</p>
                <img src={valor.team_shield} alt='Imagem do Time' className='imagem'></img>

                <MdDelete className='icone' onClick={()=>remover(valor.id)}/>
            </center>
        </div>
    )
    function remover(id){
        let api = "https://project-ea-football.onrender.com/teams";
        axios.delete(`${api}/${id}`).then(()=>carregaTeams());
    }
}


export default Team;