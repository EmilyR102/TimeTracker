import {createContext} from 'react'

interface UserContextInterface {
  name: string;
  username: string;
  password: string;
  setName: (name: string) => void;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
}

const UserContext = createContext<UserContextInterface>({
  name: "",
  username: "",
  password: "",
  setName: () => {},
  setUsername: () => {},
  setPassword: () => {},
});

export default UserContext
