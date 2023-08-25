import Cardscomponent from './Cardscomponent'
import './PairAddress.css'
export default function PairAddress({ data }) {
    console.log('length in pair add is: ', data.length)
    return (
        <div>
            <p className="headline">Pair Search Result</p>
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
    )
}
