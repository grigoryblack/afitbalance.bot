import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store.ts";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
