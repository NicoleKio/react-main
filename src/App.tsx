import React, {FC} from 'react';
import './App.css';
import {people} from "./data";
import {ICharacter} from "./Models/ICharacter";
import Character from "./Components/Character";



const App: FC = () => {
  return (
      <div>
          {
              people.map((character:ICharacter)=>
                <Character character={character}>{character.relatives}</Character>

              )
          }
      </div>
  );
}

export default App;
