import { IEvento } from "../../interfaces/IEvento"
import useSetListaDeEventos from "./useSetListaDeEventos"

const useDeletaEvento = () => {
    const setListaDeEventos = useSetListaDeEventos()
    return (evento: IEvento) => {
        return setListaDeEventos(listaAntiga => listaAntiga
            .filter(eventoAntigo => eventoAntigo.id !== evento.id))
    }
}

export default useDeletaEvento