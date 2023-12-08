import { Box, List, ListItem } from "@chakra-ui/react";
import { CardSwiper } from "react-card-rotate-swiper";
import { Image } from "@chakra-ui/react";
import { SwipeableCard, direction } from "./swipeable-card.tsx";
import { Text } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { progress } from "framer-motion";

export interface DialogCardProps {
  question: string;
  no: string;
  yes: string;
  onAnswerChosen?: (rightAnswer: boolean) => void;
}

export interface Dialog {
  question: string;
  no: string;
  yes: string;
  response: string;
  response_no: string;
  response_yes: string;
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
    <Box w={"80vw"}>
      <Text align={"center"} h={"6em"}>
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
          opacity={state.direction == "left" ? 4 * state.progress : 0}
        >
          {props.dialogs[currentQuestion].yes}
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
          opacity={state.direction == "right" ? 4 * state.progress : 0}
        >
          {props.dialogs[currentQuestion].no}
        </Text>

        {/* We know we have a set number of cards: n times questions + n time answers */}
        <List key={props.dialogs[currentQuestion].question} position={"relative"}>
          {props.dialogs.map((dialog, index) => {
            return (
              // Question, then answer
              <Fragment key={index}>
                <ListItem key={index}>
                  <SwipeableCard
                    detectingSize={180}
                    horizontalOnly={true}
                    onSwipe={onSwipe}
                    onPreSwipe={onPreSwipe}
                    className={"swiper"}
                    contents={
                      <>
                        <Box borderRadius="lg" boxShadow="outline" position="absolute">
                          <Image borderRadius="lg" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                        </Box>
                      </>
                    }
                  />
                </ListItem>

                <ListItem key={-(index + 1)}>
                  <SwipeableCard
                    detectingSize={180}
                    horizontalOnly={true}
                    onSwipe={onSwipe}
                    onPreSwipe={onPreSwipe}
                    className={"swiper"}
                    contents={
                      <>
                        <Box borderRadius="lg" boxShadow="outline" position="absolute">
                          <Image borderRadius="lg" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                        </Box>
                      </>
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
