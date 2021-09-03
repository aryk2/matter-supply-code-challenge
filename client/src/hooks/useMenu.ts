import { useState } from 'react'
import { useHistory } from "react-router-dom";

export const useMenu = () => {
    const [ menuOpen, setMenuOpen ] = useState(false);
    const history = useHistory();

    const handleDrawerOpen = () => {
        setMenuOpen(true);
      };
    
    const handleDrawerClose = () => {
        setMenuOpen(false);
    };

    const handleMenuClick = (path: string) => {
        history.push(path);
    };

    return {
        menuOpen,
        handleDrawerOpen,
        handleDrawerClose,
        handleMenuClick
    }
}