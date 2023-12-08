import { SettingsIcon } from "@chakra-ui/icons"
import { IconButton, Popover, PopoverTrigger } from "@chakra-ui/react";
import Logo from '../assets/ndi-logo_small.webp';
import { Settings } from "./settings";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'


const Navbar = () => {
    const { t } = useTranslation("homepage");

    return (
      <nav className="navbar">
        <div>
        <Link to='/'><img height='50px' width='50px' src={Logo} alt={t("settings.return")} /></Link>
        </div>
        <div>
            <Popover>
            <PopoverTrigger>
            <IconButton aria-label='Settings' isRound={true} variant='ghost' icon={<SettingsIcon w={30} h={30} color={"white"} />} />
            </PopoverTrigger>
            <Settings />
            </Popover>
        </div>
      </nav>
    )
  }
  
  export default Navbar