import React from 'react'

const Package = props => {

    const { id, name, photo_count, country_price, setPackage, choosen, setTab} = props;
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
                    value={id} 
                    checked={id === choosen.id}
                    name="choosen_package"
                    onChange={() => {
                        setPackage(props)
                        setTab(3)
                    }}
                />
            </td>
        </tr>
    )
}

export default Package
