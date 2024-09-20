import c from "classnames";
import { useTheme } from "contexts/use-theme";
import { usePokemon, usePokemonList, useTextTransition } from "hooks";
import {useEffect, useState} from 'react';
import { randomMode } from "utils/random";
import { Button } from "./button";

import "./pokedex.css";
import {PokedexPanel} from './pokedex-panel.tsx';
import {PokemonTypeList} from './pokemon-type-list.tsx';
import {PokemonWeaknessList} from './pokemon-weakness-list.tsx';
import {TeamSection} from './team-section.tsx';
import {Pokemon} from '../models.ts';
import {LedDisplay} from './led-display.tsx';

export function Pokedex() {
  const { theme } = useTheme();
  const { ready, resetTransition } = useTextTransition();
  const { pokemonList } = usePokemonList();
  const [i, setI] = useState(0);
  const { pokemon: selectedPokemon } = usePokemon(pokemonList[i]);
  const { pokemon: nextPokemon } = usePokemon(pokemonList[i + 1]);
  const [weaknesses, setWeaknesses] = useState<string[]>([]);
  const [team, setTeam] = useState<Pokemon[]>([]);
  const prev = () => {
    resetTransition();
    if (i === 0) {
      setI(pokemonList.length - 1);
    }
    setI((i) => i - 1);
  };

  const next = () => {
    resetTransition();
    if (i === pokemonList.length - 1) {
      setI(0);
    }
    setI((i) => i + 1);
  };
  const fetchWeaknesses = async () => {
    if (selectedPokemon) {
      const typeUrls = selectedPokemon.types.map((type: { type: { url: string } }) => type.type.url);
      const weaknessesSet = new Set<string>();
      for (const url of typeUrls) {
        const response = await fetch(url);
        const data = await response.json();
        const doubleDamageFrom: { name: string }[] = data.damage_relations.double_damage_from;
        doubleDamageFrom.forEach((weakness) => weaknessesSet.add(weakness.name));
        setWeaknesses(Array.from(weaknessesSet));
      }
    }
  };

  useEffect(() => {
    fetchWeaknesses();
  }, [selectedPokemon]);

  const addToTeam = () => {
    if (team.length < 6 && !team.some(pokemon => pokemon.name === selectedPokemon!.name)) {
      setTeam([...team, selectedPokemon!]);
    } else if (team.length >= 6) {
      alert('El equipo ya tiene 6 Pokémon');
    }
  };

  const removeFromTeam = (name: string) => {
    setTeam(team.filter(pokemon => pokemon.name !== name));
  };
  return (
    <div className={c("pokedex", `pokedex-${theme}`)}>
      <div className="panel left-panel">
        <PokedexPanel
          selectedPokemon={selectedPokemon}
          ready={ready}
          randomMode={randomMode}
          addToTeam={addToTeam}
          teamFull={team.length === 6}
        />
        <div className="list-description">
          <PokemonTypeList types={selectedPokemon?.types || []} />
          <PokemonWeaknessList weaknesses={weaknesses} />
        </div>
      </div>
      <div className="panel right-panel">
        <div className="controls lights">
          <LedDisplay color="blue"/>
          <LedDisplay color="red"/>
          <LedDisplay color="yellow"/>
        </div>
        <PokedexPanel
            selectedPokemon={nextPokemon}
            ready={ready}
            randomMode={randomMode}
        />
        <div className="controls">
          <Button label="prev" onClick={prev}/>
          <Button label="next" onClick={next}/>
        </div>
      </div>
      <TeamSection team={team} removeFromTeam={removeFromTeam}/>
    </div>
  );
}
