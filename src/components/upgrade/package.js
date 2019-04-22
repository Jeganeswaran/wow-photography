import React from 'react'

const Package = ({ id, name, photo_count, country_price}) => {

    // const [country, setCountry] = useState(0);

    return (
        <tr>
            <td>{name}</td>
            <td>{country_price.symbol}{country_price.price}</td>
            <td>{photo_count}</td>
            <td>
                <input 
                    className="radio-ip" 
                    type="radio" 
                    name="choosen_package"
                />
            </td>
        </tr>
    )
}

export default Package
