import { Link, Outlet } from 'react-router-dom'
import FlyingSpheres from '../components/flying-spheres/FlyingSpheres'
const Layout = () => {
	return (
		<div className='flex flex-col min-h-screen relative'>
			<FlyingSpheres /> {/* Add the flying spheres here */}
			<header>
				<div className='max-w-[1280px] w-full mx-auto'>
					<div className='flex justify-between items-center pt-4'>
						<h3 className='text-white text-[32px] font-bold'>
							DotaSkillsPractice
						</h3>
						<ul className='flex'>
							<li className='ml-8'>
								<Link className='text-white font-medium text-xl' to={'/'}>
									Главная
								</Link>
							</li>
							<li className='ml-8'>
								<Link className='text-white font-medium text-xl' to={'/'}>
									Таблица лидеров
								</Link>
							</li>
							<li className='ml-8'>
								<Link className='text-white font-medium text-xl' to={'/auth'}>
									Авторизация
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</header>
			<main className='flex-grow relative'>
				<Outlet />
			</main>
			<footer className='bg-gray-800 text-white py-4 mt-auto '>
				<div className='max-w-[1280px] w-full mx-auto'>
					<p className='text-center'>©uglyzonedman 2024 BOSS KFC</p>
				</div>
			</footer>
		</div>
	)
}

export default Layout
