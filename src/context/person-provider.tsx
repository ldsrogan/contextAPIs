import { ReactElement, useMemo, useState } from 'react';
import PersonContext from './person-context';

type PersonProviderProps = {
  children: ReactElement;
};

export default function PersonProvider({ children }: PersonProviderProps) {
  const [name, setName] = useState<string>('');

  const value = useMemo(
    () => ({
      name,
      setName,
    }),
    [name]
  );

  return <PersonContext.Provider value={value}>{children}</PersonContext.Provider>;
}
