import './Footer.scss';

function Footer() {
	return (
		<footer className='footer'>
			<div className='wrapper'>
				<hr />

				{/* content */}
				<div className='content'>
					<div class='adr-map-copyright'>
						<div class='adr-map-content-copyright'>
							<address>Kyiv, Mechnikova str., 14/1</address>
							<a
								href='https://www.google.com/maps'
								target='_blank'
								rel='noopener noreferrer'
							>
								On map
							</a>
						</div>
						<div class='copyright'>&copy; 2021 HLEGAL Law company, LLC</div>
					</div>

					<div class='fb-tel-mail'>
						<a href='http://facebook.com'>
							<svg
								width='39'
								height='38'
								viewBox='0 0 39 38'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M38.5 19.1161C38.5 8.55857 29.9934 0 19.5 0C9.00658 0 0.5 8.55857 0.5 19.1161C0.5 28.6575 7.44803 36.5659 16.5312 38V24.6419H11.707V19.1161H16.5312V14.9046C16.5312 10.1136 19.3678 7.46723 23.7078 7.46723C25.7866 7.46723 27.9609 7.84059 27.9609 7.84059V12.545H25.5651C23.2048 12.545 22.4688 14.0185 22.4688 15.5302V19.1161H27.7383L26.8959 24.6419H22.4688V38C31.552 36.5659 38.5 28.6575 38.5 19.1161Z'
									fill='#24A3FF'
								/>
							</svg>
						</a>
						<a href='tel:0800211927'>0800 211 927</a>
						<a href='mailto:contact@forstudy.space'>contact@forstudy.space</a>
					</div>
				</div>

				{/* copyright */}
				<div className='copyright mobile'>
					&copy; 2021 HLEGAL Law company, LLC
				</div>
			</div>
		</footer>
	);
}

export default Footer;
