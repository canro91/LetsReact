import React from 'react';
import './Form.css';

const Form = ({ onSubmit }) => {
    const [search, setSearch] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search) {
            onSubmit(search);
            setSearch('');
        }
    };

    return (
        <div className="container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row">
                    <div className="offset-3"></div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            name="city"
                            autoComplete="off"
                            placeholder="City"
                            required
                            onChange={(e) => setSearch(e.currentTarget.value)}
                            value={search}
                        />
                    </div>
                    <div className="col-md-3 mt-md-0 py-2 text-md-left">
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default Form;