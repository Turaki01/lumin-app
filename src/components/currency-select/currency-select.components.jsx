import React from 'react'
import './currency-select.styles.scss'
import { useQuery } from '@apollo/client'
import { LOAD_CURRENCIES } from '../../graphql/queries';
import storageService from '../../utils/storageService';

const CurrencySelect = ({
    changeCurrency
}) => {

    const { data } = useQuery(LOAD_CURRENCIES)

    return (
        <div className="currency-select">
            <select className="currency-custom__select" value={storageService.get('cys')} name="currencies" id="currency" onChange={(event) => changeCurrency(event)}>
                <option>Select</option>
                {
                    data && data.currency.map(currency => <option>{currency}</option>)
                }
            </select>
        </div>
    )
}

export default CurrencySelect
