import React, { useState } from 'react'
import tech from '../../assets/techies-минер.gif'
import HomeControlls from './home-controlls/HomeControlls'
import HomeGames from './home-games/HomeGames'
import HomeSkills from './home-skills/HomeSkills'
const Home: React.FC = () => {
	const [currentStep, setCurrentStep] = useState(0)
	const [currentTimer, setCurrentTimer] = useState(0)
	const [startGame, setStartGame] = useState(false)
	const [keys, setKeys] = useState<string[]>([])
	const [countKeys, setCountKeys] = useState<number>(0)
	const [result, setResult] = useState(0)
	const [incorrectKeyCount, setIncorrectKeyCount] = useState(0)

	return (
		<div>
			<div className='flex justify-between max-w-[1280px] w-full mx-auto mt-9'>
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
			</div>
			<div className='flex justify-between'>
				<img src={tech} alt='' />
				<img src={tech} alt='' />
			</div>
		</div>
	)
}

export default Home
