import { createContext, ReactNode, useState, useContext } from "react";
import { Polymorphic } from "./types";

type Mode = "abstract" | "concrete";

interface Context {
  mode: Mode;
  renderPolymorphic: <T>(
    data: Polymorphic<T> | T,
    fn?: (T) => ReactNode
  ) => ReactNode;
  setCurrentMode: (mode: Mode) => void;
}

const renderPolymorphic = <T extends unknown>(currentMode: Mode) => (
  data: Polymorphic<T> | T,
  fn: (T) => ReactNode = (t) => t
) => fn((data as Polymorphic<T>).isPolymorphic ? data[currentMode] : data);

const defaultContext: Context = {
  mode: "concrete",
  renderPolymorphic: renderPolymorphic("concrete"),
  setCurrentMode: () => {},
};

const Context = createContext(defaultContext);

export const PolymorphicContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [mode, setCurrentMode] = useState<Mode>("concrete");

  const context: Context = {
    mode,
    renderPolymorphic: renderPolymorphic(mode),
    setCurrentMode,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export const usePolymorphicContext = () => useContext(Context);
