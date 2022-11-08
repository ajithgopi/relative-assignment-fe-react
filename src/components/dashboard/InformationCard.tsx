import React from 'react'
import { coins } from '../../utils/coins'
import { InformationCardData } from '../../utils/types'

type Props = {
    card: InformationCardData
}

const InformationCard = (props: Props) => {
  const coin = coins[props.card.coin]
  return (
    <div className='relative card rounded-2xl pb-5 mb-24'>
        <div className='absolute w-full flex justify-center'>
            <div className='information-curver'>
                <div className='design-overlay'></div>
                <div className='icon-container' style={{ background: `linear-gradient(317deg, ${coin.gradientColor} 0%, rgba(255,255,255,.05) 100%)` }}>
                    <img src={coins[props.card.coin].icon} />
                </div>
            </div>
        </div>
        <div className='pt-20 rounded-2xl px-10'>
            <div className='color-indigo font-bold text-center text-xs'>{coin.name} ({props.card.coin.toUpperCase()})</div>
            
            <div className='rounded-2xl text-center relative px-4 py-2 mt-4 price-box'>
              <span className='color-light font-bold'>${props.card.price.current.toLocaleString('en-US', { minimumFractionDigits: props.card.price.currentPrecision })}</span>
              <div className='inline-flex items-center h-full absolute right-0 top-0 pr-3'>
                <span className={`${props.card.price.change > 0 ? 'color-green' : 'color-red'} text-xs font-bold`}>
                  {props.card.price.change > 0 ? '+' : ''}
                  {props.card.price.change.toFixed(2)}%</span>
              </div>
            </div>
            <div className='color-indigo-dark font-bold text-center mt-2 text-xs'>Price</div>

            <div className='rounded-2xl text-center relative px-4 py-2 mt-3 price-box'>
              <span className='color-light font-bold'>${props.card.price.tvl}</span>
            </div>
            <div className='color-indigo-dark font-bold text-center text-xs mt-2'>TVL</div>

            <div className='mt-3 text-center'>
              <div className='bg-dark-blue inline-flex mt-2 px-3 py-3 rounded-full'>
                { props.card.popularPairs.map(c => <img src={coins[c].icon} className='mx-1.5 popular-pair-icon'/>) }
              </div>
              <div className='color-indigo-dark font-bold text-center mt-2 text-xs'>Popular pairs</div>
            </div>
        </div>
    </div>
  )
}

export default InformationCard