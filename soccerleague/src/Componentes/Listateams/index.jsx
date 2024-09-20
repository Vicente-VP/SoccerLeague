import Team from '../Team/index.jsx';

// Feito

const ListaTeams = ({teams, carregaTeams }) => {
    return(
        <div> {teams.map(
             (p)=> (<Team valor={p} carregaTeams={carregaTeams}></Team>) 
        )} 
    </div>
    );
}

export default ListaTeams;