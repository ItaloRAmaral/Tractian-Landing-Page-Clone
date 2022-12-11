import { NavBar } from "../interfaces/interfaces";

export interface IAppContext {
  current: NavBar;
  isModalOpen: boolean;
  handleNavBar: (e: React.MouseEvent<HTMLElement>) => void;
  showModal: () => void;
}
