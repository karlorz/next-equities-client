'use client';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
// import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useCreateWatchlist from '@/hooks/useCreateWatchlist';
import { cn } from '@/lib/utils';

const AddStockPage = () => {
  const [issue, setIssue] = useState('');
  const mutation = useCreateWatchlist();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await mutation.mutateAsync({ issue });
      setIssue('');
    } catch (error) {
      console.error('Error adding stock:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="issue">Issue:</label>
        <div className="flex">
          <Input
            type="text"
            id="issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            required
            className={cn('md:w-20')}
          />
          <Button type="submit" disabled={mutation.isLoading} className="ml-2">
            {mutation.isLoading ? 'Adding...' : 'Add Stock'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddStockPage;
