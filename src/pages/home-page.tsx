import { Button, Heading, ListIcon, ListItem } from '@chakra-ui/react'
import { UnorderedList } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'


export const HomePage = () => {
    const { t } = useTranslation("homepage")
    const navigate = useNavigate()

    return (
        <>
            <section className='welcome'>
                <Heading as='h1' size='xl'>{t("welcome.title")}</Heading>
                <p><i>{t("welcome.text")}</i></p>
                <Heading as='h2' size='lg'>{t("description.title")}</Heading>
                <p>{t("description.text")}</p>
            </section>
            <section className='gamerules'>
                <Heading as='h2' size='lg'>{t("gamerules.title")}</Heading>
                <p>{t("intro")}</p>
                <UnorderedList>
                    <ListItem>{t("gamerules.individual")}</ListItem>
                    <ListItem>{t("gamerules.president")}</ListItem>
                </UnorderedList>
                <p>{t("gamerules.text_start")}</p>
                <p>{t("gamerules.text_continue")}</p>
                <p>{t("gamerules.text_after")}</p>
                <p>{t("gamerules.text_end")}</p>
                <Button colorScheme='green' style={{margin: 10}} onClick={() => navigate('/game')}>{t("play_button")}</Button>
                </section>
            <section className='sources'>
                <Heading as='h2' size='lg'>{t("sources")}</Heading>
                <UnorderedList>
                    <ListItem><ListIcon as={ExternalLinkIcon} color='teal'/><Link color='teal' href='https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/' isExternal>https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/</Link></ListItem>
                    <ListItem><ListIcon as={ExternalLinkIcon} color='teal'/><Link color='teal' href='https://reseauactionclimat.org/comprendre-urgence/' isExternal>https://reseauactionclimat.org/comprendre-urgence/</Link></ListItem>
                    <ListItem><ListIcon as={ExternalLinkIcon} color='teal'/><Link color='teal' href='https://reseauactionclimat.org/urgence-climatique/' isExternal>https://reseauactionclimat.org/urgence-climatique/</Link></ListItem>
                    <ListItem><ListIcon as={ExternalLinkIcon} color='teal'/><Link color='teal' href='https://reseauactionclimat.org/wp-content/uploads/2023/03/rac-brochure-synthese-giec_web-leger.pdf' isExternal>https://reseauactionclimat.org/wp-content/uploads/2023/03/rac-brochure-synthese-giec_web-leger.pdf</Link></ListItem>
                    <ListItem><ListIcon as={ExternalLinkIcon} color='teal'/><Link color='teal' href='https://reseauactionclimat.org/publications/repondre-aux-defis-climatiques-lalimentation/' isExternal>https://reseauactionclimat.org/publications/repondre-aux-defis-climatiques-lalimentation/</Link></ListItem>
                    <ListItem><ListIcon as={ExternalLinkIcon} color='teal'/><Link color='teal' href='https://climat.cned.fr/formations/causes-et-attenuation/' isExternal>https://climat.cned.fr/formations/causes-et-attenuation/</Link></ListItem>
                    <ListItem><ListIcon as={ExternalLinkIcon} color='teal'/><Link color='teal' href='https://nosgestesclimat.fr/actions' isExternal>https://nosgestesclimat.fr/actions</Link></ListItem>
                </UnorderedList>
            </section>
        </>
    )
}