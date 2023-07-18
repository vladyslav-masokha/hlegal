import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Team.scss';

function Team() {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
	};

	return (
		<section id='ourTeam'>
			<div className='wrapper'>
				{/* slider */}
				<Slider {...settings}>
					{/* slide 1 */}
					<div class='slide'>
						{/* person */}
						<div class='imgPerson'></div>

						{/* content */}
						<div class='content'>
							<Link to='/'>Команда</Link>

							{/* title */}
							<h3 class='title'>
								Ми звикли брати на себе відповідальність та завжди гарантуємо
								чесну, вчасну допомогу, навіть у ситуаціях, коли більшість
								безсилі.
							</h3>

							{/* name */}
							<h4>Олександр Олександровський</h4>

							{/* role */}
							<p>Керуючий партнер</p>
						</div>
					</div>

					{/* slide 2 */}
					<div class='slide'>
						<div class='imgPerson'></div>
						<div class='content'>
							<Link to='/'>Команда</Link>
							<h3 class='title'>
								Ми звикли брати на себе відповідальність та завжди гарантуємо
								чесну, вчасну допомогу, навіть у ситуаціях, коли більшість
								безсилі.
							</h3>
							<h4>Олександр Олександровський</h4>
							<p>Керуючий партнер</p>
						</div>
					</div>

					{/* slide 3 */}
					<div class='slide'>
						<div class='imgPerson'></div>
						<div class='content'>
							<Link to='/'>Команда</Link>
							<h3 class='title'>
								Ми звикли брати на себе відповідальність та завжди гарантуємо
								чесну, вчасну допомогу, навіть у ситуаціях, коли більшість
								безсилі.
							</h3>
							<h4>Олександр Олександровський</h4>
							<p>Керуючий партнер</p>
						</div>
					</div>
				</Slider>
			</div>
		</section>
	);
}

export default Team;
