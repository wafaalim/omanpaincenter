'use client';

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';

export default function Appointment() {
  const form = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      const result = await emailjs.sendForm(
        'service_dfplzk2',
        'template_msl2zom',
        form.current,
        'BdCoo32LMynIF81DT'
      );
      alert('✅ Your appointment request has been sent successfully. We will confirm your slot shortly.');
      form.current.reset();
      router.push('/'); // Redirect to home page
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('❌ An error occurred while sending your request. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Book an Appointment</h1>
      <p className="text-gray-600 text-center max-w-xl mb-8">
        Fill out the form below. Your appointment request will be processed and we’ll confirm your slot as soon as possible.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-xl space-y-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="user_phone"
          placeholder="Phone number"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <div className="flex gap-4">
          <input
            type="date"
            name="appointment_date"
            required
            className="w-1/2 px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="time"
            name="appointment_time"
            required
            className="w-1/2 px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <textarea
          name="message"
          placeholder="Additional message (optional)"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-700 text-white font-semibold py-2 rounded hover:bg-blue-800"
        >
          Send Appointment Request
        </button>
      </form>
    </div>
  );
}
