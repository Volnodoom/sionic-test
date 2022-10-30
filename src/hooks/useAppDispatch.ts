import { useDispatch } from "react-redux";
import { AppDispatch } from "types/store.type";

export const useAppDispatch = () => useDispatch<AppDispatch>();
