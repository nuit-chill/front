import { Button, Heading, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader } from "@chakra-ui/react"
import { useDispatch } from 'react-redux'
import { decrease, increase } from "../slices/font-size";
import SelectLanguage from "./select_language";
import { Divider } from '@chakra-ui/react'

export const Settings = () => {
    const dispatch = useDispatch();

    return <PopoverContent style={{margin: '5px'}}>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader><Heading as='h1' size='md'>Paramètres</Heading></PopoverHeader>
    <PopoverBody>
        <SelectLanguage />
        <Divider className="marginBox" />
        <p>Changer la taille de la police&nbsp;:</p>
        <Button className="marginBox" onClick={() => dispatch(increase())}>A+</Button>
        <Button className="marginBox" onClick={() => dispatch(decrease())}>A-</Button>
    </PopoverBody>
</PopoverContent>
}