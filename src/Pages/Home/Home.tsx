import { useEffect } from "react";
import { Header, QuizSelector } from "../../Components";
import { useData } from "../../Context/QuizContext";

export default function Home() {
  const { dispatch } = useData();
  
  useEffect(() => {
    dispatch({ type: "RESET_STATE" });
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Header title={"Quiz Bank"} />
      <QuizSelector />
    </div>
  );
}
