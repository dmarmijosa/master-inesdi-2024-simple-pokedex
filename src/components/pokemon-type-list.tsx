import {typeIcons} from '../utils/typeIcons.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const PokemonTypeList = ({types}:any) => {
    return (
        <div>
            <h4>Tipo:</h4>
            <ul>
                {types.map((type: any, index: number) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={typeIcons[type.type.name]} style={{ marginRight: '8px' }} />
                        {type.type.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
