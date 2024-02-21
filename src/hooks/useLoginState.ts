import { useState } from "react";

export type LoginContextType = {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

const useLoginState = (): LoginContextType => {
  const [error, setError] = useState<string>("");
  return {
    error,
    setError,
  };
};

export default useLoginState;
