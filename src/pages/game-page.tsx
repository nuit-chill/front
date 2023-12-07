import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store';
import { Button, Heading } from '@chakra-ui/react';
import { toSmall } from '../slices/scale';

export const GamePage = () => {
    const scale = useSelector((state: RootState) => state.scale.value);
    const dispatch = useDispatch();

    return <>
        {
            scale === 0 ? <div>
                <Heading as='h1' size='xl'>
                    Choisissez votre échelle de jeu
                </Heading>
                <p className='marginBox'>Selon votre choix, vous serez invité à prendre des décisions pour une seule personne ou pour un grand pouvoir politique (département/pays).</p>
                <div>
                    <Button className='marginBox' colorScheme='green' size='lg' onClick={() => dispatch(toSmall())}>
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