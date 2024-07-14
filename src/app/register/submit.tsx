'use client'

import React, { useTransition } from 'react';
import { Button } from 'lotus-ux';

export const Submit = () => {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    startTransition(() => {
      // Simulate form submission
      console.log('Form submitted');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit" loading={isPending}>
        Create Account
      </Button>
    </form>
  );
};