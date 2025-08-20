import styles from "./Card.module.scss";
function Card({hour = "9am",img = "", temp ="14",humidity = "0"}){
    return<>
    <section className={styles.card}>
        <h2>{hour}</h2>
        <img src={img} alt="" />
        <p>{temp}</p>
        <div>
            <img src="" alt="" />
            <p>{humidity}</p>
        </div>
    </section>
    </>
}
export default Card