import { Button, Heading, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader } from "@chakra-ui/react"
import { useDispatch } from 'react-redux'
import { decrease, increase } from "../slices/font-size";
import SelectLanguage from "./select_language";
import { Divider } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'


export const Settings = () => {
    const { t } = useTranslation("homepage");
    const dispatch = useDispatch();

    return <PopoverContent style={{margin: '5px'}}>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader><Heading as='h1' size='md'>{t("settings.title")}</Heading></PopoverHeader>
    <PopoverBody>
        <SelectLanguage />
        <Divider className="marginBox" />
        <p>{t("settings.fontsize")}&nbsp;:</p>
        <Button className="marginBox" onClick={() => dispatch(increase())}>A+</Button>
        <Button className="marginBox" onClick={() => dispatch(decrease())}>A-</Button>
    </PopoverBody>
</PopoverContent>
}