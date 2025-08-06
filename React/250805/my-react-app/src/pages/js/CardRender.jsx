import styles from "styled-components";
const CardStyle = styles.div`
        width: 220px;
        height: 400px;
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 10px;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
    `;
const CardTitleStyle = styles.h2`
        font-size: 1.5em;
        font-weight: 700;
        margin: 10px 0;
  `;
const CardDescStyle = styles.p`
        font-size: 1em;
        color: #666;
        margin: 0 0 20px;
  `;

function Card(props) {
    return <CardStyle>{props.children}</CardStyle>;
}
function CardInfo({ img, title, desc }) {
    return (
        <>
            <img src={img} alt={title} />
            <CardTitleStyle>{title}</CardTitleStyle>
            <CardDescStyle>{desc}</CardDescStyle>
        </>
    );
}
function CardBtn() {
    return (
        <button className="btn" onClick={() => console.log("card clicked!")}>
            클릭하세요
        </button>
    );
}

function CardRender() {
    return (
        <article>
            <Card>
                <CardInfo
                    img={`https://picsum.photos/200/200?random=1`}
                    title={`Hello World`}
                    desc={`This is a description of this card.`}
                />
                <CardBtn />
            </Card>
        </article>
    );
}
export default CardRender;
