import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFire, faTint, faBolt, faLeaf, faSnowflake, faMountain, faDove, faSkullCrossbones, faBrain, faTree, faBug } from '@fortawesome/free-solid-svg-icons';

// Definir el tipo para el mapeo de íconos
export const typeIcons: Record<string, IconDefinition> = {
    fire: faFire,
    water: faTint,
    electric: faBolt,
    grass: faLeaf,
    ice: faSnowflake,
    rock: faMountain,
    flying: faDove,
    poison: faSkullCrossbones,
    bug: faBug,
    ground: faTree,
    psychic: faBrain,
};
