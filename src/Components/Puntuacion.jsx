import React from 'react'
import Rating from 'react-rating';
import ePloma from '../Assets/img/star-grey.png'
import eRoja from '../Assets/img/star-red.png'
import eAmarilla from '../Assets/img/star-yellow.png'


const Puntuacion = () => {
    return (
        <div>
            <Rating placeholderRating={4}
                emptySymbol={
                    <img src={ePloma}
                        className="icon"
                        alt='estrella ploma'/>}
                placeholderSymbol={
                    <img src={eRoja}
                        className="icon"
                        alt='estrella roja'/>}
                fullSymbol={
                    <img src={eAmarilla}
                        className="icon"
                        alt='estrella amarilla'/>}
            />
        </div>
    )
}
export default Puntuacion
