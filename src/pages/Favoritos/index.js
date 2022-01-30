import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Favoritos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const lista = localStorage.getItem('filmes')
        setFilmes(JSON.parse(lista) || [])

    }, [filmes])

    function handleDelete(id) {

        let filtro = filmes.filter((item) => {
            return item.id !== id
        })

        setFilmes(filtro);
        localStorage.setItem('filmes', JSON.stringify(filtro))
        toast.success('Filme excluido com sucesso!')
    }

    return (
        <div>
            <h1>Lista de filmes salvos</h1>
            {filmes.length === 0 && <h3>Nenhum filme salvo na lista</h3>}
            <ul className='list-group'>
                {filmes.map((item) => {
                    return (
                        <li key={item.nome} className='list-group-item'>{item.nome}
                            <div className="botoes">
                                <Link className="btn btn-primary" to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={() => handleDelete(item.id)} className='btn btn-danger'>Remover</button>
                            </div>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}