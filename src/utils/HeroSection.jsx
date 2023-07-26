

const HeroSection = ({page, headline}) => {
	return (
		  <section className="pt-[6rem] px-4 pb-4 md:px-10 md:text-center">
		    <p className="text-primary mb-4">{page}</p>
		    <h1 className="text-2xl font-bold text-gray-50">{headline}</h1>
		  </section>
		)
}

export default HeroSection;