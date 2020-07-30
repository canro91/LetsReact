import React, { Fragment } from 'react';
import './index.css'

const App = () => {
    const linkImageStyle = {

    };

    return (
        <Fragment>
            <nav className="navigation">
                <main>
                    <div className="leftContent">
                        <form>
                            <h2 className="formTitle">Add a bookmark</h2>
                            <div>
                                <label
                                    htmlFor="linkTitle"
                                    className="formLabel">Your bookmark title</label>
                                <input
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
                                    type="text"
                                    name="linkUrl"
                                    minLength="7"
                                    placeholder="https://example.com" />
                            </div>
                            <button>Add</button>
                        </form>

                    </div>
                    <div className="rightContent">
                        <div className="linkCard">
                            <div className="linkCardImage" />
                            <div className="linkCardLink">
                                <h2><a href="#">My Link</a></h2>
                            </div>
                        </div>
                    </div>
                </main>
            </nav>
        </Fragment>
    )
}

export default App