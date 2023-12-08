import { SettingsIcon } from "@chakra-ui/icons"
import { IconButton, Popover, PopoverTrigger } from "@chakra-ui/react";
import Logo from '../assets/logo.svg';
import { Settings } from "./settings";
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
      <nav className="navbar">
        <div>
        <Link to='/'><img src={Logo} alt="return to home page logo" /></Link>
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