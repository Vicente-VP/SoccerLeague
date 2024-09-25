import axios from "axios";
import styled from "styled-components";
import Logo from "../../Images/Logo_soccerLeague.png";
import './style.css';

const Logo_CadsoccerLeague = styled.img`
  width: 295px;
  height: 305px;
`;

// Feito

export default function CadastroTeams({carregaTeams}) {
    return(
            <div className="cardCad">
                <div className="text-section">
                    <Logo_CadsoccerLeague src={Logo} alt="Logo" />
                    <h2>Venha participar da Liga</h2>
                </div>
                <div className="form-section">
                    <form>
                        <label>Nome Time:</label>
                        <input type="text" id="nome" name="nome"></input> <br/>
                        <label>Treinador:</label>
                        <input type="text" id="treinador" name="treinador"></input> <br/>
                        <label>Presidente</label>
                        <input type="text" id="presidente" name="presidente"></input><br/>
                        <label>Estádio</label>
                        <input type="text" id="estadio" name="estadio"></input><br/>
                        <label>Cidade</label>
                        <input type="text" id="cidade" name="cidade"></input><br/>
                        <label>Escudo</label>
                        <input type="text" id="escudo" name="escudo"></input><br/>
                        <button type="button" onClick={adicionaProduto}>Adicionar</button>
                    </form>
                </div>
            </div>
    );
    function adicionaProduto(){
        const nome_team = document.getElementById('nome').value;
        const coach = document.getElementById('treinador').value;
        const president = document.getElementById('presidente').value;
        const stadium = document.getElementById('estadio').value;
        const city = document.getElementById('cidade').value;
        const team_shield = document.getElementById('escudo').value;
        const teams = {nome_team,coach,president,stadium,city,team_shield};
    
        console.log(teams);
        axios.post('https://project-ea-football.onrender.com/teams', teams).then(()=>carregaTeams());
    }
}