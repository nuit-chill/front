import { SettingsIcon } from "@chakra-ui/icons"
import { IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";
import Logo from '../assets/logo.svg';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div>
        <img src={Logo} alt="logo" />
        </div>
        <div>
            <Popover>
            <PopoverTrigger>
            <IconButton aria-label='Settings' isRound={true} variant='ghost' icon={<SettingsIcon w={30} h={30} color={"white"} />} />
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Settings</PopoverHeader>
                <PopoverBody>TODO</PopoverBody>
            </PopoverContent>
            </Popover>
        </div>
      </nav>
    )
  }
  
  export default Navbar