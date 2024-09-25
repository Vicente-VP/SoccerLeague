import BarraMenu from "../../Componentes/BarraMenu";
import CadastroTeams from "../../Componentes/CadastroTeams";
import './style.css';

export default function PaginaCadastroTeam(){
    return(
        <>
            <BarraMenu/>
            <div className="cadastro-section">
                <CadastroTeams />
            </div>
        </>
    );
}