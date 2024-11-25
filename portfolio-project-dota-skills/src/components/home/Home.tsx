import React, { useState } from 'react'
import tech from '../../assets/techies-минер.gif'
import HomeControlls from './home-controlls/HomeControlls'
import HomeGames from './home-games/HomeGames'
import HomeSkills from './home-skills/HomeSkills'

import inkoverImg from '../../assets/invoker-dota-2.gif'
const Home: React.FC = () => {
	const [currentStep, setCurrentStep] = useState(0)
	const [currentTimer, setCurrentTimer] = useState(0)
	const [startGame, setStartGame] = useState(false)
	const [keys, setKeys] = useState<string[]>([])
	const [countKeys, setCountKeys] = useState<number>(0)
	const [result, setResult] = useState(0)
	const [incorrectKeyCount, setIncorrectKeyCount] = useState(0)

	return (
		<div className='max-w-[1280px]  w-full mt-2 mx-auto'>
			<div className='flex mt-10'>
				<div className='max-w-lg  bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-700 hover:shadow-2xl transition-shadow duration-300'>
					<img
						className='w-full h-56 object-cover'
						src={inkoverImg}
						alt='Invoker Game'
					/>
					<div className='p-5'>
						<h3 className='text-xl font-bold text-white mb-3'>
							Invoker's Mastery
						</h3>
						<p className='text-gray-300'>
							Invoker's Mastery — это игра на основе популярного героя из Dota
							2, Инвокера. В этой игре игроки должны комбинировать различные
							скиллы Инвокера, используя его три базовых элемента: Quas, Wex, и
							Exort. Игроку предстоит использовать эти элементы для активации
							мощных скиллов в ограниченное время, реагируя на появляющиеся
							задачи и врагов.
						</p>
						<button className='mt-5 w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300'>
							Подробнее
						</button>
					</div>
				</div>
			</div>
			{/* <div className='flex justify-between max-w-[1280px] w-full mx-auto mt-9'>
				<HomeControlls
					currentTimer={currentTimer}
					startGame={startGame}
					countKeys={countKeys}
					currentStep={currentStep}
					incorrectKeyCount={incorrectKeyCount}
				/>

				<HomeGames
					incorrectKeyCount={incorrectKeyCount}
					setIncorrectKeyCount={setIncorrectKeyCount}
					result={result}
					setResult={setResult}
					setCurrentStep={setCurrentStep}
					currentStep={currentStep}
					currentTimer={currentTimer}
					setCurrentTimer={setCurrentTimer}
					keys={keys}
					setKeys={setKeys}
					setCountKeys={setCountKeys}
					startGame={startGame}
					setStartGame={setStartGame}
				/>
				<HomeSkills />
			</div> */}
			<div className='flex justify-between'>
				<img src={tech} alt='' />
				<img src={tech} alt='' />
			</div>
		</div>
	)
}

export default Home
