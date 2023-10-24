import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AppContext } from './useAppContext'

function AppContextProvider({children}) {
    const { isOpen: isContextOpen, onOpen: onContextOpen, onClose: onContextClose } = useDisclosure()
  return (
    <AppContext.Provider
        value={{
            isContextOpen,
            onContextOpen,
            onContextClose
        }}
    >
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider