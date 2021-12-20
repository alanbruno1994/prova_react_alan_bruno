import { useState, useCallback } from "react";

export type UseFailure = {
  failure: { enable: boolean; message: string };
  openFailure: (msg: string) => void;
  closeFailure: () => void;
};

export default function useFailure(): UseFailure {
  const [failure, setFailure] = useState({ enable: false, message: "" });

  const openFailure = useCallback((msg: string) => {
    setFailure({ enable: true, message: msg });
  }, []);

  const closeFailure = useCallback(() => {
    setFailure({ enable: false, message: "" });
  }, []);

  return { failure, openFailure, closeFailure };
}
