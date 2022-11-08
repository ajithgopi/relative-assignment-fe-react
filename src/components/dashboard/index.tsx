import React from 'react'
import '../../styles/dashboard.scss'
import { BiChart } from 'react-icons/bi'
import { cards } from '../../utils/sampledata'
import InformationCard from './InformationCard'

type Props = {}

const Dashboard = (props: Props) => {
  return <div className='dashboard h-screen w-full p-10 flex items-center'>
    <div className='w-full'>
      <div className='flex items-center mb-28'>
        <BiChart color='#DC1FFF'/>
        <span className='color-light font-bold ml-5'>Trending Assets</span>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-12'>
          { cards.map((card: any) => <InformationCard card={card}/>) }
        </div>
    </div>
  </div>
}

export default Dashboard