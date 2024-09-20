import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { typeIcons } from 'utils/typeIcons';

export const PokemonWeaknessList = ({ weaknesses }: any) => {
    return (
        weaknesses.length > 0 && (
            <div className="debilidades-list">
                <h4>Debilidades:</h4>
                <ul>
                    {weaknesses.map((weakness: string, index: number) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={typeIcons[weakness]} style={{ marginRight: "8px" }} />
                            {weakness}
                        </li>
                    ))}
                </ul>
            </div>
        )
    );
};
