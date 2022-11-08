import btcIcon from '../res/img/bitcoin.svg'
import busdIcon from '../res/img/binance.svg'
import ethIcon from '../res/img/ethereum.svg'
import shibIcon from '../res/img/shibainu.svg'
import solIcon from '../res/img/solana.svg'
import { Coin } from './types'

const coins: Record<string, Coin> = {
    btc: {
        name: 'Bitcoin',
        icon: btcIcon,
        gradientColor: '#fbd93115'
    },
    sol: {
        name: 'Solana',
        icon: solIcon,
        gradientColor: '#DC1FFF20'
    },
    eth: {
        name: 'Ethereum',
        icon: ethIcon,
        gradientColor: '#FFFFFF18'
    },
    busd: {
        name: 'Binance USD',
        icon: busdIcon,
        gradientColor: '#F3BA2F15'
    },
    shib: {
        name: 'Shiba Inu',
        icon: shibIcon,
        gradientColor: '#E42D0415'
    }
}

export { coins }