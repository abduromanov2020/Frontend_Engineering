import styles from "./Hero.module.css"

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Spiderman</h2>
                    <h4 className={styles.hero__genre}>Genre : Romance, Comedy, Tragic</h4>
                    <p className={styles.hero__description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat aut, dolore nobis neque ducimus voluptates exercitationem veniam molestiae consequatur ea.</p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image} src="https://picsum.photos/500/300?random=1" alt="" />
                </div>
            </section>
        </div>
    );
}

export default Hero