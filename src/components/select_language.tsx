import { Select } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const SelectLanguage = () => {
    const { i18n } = useTranslation("homepage");
    
    return (
        <>
            <Select defaultValue={i18n.language}
            onChange={(ev) => i18n.changeLanguage(ev.target.value)}>
            <option value="en">en</option>
            <option value="fr">fr</option>
            <option value="de">de</option>
            </Select>
        </>
    )
}

export default SelectLanguage;