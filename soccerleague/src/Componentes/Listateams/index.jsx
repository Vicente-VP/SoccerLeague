import Team from '../Team/index.jsx';
import './style.css';

// Feito

const ListaTeams = ({teams, carregaTeams }) => {
    return(
        <div className='lista'> {teams.map(
             (p)=> (<Team valor={p} carregaTeams={carregaTeams}></Team>) 
        )} 
        </div>
    );
}

export default ListaTeams;