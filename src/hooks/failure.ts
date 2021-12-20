import { useState } from "react";

export type UseFailure = {
  failure: { enable: boolean; message: string };
  openFailure: (msg: string) => void;
  closeFailure: () => void;
};

export default function useFailure(): UseFailure {
  const [failure, setFailure] = useState({ enable: false, message: "" });

  function openFailure(msg: string) {
    setFailure({ enable: true, message: msg });
  }

  function closeFailure() {
    setFailure({ enable: false, message: "" });
  }

  return { failure, openFailure, closeFailure };
}
