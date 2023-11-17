import { createContext } from 'react';

interface IPersonContext {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const PersonContext = createContext<IPersonContext>({} as IPersonContext);

export default PersonContext;
