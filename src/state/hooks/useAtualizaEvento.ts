import { IEvento } from "../../interfaces/IEvento"
import useSetListaDeEventos from "./useSetListaDeEventos"

const useAtualizaEvento = () => {
    const setListaDeEventos = useSetListaDeEventos()
    return (evento: IEvento) => {
        return setListaDeEventos(listaAntiga => {
            const indice = listaAntiga.findIndex(eventoAntigo => eventoAntigo.id === evento.id)
            return [...listaAntiga.slice(0, indice), evento, ...listaAntiga.slice(indice + 1)]
        })
    }
}

export default useAtualizaEvento