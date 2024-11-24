const Carts = () => {
    return (
        <div className="carts-section-wrapper">
            <div className="cart-div">
                <h2 className="cart-heading">Алматы</h2>
                <p className="cart-text">В Алматы имеется склад строительных лесов. Доступна продажа лесов. 
                    Аренда строительных лесов не предоставляется.</p>
                <div className="about-buttons-container">
                    <a href="tel:87775455504" className="secondary-button">
                        Позвонить
                    </a>
                </div>
            </div>
            <div className="cart-div">
                <h2 className="cart-heading">Астана</h2>
                <p className="cart-text"> В Астане имеется склад строительных лесов. Доступна продажа лесов. 
                   Предоставляется возможность аренды строительных лесов.</p>
                <div className="about-buttons-container">
                    <a href="tel:87775455504" className="secondary-button">
                        Позвонить
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Carts;
