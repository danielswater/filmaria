import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './home.css'



function Home() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        async function loadingFilmes() {
            const response = await api.get('/r-api/?api=filmes/')
            //console.log(response.data)
            setFilmes(response.data)
        }

        loadingFilmes()

    }, [])

    return (
        <div>
            {filmes.map((item) => {
                return (
                    <div key={item.id} className="container-card">
                        <div className="card">
                            <img className="card-img-top" alt={item.nome} src={item.foto} />
                            <div className="card-body">
                                <h5 className="card-title">{item.nome}</h5>
                                <p className='card-text'>{item.sinopse}</p>
                                <div className='container-btn'>
                                    <Link className="btn btn-primary" to={`/filme/${item.id}`}>Acessar</Link>
                                    {/* <Link className="btn btn-success" to="/" >Salvar</Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
}

export default Home;