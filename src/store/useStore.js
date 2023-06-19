import { useContext } from "react"

import { Context } from "./Store"

function useStore() {
  return useContext(Context);
}

export default useStore;
