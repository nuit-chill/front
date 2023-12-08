import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { Button, Heading } from "@chakra-ui/react";
import { toSmall } from "../slices/scale";
import { useTranslation } from "react-i18next";
import DialogCard from "../components/dialog-card";

export const GamePage = () => {
  const scale = useSelector((state: RootState) => state.scale.value);
  const dispatch = useDispatch();
  const { t } = useTranslation("homepage");

  return (
    <>
      {scale === 0 ? (
        <div>
          <Heading as="h1" size="xl">
            {t("game.title")}
          </Heading>
          <p className="marginBox">{t("game.text")}</p>
          <div>
            <Button className="marginBox" colorScheme="green" size="lg" onClick={() => dispatch(toSmall())}>
              {t("gamerules.individual")}
            </Button>
            <Button className="marginBox" colorScheme="blue" size="lg" onClick={() => dispatch(toSmall())}>
              {t("gamerules.president")}
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <DialogCard
            dialogs={[
              {
                question: "Est-ce qu'il faut réduire les trajets en avion ?",
                bad: "Non, c'est le moyen le plus simple à voyager.",
                good: "Oui, il émets beaucoup gaz à effet de serre.",
                response:
                  "Les avions sont responsable de 2,4% d'émission de CO2. Pour l'instant, il n'y a pas de solution d'énérgie qui permettra de suivre la croissance de ce secteur. Leur réduction est aujourd'hui le moyen le plus efficace pour réduire ces émissions.",
                response_good:
                  "Même si c'est un moyen souvent utilisé même à courte distances en raison de coûts et de temps, il est important de réduire leur utilisation.",
                response_bad: "Simple ne veut pas dire bon pour l'environnement.",
              },
              {
                question: "Quand faut-il remplacer vos vieux appareils ?",
                good: "Quand ils sont cassé et impossible de réparer",
                bad: "Quand il y a le nouvel modèle qui est sortie.",
                response:
                  "Lors de l'achat d'un appareil éléctronique, il est important de garder en tête que vous l'allez utiliser pour plusieurs années. N'effectuez pas d'achats à cause des tendances, choississez le à cause des functionnalités, peut-être même de vos pré-connaissances sur ce modèle et vos compétences à le réparer. Chaque appareil a un coût de production et émissions de gaz à effets de serre. En conséquence, en acheter un nouveau tous les ans laisse une trace de carbone importante.",
                response_good: "C'est la bonne réponse !",
                response_bad: "Ne vous laissez pas influencer aussi facilement par les foules!",
              },
            ]}
          />
        </div>
      )}
    </>
  );
};
