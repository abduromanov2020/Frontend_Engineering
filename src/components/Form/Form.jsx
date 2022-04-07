import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import Movies from "../Movies/Movies";
import styles from "./Form.module.css"

function Form(props) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState('');
    const [genre, setGenre] = useState('');

    const [isTitleError, setIsTitleError] = useState(false)
    const [isDateError, setIsDateError] = useState(false)
    const [isImageError, setIsImageError] = useState(false)
    const [isGenreError, setIsGenreError] = useState(false)

    const { movies, setMovies } = props;

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!title) {
            setIsTitleError(true)
            return;
        }

        if (!date) {
            setIsTitleError(false);
            setIsDateError(true);
            return;
        }

        if (!image) {
            setIsTitleError(false);
            setIsDateError(false);
            setIsImageError(true);
            return;
        }

        if (!genre) {
            setIsTitleError(false);
            setIsDateError(false);
            setIsImageError(false);
            setIsGenreError(true);
            return;
        }

        const movie = {
            id: nanoid(),
            title: title,
            year: date,
            type: genre,
            poster:
                image,
        }

        setMovies([...movies, movie]);
        setIsGenreError(false);
    }

    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img className={styles.form__image} src="https://picsum.photos/300/250" alt="" />
                </div>
                <form className={styles.form__right} onSubmit={handleSubmit}>
                    <h2 className={styles.form__title}>Add Movie</h2>
                    <label className={styles.form__labelTitle} htmlFor="">Title</label>
                    <input className={styles.form__inputTitle} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    {isTitleError && <Alert>Title Harus Di Isi</Alert>}
                    <label className={styles.form__labelYear} htmlFor="">Year</label>
                    <input className={styles.form__inputYear} type="text" value={date} onChange={(e) => setDate(e.target.value)} />
                    {isDateError && <Alert>Date Harus Di Isi</Alert>}
                    <label htmlFor="">Poster</label>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                    {isImageError && <Alert>Poster Harus Di Isi</Alert>}
                    <label htmlFor="">Genre</label>
                    <select onChange={(e) => setGenre(e.target.value)}>
                        <option>Pilih Genre</option>
                        <option value="Horror">Horror</option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                    </select>
                    {isGenreError && <Alert>Genre Harus Di Isi</Alert>}
                    <button className={styles.form__button}>Submit</button>
                </form>
            </section>
        </div>
    );
}

export default Form;