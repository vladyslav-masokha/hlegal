import './Partners.scss';

function Partners() {
	return (
		<section id='ourPartners'>
			{/* title */}
			<h3 className='title'>They already trust us</h3>

			{/* Images */}
			<div className="ourPartnersImg">
				<img src="./img/Item.png" alt="Hillel logo" />
            <img src="./img/Item-1.png" alt="WannaBiz" />
            <img src="./img/Item-2.png" alt="targerine" />
            <img src="./img/Item-3.png" alt="3DLook" />
            <img src="./img/Item-4.png" alt="orangear" />
            <img src="./img/Item-5.png" alt="adtelligent" />
            <img src="./img/Item-6.png" alt="Clickky" class="tablet" />
            <img src="./img/Item-7.png" alt="Ecoleasing" class="tablet" />
            <img src="./img/Item-8.png" alt="InfraTek" class="tablet" />
            <img src="./img/Item-9.png" alt="сити парк" class="tablet" />
            <img src="./img/Item-10.png" alt="art-print studio" class="tablet" />
            <img src="./img/Item-11.png" alt="Ultimate card" class="tablet" />
			</div>
		</section>
	);
}

export default Partners;
