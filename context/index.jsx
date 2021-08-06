import { useState, createContext, useContext } from "react";

export const QuizContext = createContext();

export default function QuizProvider({ children }) {
  const [data, setData] = useState({});

  const setQuizValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <QuizContext.Provider value={{ data, setQuizValues }}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizData = () => useContext(QuizContext);