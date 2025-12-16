"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass/glass-card";
import { Button } from "@/components/ui/button";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Define Zod schema for contact form
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});

type FormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const onSubmit = async (data: FormData) => {
    setSubmitStatus(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        reset();
        setSubmitStatus({ success: true, message: result.message });
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || "There was an error sending your message. Please try again."
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus({
        success: false,
        message: "Network error: Could not send message. Please check your connection and try again."
      });
    }
  };

  return (
    <section id="contact" className="py-[max(3vh,2rem)] px-4">
      <div className="max-w-[min(90vw,1200px)] mx-auto">
        <motion.div
          className="text-[var(--fluid-text-3xl)] font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          Get In <span className="text-primary-accent">Touch</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <GlassCard className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-primary-accent">Contact Information</h3>

              <div className="space-y-6">

                <div className="flex items-start">
                  <div className="mr-4 text-primary-accent mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-muted-foreground">Email</h4>
                    {process.env.NEXT_PUBLIC_EMAIL && <p className="text-foreground">{process.env.NEXT_PUBLIC_EMAIL}</p>}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 text-primary-accent mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-muted-foreground">Location</h4>
                    {process.env.NEXT_PUBLIC_ADDRESS && <p className="text-foreground">{process.env.NEXT_PUBLIC_ADDRESS}</p>}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-muted-foreground mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {process.env.NEXT_PUBLIC_GITHUB_URL && (
                    <motion.div
                      className="inline-block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0 }}
                    >
                      <a
                        href={process.env.NEXT_PUBLIC_GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-glass-white border border-glass-border rounded-full hover:bg-primary-accent hover:text-dark-bg transition-colors"
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </motion.div>
                  )}

                  {process.env.NEXT_PUBLIC_LINKEDIN_URL && (
                    <motion.div
                      className="inline-block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <a
                        href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-glass-white border border-glass-border rounded-full hover:bg-primary-accent hover:text-dark-bg transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            className=""
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <GlassCard className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-primary-accent">Send a Message</h3>

              {submitStatus && (
                <motion.div
                  className={`p-4 rounded-md mb-6 ${submitStatus.success ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className={`w-full px-4 py-3 bg-glass-white bg-opacity-70 border ${
                      errors.name ? 'border-red-400' : 'border-glass-border'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-primary-accent text-foreground shadow-inner`}
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className={`w-full px-4 py-3 bg-glass-white bg-opacity-70 border ${
                      errors.email ? 'border-red-400' : 'border-glass-border'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-primary-accent text-foreground shadow-inner`}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject')}
                    className={`w-full px-4 py-3 bg-glass-white bg-opacity-70 border ${
                      errors.subject ? 'border-red-400' : 'border-glass-border'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-primary-accent text-foreground shadow-inner`}
                  />
                  {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={5}
                    className={`w-full px-4 py-3 bg-glass-white bg-opacity-70 border ${
                      errors.message ? 'border-red-400' : 'border-glass-border'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-primary-accent text-foreground resize-none shadow-inner`}
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-primary-accent text-dark-bg hover:bg-cyan-500 py-6"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;