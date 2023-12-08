import { Select } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const SelectLanguage = () => {
    const { i18n } = useTranslation("homepage");
    console.log(i18n.language)
    return (
        <>
            <Select defaultValue={i18n.language}>
            <option onClick={() => i18n.changeLanguage("en")} value="en">en</option>
            <option onClick={() => i18n.changeLanguage("fr")} value="fr">fr</option>
            <option onClick={() => i18n.changeLanguage("de")} value="de">de</option>
            </Select>
        </>
    )
}

export default SelectLanguage;