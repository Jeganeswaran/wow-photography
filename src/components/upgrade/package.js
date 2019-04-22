import React from 'react'

const Package = ({ id, name, photo_count, country_price, setPackage, choosen}) => {

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
                    checked={id === choosen}
                    name="choosen_package"
                    onClick={() => {
                        setPackage(id)
                    }}
                />
            </td>
        </tr>
    )
}

export default Package
