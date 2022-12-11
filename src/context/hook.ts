import { useContext } from "react";
import { AppContext } from "./index";

export const useAppContext = (): any => useContext(AppContext);
