import React, { useState } from 'react'


type TaskProps = {
    listing_id: number,
    url: string,
    MainImage: string,
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
}

export default function Listing ({ items = [] }: any) {
    const [data, setData] = useState(items)
    console.log(data)
    // setData(data)
    const mappintItems = data.map(({ listing_id, url, MainImage, title, currency_code, price, quantity }: TaskProps) => {
        <li>
            <div>{data.listing_id}</div>
            {/* <div className="item-list">
                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
                            <img src="https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg" />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">Woodland Fairy</p>
                        <p className="item-price">$3.99</p>
                        <p className="item-quantity level-medium">12 left</p>
                    </div>
                </div>
            </div> */}
        </li>
    })
    
    return(
        <ul>{mappintItems}</ul>
    )
}

// export default function Listing ({ items = [] }: TaskProps) {
//     const [list, setItems] = useState(items)
// }