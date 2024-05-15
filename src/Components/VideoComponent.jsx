const VideoComponent = () => {
	return (
		<div className='flex justify-center w-screen sm:w-11/12 md:w-8/12'>
			<iframe
                className="w-full"
				height="720"
				src="https://www.youtube.com/embed/H67c12O0PFc?autoplay=0&mute=0"
				title="Somos DutraDetailing 🥇y estamos en Córdoba Capital, Argentina 👌"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default VideoComponent;