type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export const handleInput =
  <T>(inputName: string, setFunc: StateSetter<T>) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFunc((prev) => ({ ...prev, [inputName]: value }));
  };
