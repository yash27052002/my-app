import React, {  useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const [formData, setFormData] = useState({
        eventDate: '',
        eventTime: '',
        name: '',
        phoneNumber: '',
        eventType: '',
    });
    const navigate = useNavigate();



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const rawData = {
                name: formData.name,
                contact: formData.phoneNumber,
                event_date: formData.eventDate,
                event_time: formData.eventTime,
                event_type: formData.eventType,
            };

    
            const response = await axios.post(
                'http://43.204.113.135:8000/photostudio/eventform',
                JSON.stringify(rawData), // Send raw JSON string
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            navigate('/');
            console.log('Booking Data:', response.data);
            alert('Booking submitted successfully!');
        } catch (error) {
            const rawData = {
                name: formData.name,
                contact: formData.phoneNumber,
                event_date: formData.eventDate,
                event_time: formData.eventTime,
                event_type: formData.eventType,
            };
            console.error('Error submitting booking:', error);
            console.log(rawData)
            alert('Failed to submit the booking. Please try again.');
        }
    };
    



    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f8f9fa',
            }}
        >
            <div
                style={{
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    padding: '20px',
                    width: '90%',
                    maxWidth: '400px',
                }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Booking Form</h2>
                <form onSubmit={handleSubmit}>
                    {/* Event Date */}
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="eventDate">Event Date:</label>
                        <input
                            type="date"
                            id="eventDate"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '8px',
                                marginTop: '5px',
                                borderRadius: '4px',
                                border: '1px solid #ced4da',
                            }}
                        />
                    </div>

                    {/* Event Time */}
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="eventTime">Event Time:</label>
                        <input
                            type="time"
                            id="eventTime"
                            name="eventTime"
                            value={formData.eventTime}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '8px',
                                marginTop: '5px',
                                borderRadius: '4px',
                                border: '1px solid #ced4da',
                            }}
                        />
                    </div>

                    {/* Name */}
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                            style={{
                                width: '100%',
                                padding: '8px',
                                marginTop: '5px',
                                borderRadius: '4px',
                                border: '1px solid #ced4da',
                            }}
                        />
                    </div>

                    {/* Phone Number */}
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            placeholder="Enter your phone number"
                            style={{
                                width: '100%',
                                padding: '8px',
                                marginTop: '5px',
                                borderRadius: '4px',
                                border: '1px solid #ced4da',
                            }}
                        />
                    </div>

                    {/* Event Type */}
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="eventType">Event Type:</label>
                        <select
                            id="eventType"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '8px',
                                marginTop: '5px',
                                borderRadius: '4px',
                                border: '1px solid #ced4da',
                            }}
                        >
                            <option value="">Select Event Type</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Corporate">Corporate</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#007BFF',
                            color: 'white',
                            border: 'none',
                            padding: '10px 15px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            width: '100%',
                            marginTop: '10px',
                        }}
                    >
                        Submit Booking
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
