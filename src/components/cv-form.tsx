'use client'

import React, {useState} from 'react'
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function CVForm() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (error) setError(''); // Clear error on input change
    };

    const handleSubmit = () => {
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
        setError('Please enter a valid email address');
        return;
        }
        // Proceed with sending the CV (e.g., sending email or performing another action)
    };

    return (
        <>
        <div className="space-y-3 space-x-3">
            <input 
                type="email"
                className="border border-primary focus:ring-2 focus:ring-secondary rounded-md px-4 py-2"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
            />
            <RainbowButton
                onClick={handleSubmit}
            >
                Send CV
            </RainbowButton>
            {error && (
              <p className="text-red-500 text-sm mt-1">{error}</p> // Error message styling
            )}
        </div>
        </>
    )
}
