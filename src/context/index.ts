import { createContext } from "react";
import { IAppContext } from "./app-interface";

export const AppContext = createContext<IAppContext>(
  {} as unknown as IAppContext
);

export default AppContext;
