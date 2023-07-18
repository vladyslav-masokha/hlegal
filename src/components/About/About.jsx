import './About.scss';

function About() {
	return (
		<section id='aboutUs'>
			<div className='wrapper'>
				{/* content for mobile devices */}
				<div className='aboutContent'>
					<ul class='nav nav-pills mb-3' id='pills-tab' role='tablist'>
						<li class='nav-item' role='presentation'>
							<button
								class='navLink active firstBtn'
								id='pills-home-tab'
								data-bs-toggle='pill'
								data-bs-target='#pills-home'
								type='button'
								role='tab'
								aria-controls='pills-home'
								aria-selected='true'
							>
								Consistent
							</button>
						</li>
						<li class='nav-item' role='presentation'>
							<button
								class='navLink'
								id='pills-profile-tab'
								data-bs-toggle='pill'
								data-bs-target='#pills-profile'
								type='button'
								role='tab'
								aria-controls='pills-profile'
								aria-selected='false'
							>
								Customer oriented
							</button>
						</li>
						<li class='nav-item' role='presentation'>
							<button
								class='navLink'
								id='pills-contact-tab'
								data-bs-toggle='pill'
								data-bs-target='#pills-contact'
								type='button'
								role='tab'
								aria-controls='pills-contact'
								aria-selected='false'
							>
								Innovative
							</button>
						</li>
						<li class='nav-item' role='presentation'>
							<button
								class='navLink'
								id='pills-contact-tab'
								data-bs-toggle='pill'
								data-bs-target='#pills-contact'
								type='button'
								role='tab'
								aria-controls='pills-contact'
								aria-selected='false'
							>
								Business oriented
							</button>
						</li>
					</ul>
					<hr />
					<div class='tab-content' id='pills-tabContent'>
						<div
							class='tab-pane fade show active'
							id='pills-home'
							role='tabpanel'
							aria-labelledby='pills-home-tab'
						>
							<h2>We turn the idea of legal services</h2>
							<p>
								Consolidating many years of experience and practice, the
								company's lawyers accompany complex projects and achieve a
								number of important decisions for the industry. Many of them
								form the practice of applying the law of the sea in Ukraine.
							</p>
						</div>
						<div
							class='tab-pane fade'
							id='pills-profile'
							role='tabpanel'
							aria-labelledby='pills-profile-tab'
						>
							<h2>We turn the idea of legal services</h2>
							<p>
								Consolidating many years of experience and practice, the
								company's lawyers accompany complex projects and achieve a
								number of important decisions for the industry. Many of them
								form the practice of applying the law of the sea in Ukraine.
							</p>
						</div>
						<div
							class='tab-pane fade'
							id='pills-contact'
							role='tabpanel'
							aria-labelledby='pills-contact-tab'
						>
							<h2>We turn the idea of legal services</h2>
							<p>
								Consolidating many years of experience and practice, the
								company's lawyers accompany complex projects and achieve a
								number of important decisions for the industry. Many of them
								form the practice of applying the law of the sea in Ukraine.
							</p>
						</div>
					</div>
				</div>

				{/* content for tablet devices */}
				<div className='aboutContentTablet'>
					<div class='d-flex align-items-start'>
						<div
							class='nav flex-column nav-pills me-3'
							id='v-pills-tab'
							role='tablist'
							aria-orientation='vertical'
						>
							<button
								class='navLink active'
								id='v-pills-home-tab'
								data-bs-toggle='pill'
								data-bs-target='#v-pills-home'
								type='button'
								role='tab'
								aria-controls='v-pills-home'
								aria-selected='true'
							>
								Consistent
							</button>
							<button
								class='navLink'
								id='v-pills-profile-tab'
								data-bs-toggle='pill'
								data-bs-target='#v-pills-profile'
								type='button'
								role='tab'
								aria-controls='v-pills-profile'
								aria-selected='false'
							>
								Customer oriented
							</button>
							<button
								class='navLink'
								id='v-pills-messages-tab'
								data-bs-toggle='pill'
								data-bs-target='#v-pills-messages'
								type='button'
								role='tab'
								aria-controls='v-pills-messages'
								aria-selected='false'
							>
								Innovative
							</button>
							<button
								class='navLink'
								id='v-pills-settings-tab'
								data-bs-toggle='pill'
								data-bs-target='#v-pills-settings'
								type='button'
								role='tab'
								aria-controls='v-pills-settings'
								aria-selected='false'
							>
								Business oriented
							</button>
						</div>
						<div class='vertical-line'></div>
						<div class='tab-content' id='v-pills-tabContent'>
							<div
								class='tab-pane fade show active'
								id='v-pills-home'
								role='tabpanel'
								aria-labelledby='v-pills-home-tab'
							>
								<h2>We turn the idea of legal services</h2>
								<p>
									Consolidating many years of experience and practice, the
									company's lawyers accompany complex projects and achieve a
									number of important decisions for the industry. Many of them
									form the practice of applying the law of the sea in Ukraine.
								</p>
							</div>
							<div
								class='tab-pane fade'
								id='v-pills-profile'
								role='tabpanel'
								aria-labelledby='v-pills-profile-tab'
							>
								<h2>We turn the idea of legal services</h2>
								<p>
									Consolidating many years of experience and practice, the
									company's lawyers accompany complex projects and achieve a
									number of important decisions for the industry. Many of them
									form the practice of applying the law of the sea in Ukraine.
								</p>
							</div>
							<div
								class='tab-pane fade'
								id='v-pills-messages'
								role='tabpanel'
								aria-labelledby='v-pills-messages-tab'
							>
								<h2>We turn the idea of legal services</h2>
								<p>
									Consolidating many years of experience and practice, the
									company's lawyers accompany complex projects and achieve a
									number of important decisions for the industry. Many of them
									form the practice of applying the law of the sea in Ukraine.
								</p>
							</div>
							<div
								class='tab-pane fade'
								id='v-pills-settings'
								role='tabpanel'
								aria-labelledby='v-pills-settings-tab'
							>
								<h2>We turn the idea of legal services</h2>
								<p>
									Consolidating many years of experience and practice, the
									company's lawyers accompany complex projects and achieve a
									number of important decisions for the industry. Many of them
									form the practice of applying the law of the sea in Ukraine.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
