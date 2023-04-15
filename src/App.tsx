import { AppRouter } from './router/AppRouter';
import PokemonProvider  from './context/PokemonProvider';

function App() {
  
  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  )
}

export default App
