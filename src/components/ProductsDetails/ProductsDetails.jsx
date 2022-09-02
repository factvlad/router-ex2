import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import s from "./ProductsDetails.module.scss"

const ProductsDetails = () => {
    // const modalRoot = document.querySelector("#modal-root")

    const [goods, setGoods] = useState({})
    const { id } = useParams()
    const { state: { from } } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const onCloseModal = (event) => {
            if (event.code === "Escape") {
                navigate(from)
            }
        };
        window.addEventListener("keydown", onCloseModal)
        return () => {
            window.removeEventListener("keydown", onCloseModal)
        }
    }, [])


    useEffect(() => {
        if (id) {
            fetchGoodsById(id)
        }
    }, [id])


    const fetchGoodsById = (id) => {
        fetch(`https://62becfba0bc9b125615fd0f7.mockapi.io/api/products/${id}`)
            .then((result) => result.json())
            .then((goods) =>
                setGoods(
                    goods
                )
            )
    }


    return (
        <div
            style={ {
                position: "fixed",
                top: "0",
                left: "0",
                height: "100vh",
                width: "100vw",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            } }
        >
            { Object.keys(goods).length ?
                <div className={ s.wrapper }>
                    <span>{ goods.name}</span>
                    <span>{ goods.description }</span>
                    <span>{ goods.price }</span>
                    <span>{ goods.createdAt }</span>
                </div> :
                <h1>Goods not found</h1> }
        </div>
    );
}


export default ProductsDetails;