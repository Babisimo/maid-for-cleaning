'use client';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ChevronDown, CircleCheck, LoaderCircle, TriangleAlert } from 'lucide-react';

type ServiceType = 'Residential' | 'Commercial' | 'Short-Term Rental';

interface LeadForm {
  name: string;
  email: string;
  phone?: string;
  service: ServiceType;
  details: string;
}

type Status = 'idle' | 'sent' | 'failed';

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid content-start gap-2">
      <label htmlFor={id} className="text-sm font-bold text-ink">
        {label}
        {optional && <span className="font-normal text-ink-soft"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="flex items-center gap-1.5 text-sm font-medium text-danger">
          <TriangleAlert aria-hidden className="size-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [firstName, setFirstName] = useState('');
  const successHeading = useRef<HTMLHeadingElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadForm>({ defaultValues: { service: 'Residential' } });

  useEffect(() => {
    if (status === 'sent') successHeading.current?.focus();
  }, [status]);

  const onSubmit = async (data: LeadForm) => {
    setStatus('idle');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Lead request failed with ${res.status}`);
      setFirstName(data.name.trim().split(/\s+/)[0] ?? '');
      reset();
      setStatus('sent');
    } catch {
      setStatus('failed');
    }
  };

  const describedBy = (field: keyof LeadForm, id: string) => (errors[field] ? `${id}-error` : undefined);

  if (status === 'sent') {
    return (
      <div role="status" className="success-enter rounded-panel border border-line bg-surface p-8 shadow-panel md:p-10">
        <CircleCheck aria-hidden className="size-9 text-brand" />
        <h3 ref={successHeading} tabIndex={-1} className="mt-4 text-2xl font-extrabold focus:outline-none">
          Quote request sent
        </h3>
        <p className="mt-2 max-w-md text-ink-soft">
          Thanks{firstName ? `, ${firstName}` : ''}. We have your details and will reach out soon with your quote.
        </p>
        <button type="button" className="btn btn-quiet mt-6" onClick={() => setStatus('idle')}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      aria-describedby="lead-note"
      className="grid gap-5 rounded-panel border border-line bg-surface p-6 shadow-panel md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field id="lead-name" label="Full name" error={errors.name?.message}>
          <input
            id="lead-name"
            className="field"
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy('name', 'lead-name')}
            {...register('name', { required: 'Enter your name' })}
          />
        </Field>
        <Field id="lead-email" label="Email" error={errors.email?.message}>
          <input
            id="lead-email"
            className="field"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy('email', 'lead-email')}
            {...register('email', {
              required: 'Enter your email',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter an email like name@example.com' },
            })}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field id="lead-phone" label="Phone" optional>
          <input
            id="lead-phone"
            className="field"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            {...register('phone')}
          />
        </Field>
        <Field id="lead-service" label="Service type">
          <div className="relative">
            <select id="lead-service" className="field appearance-none pr-10" {...register('service', { required: true })}>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Short-Term Rental">Short-Term Rental</option>
            </select>
            <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-3 size-5 -translate-y-1/2 text-ink-soft" />
          </div>
        </Field>
      </div>

      <Field id="lead-details" label="Tell us about your space" error={errors.details?.message}>
        <textarea
          id="lead-details"
          className="field min-h-[112px] resize-y"
          placeholder="Bedrooms, bathrooms, square footage, how often, special requests"
          aria-invalid={errors.details ? true : undefined}
          aria-describedby={describedBy('details', 'lead-details')}
          {...register('details', { required: 'Tell us a little about your space' })}
        />
      </Field>

      {status === 'failed' && (
        <div role="alert" className="flex gap-3 rounded-control border border-danger/30 bg-danger/5 p-4 text-sm text-ink">
          <TriangleAlert aria-hidden className="mt-0.5 size-4 shrink-0 text-danger" />
          <p>
            We couldn’t send your request. Check your connection and try again, or call{' '}
            <a href="tel:+15551234567" className="font-bold text-brand underline">
              (555) 123-4567
            </a>
            .
          </p>
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <LoaderCircle aria-hidden className="size-4 animate-spin" />
              Sending
            </>
          ) : (
            'Send quote request'
          )}
        </button>
        <p id="lead-note" className="text-sm text-ink-soft">
          We only use your details to reply to your request. No spam, ever.
        </p>
      </div>
    </form>
  );
}
