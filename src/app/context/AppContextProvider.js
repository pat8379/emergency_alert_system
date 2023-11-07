import { useDisclosure } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { AppContext } from "./useAppContext";
import { getPath } from "./paths";

function AppContextProvider({ children }) {
  const {
    isOpen: isContextOpen,
    onOpen: onContextOpen,
    onClose: onContextClose,
  } = useDisclosure();
  const [exit1, setExit1] = useState();
  const [exit2, setExit2] = useState(210);
  const [exit3, setExit3] = useState(230);
  const [exit4, setExit4] = useState(540);
  const [exit5, setExit5] = useState(1000);
  const [exit6, setExit6] = useState(760);

  const [alertTo, setAlertTo] = useState(4);

  const getExits = (num) => {
    switch (num) {
      case 1:
        return exit1;
      case 2:
        return exit2;
      case 3:
        return exit3;
      case 4:
        return exit4;
      case 5:
        return exit5;
      case 6:
        return exit6;

      default:
        break;
    }
    return exit1;
  };

  const setExits = (value, exit) => {
    switch (exit) {
      case 1:
        setExit1(value);
        break;
      case 2:
        setExit2(value);
        break;
      case 3:
        setExit3(value);
        break;
      case 4:
        setExit4(value);
        break;
      case 5:
        setExit5(value);
        break;
      case 6:
        setExit6(value);
        break;

      default:
        break;
    }
  };

  const returnColor = (value) => {
    if (value >= 700) {
      return "red";
    } else if (value > 400) {
      return "#F4B14A";
    } else if (value > 0) {
      return "green";
    } else {
      return "grey";
    }
  };

  const algorithm = () => {
    console.log(exit1)
    if (exit1 < 700) {
      setAlertTo(1)
      return
    }
    if (exit2 < 700) {
      setAlertTo(2)
      return
    }
    if (exit4 < 700) {
      setAlertTo(4)
      return
    }
    if (exit5 < 700) {
      setAlertTo(5)
      return
    }
    if (exit3 < 700) {
      setAlertTo(3)
      return
    }


    if (exit6 < 700) {
      setAlertTo(6)
      return
    }
    setAlertTo(1)
    return
  }

  const decideBorderColor = (item, position) => {
    const path = getPath(alertTo)
    if (path[item] === position) {
      return "7px solid blue"
    }
    return ""
  }

  useEffect(() => {
    algorithm()
  
  }, [exit1,exit2,exit3,exit4,exit5,exit6])
  
  return (
    <AppContext.Provider
      value={{
        isContextOpen,
        onContextOpen,
        onContextClose,
        getExits,
        setExits,
        returnColor,
        decideBorderColor,
        alertTo,
        setAlertTo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
