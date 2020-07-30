import React, { Fragment } from 'react';
import './index.css'

const LinkCard = ({ name, href }) => {
    return (
        <div className="linkCard">
            <div className="linkCardImage" />
            <div className="linkCardLink">
                <h2><a href={href}>{name}</a></h2>
            </div>
        </div>
    )
}

const App = () => {
    const [cards, setCards] = React.useState([]);
    const [newCard, setNewCard] = React.useState({ linkName: '', linkHref: '' });

    const onAddCardClick = (newCard) => {
        let oldCards = cards;
        let newCards = [...oldCards, newCard];
        setCards(newCards);
        setNewCard({ linkName: '', linkHref: '' });
    }

    return (
        <Fragment>
            <nav className="navigation">
                <main>
                    <div className="leftContent">
                        <form onClick={e => e.preventDefault()}>
                            <h2 className="formTitle">Add a bookmark</h2>
                            <div>
                                <label
                                    htmlFor="linkTitle"
                                    className="formLabel">Your bookmark title</label>
                                <input
                                    value={newCard.linkName}
                                    onChange={e => setNewCard({ ...newCard, linkName: e.currentTarget.value })}
                                    type="text"
                                    name="linkTitle"
                                    minLength="1"
                                    maxLength="25"
                                    placeholder="Title" />
                            </div>
                            <div>
                                <label
                                    htmlFor="linkUrl"
                                    className="formLabel">Your bookmark url</label>
                                <input
                                    value={newCard.linkHref}
                                    onChange={e => setNewCard({ ...newCard, linkHref: e.currentTarget.value })}
                                    type="text"
                                    name="linkUrl"
                                    minLength="7"
                                    placeholder="https://example.com" />
                            </div>
                            <button onClick={() => onAddCardClick(newCard)}>Add</button>
                        </form>

                    </div>
                    <div className="rightContent">
                        <Fragment>
                            {cards.map((card, i) => (
                                <LinkCard key={i} name={card.linkName} href={card.linkHref} />
                            ))}
                        </Fragment>
                    </div>
                </main>
            </nav>
        </Fragment>
    )
}

export default App