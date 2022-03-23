import styles from "./Form.module.css"

function Form() {
    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img className={styles.form__image} src="https://picsum.photos/300/250" alt="" />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Add Movie</h2>
                    <label className={styles.form__labelTitle} htmlFor="">Title</label>
                    <input className={styles.form__inputTitle} type="text" name="" id="" />
                    <label className={styles.form__labelYear} htmlFor="">Year</label>
                    <input className={styles.form__inputYear} type="text" name="" id="" />
                    <button className={styles.form__button}>Submit</button>
                </div>
            </section>
        </div>
    );
}

export default Form;