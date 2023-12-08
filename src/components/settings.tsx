import { Button, Heading, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, useColorMode } from "@chakra-ui/react"
import { useDispatch } from 'react-redux'
import { decrease, increase } from "../slices/font-size";
import SelectLanguage from "./select_language";
import { Divider } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


export const Settings = () => {
    const { t } = useTranslation("homepage");
    const dispatch = useDispatch();
    const { colorMode, toggleColorMode } = useColorMode();

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
        <Divider className="marginBox" />
        <span>{t("settings.switch_to")} </span>
        <Button onClick={toggleColorMode}
            rightIcon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}>
            {colorMode === 'light' ? t("settings.dark_mode") : t("settings.light_mode")}
        </Button>
    </PopoverBody>
</PopoverContent>
}