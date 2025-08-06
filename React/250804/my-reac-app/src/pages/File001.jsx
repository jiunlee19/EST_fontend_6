function Card(props) {
    return <div>Card {props.number}</div>;
}

function File001() {
    const cards = [1, 2, 3];

    return (
        <>
            {cards.map((card) => (
                <Card key={card} number={card} />
            ))}
            {/* The key prop is used by React to identify which items have changed, are added, or are removed.*/}
        </>
    );
}
export default File001;
