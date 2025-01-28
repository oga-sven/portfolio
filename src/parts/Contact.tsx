import { useForm, SubmitHandler } from 'react-hook-form';
import TextArea from '@/components/Form/TextArea';
import TextField from '@/components/Form/TextField';
import Button from '@/components/general/Button';
import LoadingSpinner from '@/components/general/LoadingSpinner';
import axios from 'axios';
import React, { useState } from 'react';

type TContactMeInputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactMeInputs>();

  const onSubmit: SubmitHandler<TContactMeInputs> = async (data) => {
    setLoading(true);
    setError(null);
    try {
      await axios.post('/api/contact', data);
      setSuccess(true);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(
        err.response?.data?.error
          ? `Oeps! iets ging mis aan de achterkant: ${err.response?.data?.error}`
          : 'Oeps! Er is een onbekende fout opgetreden.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='contact' className='py-20 px-10'>
      <h2 className='text-3xl font-bold text-center mb-8'>Contactformulier</h2>

      {success ? (
        <p className='text-center text-green-600 text-lg'>
          Bedankt voor uw bericht! Wij nemen zo snel mogelijk contact met u op.
        </p>
      ) : (
        <form className='max-w-2xl mx-auto space-y-6' onSubmit={handleSubmit(onSubmit)}>
          {loading && (
            <div className='flex justify-center my-24'>
              <LoadingSpinner />
            </div>
          )}
          {!loading && (
            <>
              <TextField
                placeholder='Naam'
                {...register('name', { required: 'Vul aub uw naam in.' })}
              />
              {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

              <TextField
                placeholder='E-mailadres'
                {...register('email', {
                  required: 'Vul aub uw e-mailadres in.',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Vul aub een geldig e-mailadres in.',
                  },
                })}
              />
              {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

              <TextArea
                placeholder='Bericht'
                rows={5}
                {...register('message', { required: 'Voeg aub een bericht toe.' })}
              />
              {errors.message && <p className='text-red-500'>{errors.message.message}</p>}

              {error && <p className='text-red-500'>{error}</p>}

              <Button type='submit'>Versturen</Button>
            </>
          )}
        </form>
      )}
    </section>
  );
}
