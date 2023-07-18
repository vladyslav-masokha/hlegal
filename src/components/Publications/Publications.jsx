import { Link } from 'react-router-dom';
import './Publications.scss';

function Publications() {
	return (
		<section id='ourPublications'>
			<div className='wrapper'>
				<Link to='/'>Publications</Link>

				{/* title */}
				<h3 className='title'>We have something to tell</h3>

				{/* cards container */}
				<div className='cardsContainer'>
					{/* cards */}
					<div className='cardsContainerItems'>
						<div className='cardItem'>
							<img src='./img/Cover1.png' alt='' />
							<div class='content'>
								<h4 class='cardTitle'>Equity associate</h4>
								<p class='date'>April 22</p>
								<hr />
								<p>
									I'm a jun on projects. I am a co-owner of a law firm. How it
									happened. Before entering my parents told me that if I…
								</p>
							</div>
						</div>

						<div className='cardItem'>
							<img src='./img/Cover2.png' alt='' />
							<div class='content'>
								<h4 class='cardTitle'>
									Penalty for the Good Corporation: what will happen to Google
									and others for violating the GDPR
								</h4>
								<p class='date'>September 29</p>
								<hr />
								<p>
									And why the recovery of 50 million euros could be a fateful
									precedent According to Mind.ua January 21 National Commission
									for Data Protection.
								</p>
							</div>
						</div>
					</div>

					{/* card */}
					<div className='cardItem'>
						<div class='cardImg'></div>
						<img src='./img/Cover3.png' alt='' class='imgDesktop' />
						<div class='content'>
							<h4 class='cardTitle'>Millennial Testament</h4>
							<p class='date'>August 19</p>
							<hr />
							<p>
								What and how modern vloggers, opinion leaders and
								crypto-millionaires will inherit A typical legacy of the
								Ukrainian generation X looks like this: an apartment in…
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Publications;
