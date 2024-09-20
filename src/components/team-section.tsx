import "./team-section.css";
export const TeamSection = ({ team, removeFromTeam }: any) => {
    return (
        <div className="team-section">
            <h4>Equipo actual:</h4>
            <ul>
                {team.map((pokemon: any, index: number) => (
                    <li key={index} style={{ position: 'relative', backgroundImage: `url(${pokemon.sprites.front_default})` }}>
                        <p>{pokemon.name}</p>
                        <button
                            className="button-delete"
                            onClick={() => removeFromTeam(pokemon.name)}
                        >
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
