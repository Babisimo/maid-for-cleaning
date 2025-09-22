'use client';
import { useForm } from 'react-hook-form';

type ServiceType = 'Residential' | 'Commercial' | 'Short-Term Rental';

interface LeadForm {
  name: string;
  email: string;
  phone?: string;
  service: ServiceType;
  details: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadForm>();

  const onSubmit = async (data: LeadForm) => {
    // If you wire an API: await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    console.log('Lead:', data);
    alert("Thanks! We'll reach out ASAP.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-6 grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <label className="grid gap-1">
          <span className="text-sm">Full Name</span>
          <input
            className="border rounded-xl px-3 py-2"
            {...register('name', { required: true })}
            placeholder="Jane Doe"
          />
          {errors.name && <span className="text-xs text-red-600">Required</span>}
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Email</span>
          <input
            className="border rounded-xl px-3 py-2"
            type="email"
            {...register('email', { required: true })}
            placeholder="you@email.com"
          />
          {errors.email && <span className="text-xs text-red-600">Required</span>}
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <label className="grid gap-1">
          <span className="text-sm">Phone</span>
          <input
            className="border rounded-xl px-3 py-2"
            {...register('phone')}
            placeholder="(555) 123-4567"
          />
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Service Type</span>
          <select
            className="border rounded-xl px-3 py-2"
            {...register('service', { required: true })}
            defaultValue="Residential"
          >
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Short-Term Rental">Short-Term Rental</option>
          </select>
        </label>
      </div>

      <label className="grid gap-1">
        <span className="text-sm">Tell us about your space</span>
        <textarea
          className="border rounded-xl px-3 py-2 min-h-[120px]"
          {...register('details', { required: true })}
          placeholder="Beds, baths, sqft, frequency, special requests..."
        />
        {errors.details && <span className="text-xs text-red-600">Required</span>}
      </label>

      <button className="btn btn-primary w-fit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Request My Quote'}
      </button>
      <p className="text-xs text-neutral-500">
        By submitting, you agree to our friendly contact policy. No spam, ever.
      </p>
    </form>
  );
}
