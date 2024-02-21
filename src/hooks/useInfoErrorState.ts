import { useState } from "react";

type InfoValue = { open: boolean; message: string; action: () => void };
type ErrorValue = InfoValue & { desc: string };

export type InfoErrorContextType = {
  error: ErrorValue;
  setError: React.Dispatch<React.SetStateAction<ErrorValue>>;
  info: InfoValue;
  setInfo: React.Dispatch<React.SetStateAction<InfoValue>>;
};

const useInfoErrorState = (): InfoErrorContextType => {
  const [error, setError] = useState<ErrorValue>({
    open: false,
    message: "",
    action: () => undefined,
    desc: "",
  });
  const [info, setInfo] = useState<InfoValue>({
    open: false,
    message: "",
    action: () => undefined,
  });
  return {
    error,
    setError,
    info,
    setInfo,
  };
};

export default useInfoErrorState;
