import React from 'react';
import { useForm } from "react-hook-form";
import { createLogEntry } from './API';

const LogEntryForm = ({ onClose, location: { latitude, longitude }}) => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            await createLogEntry({
                ...data,
                latitude,
                longitude
            });
            onClose();
        } catch (error) {
            console.error(error);
            setError(error.message);
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
            { error && <h3 className="error">{error}</h3> }
            <label htmlFor="title">Title</label>
            <input name="title" required ref={register} />

            <label htmlFor="comments">Comments</label>
            <textarea name="comments" rows={3} ref={register}></textarea>

            <label htmlFor="description">Description</label>
            <textarea name="description" rows={3} ref={register}></textarea>

            <label htmlFor="image">Image</label>
            <input name="image" ref={register} />

            <label htmlFor="visitDate">Visit Date</label>
            <input name="visitDate" type="date" required ref={register} />

            <button disabled={loading}>{loading ? 'Loading...' : 'Create Entry'}</button>
        </form>
    );
}

export default LogEntryForm;