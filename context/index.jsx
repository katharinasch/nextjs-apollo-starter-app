import { useState, createContext, useContext } from "react";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [data, setData] = useState({});

  const setQuizValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values
    }));
  };

  return (
    <QuizContext.Provider value={{ data, setQuizValues }}>
      {children}
    </QuizContext.Provider>
  );
}
export default QuizContext;
export const useQuizData = () => useContext(QuizContext);