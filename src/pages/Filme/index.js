import './filme.css'
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
export default function Filme() {

    const { id } = useParams()
    const history = useHistory()
    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFilme() {
            const response = await api.get(`/r-api/?api=filmes/${id}`)
            if (response.data.length === 0) {
                history.replace('/')
                return
            }
            else {
                setFilme(response.data)
                setLoading(false)
            }

        }

        loadFilme()

        //Desmonta o componente
        return () => {
            console.log('demontado')
        }

    }, [history, id])

    function salvarFilme() {

        const lista = localStorage.getItem('filmes')

        let filmesSalvos = JSON.parse(lista) || []

        //funçao some verifica se ja existe algo igual
        const hasFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id)

        if (hasFilme) {
            toast.error('Você já salvou esse filme anteriormente')
            return;
        }

        filmesSalvos.push(filme)

        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))

        toast.success("Filme salvo com sucesso")

    }

    if (loading) {
        return (
            <div className='container-card'>
                <h1>Carregando...</h1>
            </div>
        )
    }

    return (
        <div className="container-card">
            <div className="card">
                <img className="card-img-top" alt={filme.nome} src={filme.foto} />
                <div className="card-body">
                    <h5 className="card-title">{filme.nome}</h5>
                    <p className='card-text'>{filme.sinopse}</p>
                    <div className='container-btn'>
                        <button className="btn btn-success" onClick={salvarFilme}>Salvar</button>
                        <a target="_blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`} className='btn btn-warning'>Trailler</a>
                    </div>
                </div>
            </div>
        </div>
    )
}