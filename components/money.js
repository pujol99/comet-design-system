import { useAppContext } from "@/context/AppContext";

export default function Money({ amount, integer = false, tag = false, locale, currency }) {
    const amountFormatted = integer ? parseInt(amount) : parseFloat(amount);
    if (isNaN(amountFormatted)) {
        return <></>;
    }

    const amountTypeClass = amountFormatted === 0 ? "neutral" : amountFormatted > 0 ? "income" : "expense";

    return (
        <span className={`money-amount ${tag ? "money-tag" : amountTypeClass}`}>
            {amountFormatted?.toLocaleString(locale, {
                style: "currency",
                currency: currency,
                maximumFractionDigits: integer ? 0 : 2,
            })}
        </span>
    );
}
