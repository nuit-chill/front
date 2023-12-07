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
                    Choose your game scale
                </Heading>
                <Text className='marginBox' fontSize='lg'>Depending on your choice, you will be invited to make decisions as a single person or as a large political power (department/country).</Text>
                <div>
                    <Button className='marginBox' colorScheme='teal' size='lg' onClick={() => dispatch(toSmall())}>
                        Human Scale
                    </Button>
                    <Button className='marginBox' colorScheme='blue' size='lg' onClick={() => dispatch(toSmall())}>
                        Global Scale
                    </Button>
                </div>
            </div> :
            <div>game</div>
        }
    </>
}