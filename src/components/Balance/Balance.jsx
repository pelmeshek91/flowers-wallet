import css from "./Balance.module.css"

const Balance = () => {
    return (
        <div className={css.balance}>
            <p className={css.balance__title}>Your Balance</p>
            <p className={css.balance__total}>₴ 24 000.00</p>
        </div>
    )
}

export default Balance;