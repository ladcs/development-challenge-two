import { useContext } from "react"
import myContext from "./myContext"

export const useMyContext = () => {
  const { state } = useContext(myContext);
  return state;
};