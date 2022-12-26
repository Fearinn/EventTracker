import { IEvento } from "../../interfaces/IEvento"
import { forneceId } from "../../utils"
import useSetListaDeEventos from "./useSetListaDeEventos"

const useAdicionaEvento = () => {
  const setListaDeEventos = useSetListaDeEventos()

    return (evento: IEvento) => {
        const hoje = new Date()
        if (evento.inicio < hoje) throw new Error('O evento não pode começar numa data passada')
        evento.id = forneceId()
        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }
}

export default useAdicionaEvento