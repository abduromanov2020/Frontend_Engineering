import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addMovie } from "../../features/moviesSlice";
import Alert from "../Alert/Alert";
import Button from "../ui/Button";
import styles from "./Form.module.css"

function Form() {

    const nav = useNavigate();

    const dispatch = useDispatch();
    
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        image: '',
        genre: ''
    });

    const { title, date, image, genre } = formData

    const [error, setError] = useState({
        isTitleError: false,
        isDateError: false,
        isImageError: false,
        isGenreError: false
    });

    const { isTitleError, isDateError, isImageError, isGenreError } = error


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const validate = () => {
        if (!title) {
            setError({
                ...error,
                isTitleError: true
            });
            return false;
        }

        if (!date) {
            setError({
                ...error,
                isTitleError: false,
                isDateError: true
            });
            return false;
        }

        if (!image) {
            setError({
                ...error,
                isTitleError: false,
                isDateError: false,
                isImageError: true
            });
            return false
        }

        setError({
            ...error,
            isTitleError: false,
            isDateError: false,
            isImageError: false
        })
        return true;
    }

    const submitMovie = () => {
        const movie = {
            id: nanoid(),
            title: title,
            year: date,
            type: genre,
            poster:
                image,
        }

        dispatch(addMovie(movie))

        nav('/');

        setFormData({
            title: '',
            date: '',
            image: '',
            genre: ''
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        validate() && submitMovie();

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
                    <input className={styles.form__inputTitle} type="text" value={title} onChange={handleChange} name="title" />
                    {isTitleError && <Alert>Title Harus Di Isi</Alert>}
                    <label className={styles.form__labelYear} htmlFor="">Year</label>
                    <input className={styles.form__inputYear} type="text" value={date} onChange={handleChange} name="date" />
                    {isDateError && <Alert>Date Harus Di Isi</Alert>}
                    <label htmlFor="">Poster</label>
                    <input type="text" value={image} onChange={handleChange} name="image" />
                    {isImageError && <Alert>Poster Harus Di Isi</Alert>}
                    <label htmlFor="">Genre</label>
                    <select onChange={handleChange} name="genre" >
                        <option>Pilih Genre</option>
                        <option value="Horror">Horror</option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                    </select>
                    {isGenreError && <Alert>Genre Harus Di Isi</Alert>}
                    <Button variant="secondary" full>Submit</Button>
                </form>
            </section>
        </div>
    );
}

export default Form;