import axios from 'axios';
import './style.css';
import {MdDelete} from 'react-icons/md';

const Team = ({valor, carregaTeams, excluir}) => {
    const IsExcluir = excluir

    return (
        <div className='cardProd'>
            <div className='nome_logo'>
                <img src={valor.team_shield} alt='Imagem do Time' className='imagem'></img>
                <h3 className='titulo'>{valor.nome_team}</h3>
                <hr />
            </div>
            <div className='conteudo-section'>
                <div className='conteudo'>
                    <span className='subtitulo'><span>Treinador: </span>{valor.coach}</span>
                    <span className='subtitulo'><span>Presidente: </span>{valor.president}</span>
                    <span className='subtitulo'><span>Estádio: </span>{valor.stadium}</span>
                    <span className='subtitulo'><span>Cidade: </span>{valor.city}</span>
                </div>
            </div>
                <center><MdDelete className={`icone  ${IsExcluir === true ? 'active' : ''}`} onClick={()=>remover(valor._id)}/></center>
        </div> 
    )
    function remover(id){
        let api = "https://project-ea-football.onrender.com/teams";
        console.log(id)
        axios.delete(`${api}/${id}`)
            .then(()=>{
                carregaTeams()
            }).catch((message)=> console.log(message));
            
    }
}


export default Team;