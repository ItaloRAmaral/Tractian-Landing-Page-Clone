import { Modal, NavBar } from "../interfaces/interfaces";

export interface IAppContext {
  current: NavBar;
  isModalOpen: Modal;
  handleNavBar: (e: React.MouseEvent<HTMLElement>) => void;
  showModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
