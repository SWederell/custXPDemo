import { MultiChoice, Range, TextQuestion } from "./questions";
import BooleanQuestion from "./questions/BooleanQuestion";
import { View } from "./Themed";

export default function Question({ question }) {
  const returnQuestion = () => {
    switch (question.type.toString().toUpperCase()) {
      case "TEXT":
        return <TextQuestion question={question} />;
      case "MULTI":
        return <MultiChoice question={question} />;
      case "RANGE":
        return <Range question={question} />;
      case "BOOLEAN":
        return <BooleanQuestion question={question} />;
      default:
        break;
    }
  };
  // console.log(question);
  return <View style={Styles.container}>{returnQuestion(question)}</View>;
}

const Styles = {
  container: {
    height: "auto",
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
};
