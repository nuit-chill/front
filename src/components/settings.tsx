import { Button, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader } from "@chakra-ui/react"
import { useDispatch } from 'react-redux'
import { decrease, increase } from "../slices/font-size";

export const Settings = () => {
    const dispatch = useDispatch();

    return <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Paramètres</PopoverHeader>
    <PopoverBody>
        <p>Changer la taille de la police&nbsp;:</p>
        <Button className='marginBox' onClick={() => dispatch(increase())}>A+</Button>
        <Button className="marginBox" onClick={() => dispatch(decrease())}>A-</Button>
    </PopoverBody>
</PopoverContent>
}