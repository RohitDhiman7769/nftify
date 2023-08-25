import './TokenAddress.css'
import Cardscomponent from './Cardscomponent'
export default function TokenAdress({ data }) {
    console.log('data is: ', data)
    console.log('length in token add is: ', data.length)

    return (
        <>
            <p className="Tokenheadline">Token Search Result</p>
            <div className='token-main-container'>
                <div className='cards-container'>
                    {
                        data.map((singleData) => {
                            return (
                                <Cardscomponent data={singleData} />
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}