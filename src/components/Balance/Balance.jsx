import css from "./Balance.module.css";
import financeSelectors from "../../redux/transactions/transactionsSelector"

const Balance = () => {
    return (
        <div className={css.balance}>
            <p className={css.balance__title}>Your Balance</p>
            <p className={css.balance__total}>₴ {financeSelectors.selectTotalBalance}</p>
        </div>
    )
}

export default Balance;