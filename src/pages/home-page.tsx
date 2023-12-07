import { Button, ListIcon, ListItem } from '@chakra-ui/react'
import { UnorderedList } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className='welcome'>
                <h1>Bienvenue sur NDIECO</h1>
                <p><i>Un site qui aspire à élargir vos connaissances sur le changement climatique.</i></p>
                <h2>Description</h2>
                <p>Ce site vous permet de tester vos connaissances autour de l'écologie et du climat graçe à un petit questionnaire interactif. Des incendies, vagues de chaleurs, séchéresses ainsi que la monté des haut et la fonte des glaciers nous laisse comprendre une chose: Le réchauffement climatique est réel et il faut le combattre. Mais comment ? Que pouvons nous faire ? Comment lutter contre un phénomène aussi important ? Il y a des solutions claires et efficaces qui existent. Chacun d'entre nous peut aider, même à une petite échelle. </p>
            </section>
            <section className='gamerules'>
                <h2>Comment jouer</h2>
                <p>Avant de commencer une partie, vous aurez le choix entre deux types de joueurs:</p>
                <UnorderedList>
                    <ListItem>Individu</ListItem>
                    <ListItem>Président</ListItem>
                </UnorderedList>
                <p>En fonction de vôtre choix, les questions qui vous seront posé vont varier.</p>
                <p>Une série de 6 cartes tiré aléatoirement vous serait montré. Pour chaque carte vous avez la possibilité de choisir entre deux réponses en cliquant sur la carte et la traînant sois à gauche ou à droite. Un petit dialogue apparaisseras qui vous donneras plus de détails sur le choix que vous êtês en traîn de faire. Une foix vôtre choix fait, vous n'avez plus qu'à relacher la carte. Une autre carte apparaîtras qui réponderas à la question initiale. Vous pouvez la faire disparaître de même façon pour passer à la question suivante.</p>
                <p>En haut de la page vous trouverez une bar indiquant votre score. Elle va d'un démon symbolisant la destruction de la Terre liée au rechaufement climatique à un ange qui représente un futur d'éspoir. A chacune de vos réponses, votre score seras ajoustée. Au début du jeu vous aurez un score neutre. Le but est de le passer complètement du côté de l'ange après les 6 questions.</p>
                <p>Pour lancer une partie il vous faut désormais plus que cliquer le button ci-dessous. Bonne chance !</p>
                <Button colorScheme='green' style={{margin: 10}} onClick={() => navigate("/game")}>Commencer une partie</Button>
                </section>
            <section className='sources'>
                <h2>Sources</h2>
                <UnorderedList>
                    <ListItem><ListIcon as={ExternalLinkIcon} color='teal'/><Link color='teal' href='https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/' isExternal>https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/</Link></ListItem>
                    <ListItem><ListIcon as={ExternalLinkIcon} color='teal'/><Link color='teal' href='https://reseauactionclimat.org/comprendre-urgence/' isExternal>https://reseauactionclimat.org/comprendre-urgence/</Link></ListItem>
                    <ListItem><ListIcon as={ExternalLinkIcon} color='teal'/><Link color='teal' href='https://reseauactionclimat.org/urgence-climatique/' isExternal>https://reseauactionclimat.org/urgence-climatique/</Link></ListItem>
                    <ListItem><ListIcon as={ExternalLinkIcon} color='teal'/><Link color='teal' href='https://reseauactionclimat.org/wp-content/uploads/2023/03/rac-brochure-synthese-giec_web-leger.pdf' isExternal>https://reseauactionclimat.org/wp-content/uploads/2023/03/rac-brochure-synthese-giec_web-leger.pdf</Link></ListItem>
                    <ListItem><ListIcon as={ExternalLinkIcon} color='teal'/><Link color='teal' href='https://reseauactionclimat.org/publications/repondre-aux-defis-climatiques-lalimentation/' isExternal>https://reseauactionclimat.org/publications/repondre-aux-defis-climatiques-lalimentation/</Link></ListItem>
                </UnorderedList>
            </section>
        </>
    )
}