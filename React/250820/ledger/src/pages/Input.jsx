import { useState } from "react";

export default function Input() {
    const [formState, setFormState] = useState({
        income: 0,
        name: "",
        price: 0,
    });

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="income">나의 수익</label>
                <input
                    id="income"
                    name="myIncome"
                    type="number"
                    placeholder="나의 수익"
                    onChange={handleChange}
                />

                <label htmlFor="name">물건 이름</label>
                <input
                    id="name"
                    name="itemName"
                    type="text"
                    placeholder="물건 이름"
                    onChange={handleChange}
                />

                <label htmlFor="expense-amout">물건 가격</label>
                <input
                    id="price"
                    name="itemPrice"
                    type="number"
                    placeholder="물건 가격"
                    onChange={handleChange}
                />

                <button type="submit">지출 추가하기</button>
            </form>
        </>
    );
}
