import React from 'react'

const BagItem = ({ id, name, price, description, image }) => {
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <div>
                    <p>{name}</p>
                    {/* <img src={asses} alt="" /> */}
                </div>
                <p>{description}</p>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default BagItem