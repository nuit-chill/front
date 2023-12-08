import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store';
import { Button, Heading } from '@chakra-ui/react';
import { toSmall } from '../slices/scale';
import { useTranslation } from 'react-i18next'

export const GamePage = () => {
    const scale = useSelector((state: RootState) => state.scale.value);
    const dispatch = useDispatch();
    const { t } = useTranslation("homepage");

    return <>
        {
            scale === 0 ? <div>
                <Heading as='h1' size='xl'>
                    {t("game.title")}
                </Heading>
                <p className='marginBox'>{t("game.text")}</p>
                <div>
                    <Button className='marginBox' colorScheme='green' size='lg' onClick={() => dispatch(toSmall())}>
                    {t("gamerules.individual")}
                    </Button>
                    <Button className='marginBox' colorScheme='blue' size='lg' onClick={() => dispatch(toSmall())}>
                    {t("gamerules.president")}
                    </Button>
                </div>
            </div> :
            <div>{t("play_button")}</div>
        }
    </>
}