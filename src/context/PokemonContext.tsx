import { createContext } from 'react';

interface ContextProps {
    onInputChange: any;
    valueSearch: any;
    onResetForm: any;
  }

export const PokemonContext = createContext<ContextProps>({} as ContextProps);