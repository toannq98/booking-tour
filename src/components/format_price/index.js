

function FormatPrice({ children }) {
    let price = 0;
    if (children !== undefined) {
        price = children.toLocaleString();
    }

    return (
        <>{price}</>
    );
}

export default FormatPrice;