import styles from "./CarouselWidget.module.scss";

export const CarouselWidget = () => {
	return (
		<div className={styles["Carousel-widget-wrapper"]}>
			<div className={styles["Carousel-widget-images"]}></div>
			<div className={styles["Carousel-widget-description"]}>
				<h2>Precision Health, Tailored for You</h2>
				<h4>
					Discover your unique genetic risks and get a personalized action plan
					to optimize your well-being.
				</h4>
			</div>
			<div className={styles["Carousel-widget-slider"]}></div>
		</div>
	);
};
