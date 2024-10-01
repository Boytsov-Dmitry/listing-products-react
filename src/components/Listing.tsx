import React from 'react'

type TaskProps = {
    listing_id: number,
    url: string,
    MainImage: any,
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
}

export default function Listing ({ items = [] }: any) {
    const mappintItems = items.map(({ listing_id, url, MainImage, title, currency_code, price, quantity }: TaskProps) => {
        return  <li key={listing_id}>
                    <div className="item">
                        <div className="item-image">
                            <a href={url}>
                                <img src={MainImage?.url_570xN}/>
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{String(title).slice(0,50) + '...'}</p>
                            <p className="item-price">{ currency_code === "USD" ? "$ "+price : "€ "+price || 
                                                        currency_code === "GBR" ? price+" GBR" : undefined}</p>
                            <p className={  quantity <= 10 ? 'item-quantity level-low' : undefined || 
                                            quantity <= 20 ? 'item-quantity level-medium' : undefined || 
                                            quantity > 30 ? 'item-quantity level-high' : undefined
                                         }>{quantity} left</p>
                        </div>
                    </div>
                </li>
    })
    
    return(
        <div className="item-list">
            <ul className='map-list'>{mappintItems}</ul>
        </div>
    )
}