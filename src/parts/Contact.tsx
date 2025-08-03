import { useForm, SubmitHandler } from 'react-hook-form';
import TextArea from '@/components/Form/TextArea';
import TextField from '@/components/Form/TextField';
import Button from '@/components/general/Button';
import LoadingSpinner from '@/components/general/LoadingSpinner';
import axios from 'axios';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

type TContactMeInputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const t = useTranslations('contact');
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
          ? `${t('errorPrefix')} ${err.response?.data?.error}`
          : t('genericError'),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='contact' className='py-20 px-10'>
      <h2 className='text-3xl font-bold text-center mb-8'>{t('title')}</h2>

      {success ? (
        <p className='text-center text-green-600 dark:text-green-400 text-lg transition-colors'>
          {t('successMessage')}
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
                placeholder={t('nameLabel')}
                {...register('name', { required: t('nameError') })}
              />
              {errors.name && <p className='text-red-600 dark:text-red-400 transition-colors'>{errors.name.message}</p>}

              <TextField
                placeholder={t('emailLabel')}
                {...register('email', {
                  required: t('emailError'),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t('emailFormatError'),
                  },
                })}
              />
              {errors.email && <p className='text-red-600 dark:text-red-400 transition-colors'>{errors.email.message}</p>}

              <TextArea
                placeholder={t('messageLabel')}
                rows={5}
                {...register('message', { required: t('messageError') })}
              />
              {errors.message && <p className='text-red-600 dark:text-red-400 transition-colors'>{errors.message.message}</p>}

              {error && <p className='text-red-600 dark:text-red-400 transition-colors'>{error}</p>}

              <Button type='submit'>{t('submitButton')}</Button>
            </>
          )}
        </form>
      )}
    </section>
  );
}
