import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { QuizProvider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <QuizProvider>
      <Component {...pageProps} />
    </QuizProvider>
  );
}

export default MyApp;
