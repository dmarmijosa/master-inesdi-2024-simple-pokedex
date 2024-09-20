import {Button} from './button.tsx';
import c from 'classnames';

export const PokedexPanel = ({ selectedPokemon, ready, randomMode, addToTeam, teamFull }: any) => {
    return (
        <>
            <div className="screen main-screen">
                {selectedPokemon && (
                    <img
                        className={c(
                            'sprite',
                            'obfuscated',
                            ready && 'ready',
                            ready && `ready--${randomMode()}`
                        )}
                        src={selectedPokemon.sprites.front_default}
                        alt={selectedPokemon.name}
                    />
                )}
            </div>

            <div className="screen name-display">
                <div className={c('name', 'obfuscated', ready && 'ready', ready && `ready--${randomMode()}`)}>
                    {selectedPokemon?.name}
                </div>
            </div>

            {addToTeam && !teamFull && (
                <Button label="Añadir"
                        onClick={addToTeam}/>
            )}

            {teamFull && <p>El equipo está completo</p>}
        </>
    );
};
