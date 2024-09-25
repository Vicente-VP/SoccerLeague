import Team from '../Team/index.jsx';
import './style.css';

// Feito

const ListaTeams = ({teams, carregaTeams, excluir}) => {
    return(
        <div className='lista'> {teams.map(
             (p)=> (<Team valor={p} carregaTeams={carregaTeams} excluir={excluir}></Team>) 
        )} 
        </div>
    );
}

export default ListaTeams;