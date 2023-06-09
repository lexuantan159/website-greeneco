import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <div className="w-full mb-7 shadow rounded">
            <div className="relative w-full h-[265px] group">
                <Link to="/about">
                    <img className="w-full h-full object-cover rounded-t" src={product.imageUrl} alt={product.title} />
                    <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center w-full rounded-t bg-black/25 text-center opacity-0 group-hover:opacity-100 transition-all"></div>
                </Link>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center">
                    <Link to="/">
                        <FontAwesomeIcon
                            className="p-3 text-lg text-textColor font-bold bg-white rounded-[50%] hover:rotate-[360deg] hover:bg-primaryColor hover:text-white opacity-0 group-hover:opacity-100 translate-y-8  group-hover:translate-y-0 transition-all"
                            icon={faCartPlus}
                        />
                    </Link>
                </div>
            </div>

            <div className="text-center mt-3 mb-3">
                <h4 className="text-lg font-medium px-2">{product.title}</h4>
                <p className="text-lg font-bold">{product.price}$</p>
            </div>
        </div>
    );
};

export default Item;
