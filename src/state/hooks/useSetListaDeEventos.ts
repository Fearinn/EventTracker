import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../atom"

const useSetListaDeEventos = () => {
   return useSetRecoilState<IEvento[]>(listaDeEventosState)
}

export default useSetListaDeEventos