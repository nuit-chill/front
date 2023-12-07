import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store';
import { Button, Heading, Text } from '@chakra-ui/react';
import { toSmall } from '../slices/scale';

export const GamePage = () => {
    const scale = useSelector((state: RootState) => state.scale.value);
    const dispatch = useDispatch();

    return <>
        {
            scale === 0 ? <div>
                <Heading as='h3' size='lg'>
                    Choisissez votre échelle de jeu
                </Heading>
                <Text className='marginBox' fontSize='lg'>Selon votre choix, vous serez invité à prendre des décisions pour une seule personne ou pour un grand pouvoir politique (département/pays).</Text>
                <div>
                    <Button className='marginBox' colorScheme='teal' size='lg' onClick={() => dispatch(toSmall())}>
                        Individu
                    </Button>
                    <Button className='marginBox' colorScheme='blue' size='lg' onClick={() => dispatch(toSmall())}>
                        Président
                    </Button>
                </div>
            </div> :
            <div>game</div>
        }
    </>
}