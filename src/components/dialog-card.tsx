import { Box, Center, Flex, List, ListItem, Square } from "@chakra-ui/react";
import { CardSwiper } from "react-card-rotate-swiper";
import { Image } from "@chakra-ui/react";
import { SwipeableCard, direction } from "./swipeable-card.tsx";
import { Text } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { progress } from "framer-motion";
import Angel1 from "../assets/sprites/angel1.webp";
import Angel2 from "../assets/sprites/angel2.webp";
import Angel3 from "../assets/sprites/angel3.webp";
import Angel4 from "../assets/sprites/angel4.webp";
import Angel5 from "../assets/sprites/angel5.webp";
import Demon1 from "../assets/sprites/demon1.webp";
import Demon2 from "../assets/sprites/demon2.webp";
import Demon3 from "../assets/sprites/demon3.webp";
import Demon4 from "../assets/sprites/demon4.webp";
import Demon5 from "../assets/sprites/demon5.webp";

export interface DialogCardProps {
  question: string;
  no: string;
  yes: string;
  onAnswerChosen?: (rightAnswer: boolean) => void;
}

export interface Dialog {
  question: string;
  bad: string;
  good: string;
  response: string;
  response_bad: string;
  response_good: string;
}

export interface GameProps {
  dialogs: Dialog[];
}

function DialogCard(props: GameProps) {
  // State of the card that is used
  const [state, setState] = useState<{ progress: number; direction: direction }>({
    progress: 0,
    direction: "none",
  });

  // State related to current game state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [dialogState, setDialogState] = useState<"question" | "answer">("question");
  const [logo, setLogo] = useState(
    [Angel1, Angel2, Angel3, Angel4, Angel5, Demon1, Demon2, Demon3, Demon4, Demon5][Math.ceil(Math.random() * 9)]
  );
  const onPreSwipe = (earlyDir: direction, progress: number) => {
    //    console.log({ earlyDir, progress });

    setState({ progress, direction: earlyDir });
  };

  const onSwipe = (direction: direction) => {
    setState({ progress: 0, direction: "none" });
    if (direction == "none") return;
    // TODO find a way to redraw the text without killing the current gasp animation
    // In the meantime, a small wait is done.
    setTimeout(() => {
      if (dialogState == "question") {
        setDialogState("answer");
      } else {
        setDialogState("question");
        setCurrentQuestion((currentQuestion) => Math.min(currentQuestion + 1, props.dialogs.length - 1));
      }
    }, 500);
  };

  return (
    <Box w={"100%"}>
      <Text align={"center"} marginBottom={4}>
        {dialogState == "question" ? props.dialogs[currentQuestion].question : props.dialogs[currentQuestion].response}
      </Text>

      <Box pos={"relative"}>
        <Text
          pointerEvents="none"
          userSelect="none"
          pos={"absolute"}
          zIndex={1}
          //TODO dynamic color
          bgColor={"#666666"}
          top={0}
          p={1}
          w={"55%"}
          left={"-5%"}
          textAlign={"center"}
          borderRadius="md"
          opacity={state.direction == "left" && dialogState == "question" ? 4 * state.progress : 0}
        >
          {props.dialogs[currentQuestion].good}
        </Text>

        <Text
          pointerEvents="none"
          userSelect="none"
          pos={"absolute"}
          zIndex={1}
          //TODO dynamic color
          bgColor={"#666666"}
          right={"-5%"}
          p={1}
          w={"55%"}
          textAlign={"center"}
          borderRadius="md"
          opacity={state.direction == "right" && dialogState == "question" ? 4 * state.progress : 0}
        >
          {props.dialogs[currentQuestion].bad}
        </Text>

        {/* We know we have a set number of cards: n times questions + n time answers */}

        <List key={props.dialogs[currentQuestion].question} position={"relative"}>
          {props.dialogs.map((dialog, index) => {
            return (
              // Question, then answer
              <Fragment key={index}>
                <ListItem key={index}>
                  <SwipeableCard
                    detectingSize={150}
                    horizontalOnly={true}
                    onSwipe={onSwipe}
                    onPreSwipe={onPreSwipe}
                    className={"swiper"}
                    contents={
                      <Center w={"100%"}>
                        <Box marginTop={"100%"} borderRadius="lg" boxShadow="outline" position="absolute">
                          <Image borderRadius="lg" src={logo} alt="Dan Abramov" />
                        </Box>
                      </Center>
                    }
                  />
                </ListItem>

                <ListItem key={-(index + 1)}>
                  <SwipeableCard
                    detectingSize={140}
                    horizontalOnly={true}
                    onSwipe={onSwipe}
                    onPreSwipe={onPreSwipe}
                    className={"swiper"}
                    contents={
                      <Center w={"100%"}>
                        <Box marginTop={"100%"} borderRadius="lg" boxShadow="outline" position="absolute">
                          <Image borderRadius="lg" src={logo} alt="Dan Abramov" />
                        </Box>
                      </Center>
                    }
                  />
                </ListItem>
              </Fragment>
            );
          })}
        </List>
      </Box>
    </Box>
  );
}

export default DialogCard;
