import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BsChevronRight } from 'react-icons/bs'
import api from "../../services/api";

import "./catalog.css"

const Catalog = () => {

    const [plants, setPlants] = useState([]);

    //funcionalidade catalog
    const catalog = () => {
        api.get("/")
            .then(({ data }) => setPlants(data))
    }

    //Chamando todas as plants
    useEffect(() => {
        catalog()
        // eslint-disable-next-line
    }, [plants])

    return (
        <div>
            {plants.map((plant, index) => (
                <div className="container" key={index}>

                    <div className="positionComponents">
                        <div className="estiloImagem">
                            <img className="tamanhoImagem" src={plant.images[0].url} alt={plant.nomePopular} />
                        </div>

                            <div className="estiloTexto">
                                <p className="title">{plant.nomePopular}</p>
                                <p className="sciName">{plant.nomeCientifico}</p>
                            </div>
                    </div>

                    <hr className="divisoria" />

                </div>
            ))}
        </div>
    )
}

export default Catalog;