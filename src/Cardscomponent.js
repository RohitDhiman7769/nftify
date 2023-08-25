import './Cardscomponent.css';
export default function Cardscomponent({ data }) {
    console.log('data in cards component is: ', data);
    return (
        <div className='main-container' >
            <div className='cards'>
                <h2 className='card-headline' >Basic Info</h2>
                <div className='child-div'>
                    <div >
                        <p className='key'>Pair created at</p>
                        <p className='key' >Symbol</p>
                        <p className='key' >Dix Id</p>
                        <p className='key' >Pair Address</p>

                    </div>
                    <div  >
                        <p className='value'>{new Date(data?.pairCreatedAt).toDateString()}</p>
                        <p className='value' >{data?.baseToken?.symbol}</p>
                        <p className='value' >{data?.dexId}</p>
                        <p className='value' >{data?.pairAddress}</p>
                    </div>
                </div>
            </div>
            <div className='cards'>
                <h2 className='card-headline' >Base Token</h2>
                <div className='child-div'>
                    <div className>
                        <p className='key'>Name</p>
                        <p className='key' >Symbol</p>
                        <p className='key' > Address</p>

                    </div>
                    <div  >
                        <p className='value'>{data?.baseToken.name}</p>
                        <p className='value' >{data?.baseToken.symbol}</p>
                        <p className='value' >{data?.baseToken.address}</p>

                    </div>
                </div>
            </div>
            <div className='cards'>
                <h2 className='card-headline' >Quote Token</h2>
                <div className='child-div'>
                    <div className>
                        <p className='key'>Name</p>
                        <p className='key' >Symbol</p>
                        <p className='key' > Address</p>

                    </div>
                    <div  >
                    <p className='value'>{data?.quoteToken.name}</p>
                        <p className='value' >{data?.quoteToken.symbol}</p>
                        <p className='value' > {data?.quoteToken.address}</p>

                    </div>
                </div>
            </div>
            <div className='cards'>
                <h2 className='card-headline' >Price</h2>
                <div className='child-div'>
                    <div className>
                        <p className='key'>Price Native</p>
                        <p className='key' >Price USD</p>


                    </div>
                    <div  >
                        <p className='value'>{data?.priceNative}</p>
                        <p className='value' >{data?.priceUsd}</p>


                    </div>
                </div>
            </div>
        </div>
    )
}