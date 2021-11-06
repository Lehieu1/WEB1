import React from 'react';
import '../App.css';
function Menu(props) {
    const { menu } = props
    console.log(menu);
    return (
        <div className="items">
            {menu.map(item => {
                const { id, title, img, price, desc } = item;
                return (
                    <div className="item" key={id}>
                        <img src={img} alt={title} className="photo" />
                        <div className="item-infor">
                            <h4 className="title">{title}</h4>
                            <h4 className="price">${price}</h4>
                            <p className="des">{desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Menu;