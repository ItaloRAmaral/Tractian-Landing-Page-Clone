import React, { ReactNode, useState } from "react";
import AppContext from "./index";
import { Modal, NavBar } from "../interfaces/interfaces";

interface IProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IProps): JSX.Element => {
  const stateProp: NavBar = {
    solucoes: false,
    industria: false,
    sobre: false,
    materiais: false,
  };
  const modalProp: Modal = {
    demoModal: false,
    videoModal: false,
  };
  const [current, setCurrent] = useState(stateProp);
  const [isModalOpen, setIsModalOpen] = useState(modalProp);

  const handleNavBar = (e: React.MouseEvent<HTMLElement>): void => {
    const { id } = e.currentTarget;

    switch (id) {
      case "solucoes":
        setCurrent({
          solucoes: !current.solucoes,
          industria: false,
          sobre: false,
          materiais: false,
        });
        break;
      case "industria":
        setCurrent({
          solucoes: false,
          industria: !current.industria,
          sobre: false,
          materiais: false,
        });
        break;
      case "sobre":
        setCurrent({
          solucoes: false,
          industria: false,
          sobre: !current.sobre,
          materiais: false,
        });
        break;
      case "materiais":
        setCurrent({
          solucoes: false,
          industria: false,
          sobre: false,
          materiais: !current.materiais,
        });
        break;
      case "blog":
        setCurrent({
          solucoes: false,
          industria: false,
          sobre: false,
          materiais: false,
        });
        break;
      default:
        break;
    }
  };

  const showModal = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { name } = e.currentTarget;
    console.log(name);

    switch (name) {
      case "demoModal":
        setIsModalOpen({
          demoModal: !isModalOpen.demoModal,
          videoModal: false,
        });
        setCurrent({
          solucoes: false,
          industria: false,
          sobre: false,
          materiais: false,
        });
        break;
      case "videoModal":
        setIsModalOpen({
          demoModal: false,
          videoModal: !isModalOpen.videoModal,
        });
        setCurrent({
          solucoes: false,
          industria: false,
          sobre: false,
          materiais: false,
        });
        break;
      default:
        break;
    }
  };

  const contextValue = {
    current,
    isModalOpen,
    handleNavBar,
    showModal,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
