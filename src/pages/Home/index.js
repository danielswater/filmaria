import { useEffect, useState } from 'react'
import api from '../../services/api'
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
        <div className="container">
            {filmes.map((item) => {
                return (
                    <div key={item.id} className="card">
                        <img className="card-img-top" src={item.foto} />
                        <div className="card-body">
                            <h5 className="card-title">{item.nome}</h5>
                            <p className='card-text'>{item.sinopse}</p>
                            <a href="#" className="btn btn-primary">Adicionar aos Favoritos</a>
                        </div>
                    </div>
                )
            })}

        </div>
    );
}

export default Home;