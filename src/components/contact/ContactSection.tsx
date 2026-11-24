import React, { useState } from 'react';
import { z } from 'zod';
import { AlertCircle, ArrowRight, CheckCircle2, Info, Mail, MapPin, Phone } from 'lucide-react';
import { SectionEyebrow } from '@/components/common/BrandMark';
import { siteConfig } from '@/config/site';

const serviceOptions = [
  'BROTOCOL SMART',
  'BROTOCOL HOSPITALITY',
  'BROTOCOL SYSTEMS',
  'Business Automation',
  'Other',
] as const;

const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name.'),
  businessName: z.string().trim().min(2, 'Please enter your business or organization name.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone or WhatsApp number.')
    .max(20, 'Phone number appears too long.'),
  service: z.enum(serviceOptions, {
    message: 'Please select an interested service.',
  }),
  budget: z.string().trim().optional(),
  description: z
    .string()
    .trim()
    .min(15, 'Please share a brief description of your requirement (at least 15 characters).'),
  websiteTrap: z.string().max(0).optional(), // Honeypot field
});

type EnquiryValues = z.infer<typeof enquirySchema>;
type FieldErrors = Partial<Record<keyof EnquiryValues, string>>;

interface ContactSectionProps {
  defaultService?: (typeof serviceOptions)[number];
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  defaultService = 'BROTOCOL SMART',
}) => {
  const [form, setForm] = useState<EnquiryValues>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: defaultService,
    budget: '',
    description: '',
    websiteTrap: '',
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    kind: 'idle' | 'success' | 'unconfigured' | 'error';
    message: string;
  }>({ kind: 'idle', message: '' });

  const updateField = <K extends keyof EnquiryValues>(
    field: K,
    value: EnquiryValues[K]
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitState.kind !== 'idle') {
      setSubmitState({ kind: 'idle', message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.websiteTrap && form.websiteTrap.length > 0) {
      return;
    }

    const parsed = enquirySchema.safeParse(form);
    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof EnquiryValues | undefined;
        if (key && !nextErrors[key]) {
          nextErrors[key] = issue.message;
        }
      }
      setErrors(nextErrors);
      setSubmitState({
        kind: 'error',
        message: 'Please review the highlighted fields before submitting.',
      });
      return;
    }

    const endpoint = siteConfig.integrations.contactFormEndpoint;
    if (!endpoint) {
      setSubmitState({
        kind: 'unconfigured',
        message:
          'All enquiry fields validated cleanly. Direct submission is awaiting backend form-provider configuration (VITE_CONTACT_FORM_ENDPOINT), so your enquiry has not been transmitted yet.',
      });
      return;
    }

    setSubmitting(true);
    try {
      const { websiteTrap: _ignored, ...payload } = parsed.data;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setSubmitState({
        kind: 'success',
        message:
          'Your project enquiry has been submitted. Our team will review your requirements and follow up shortly.',
      });
      setForm({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        service: defaultService,
        budget: '',
        description: '',
        websiteTrap: '',
      });
    } catch {
      setSubmitState({
        kind: 'error',
        message:
          'Unable to send your enquiry right now due to a network or server error. Please retry shortly.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#F1F5F9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Left Information Column */}
        <div className="lg:col-span-5">
          <SectionEyebrow label="PROJECT ENQUIRY" />
          <h2 className="mt-4 font-display text-3xl font-semibold text-[#020617] sm:text-4xl">
            Tell Us About Your Project.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#64748B]">
            Whether you need NFC Google Review Cards, a QR restaurant ordering
            setup, or custom business software, share what you are aiming to
            solve and we will outline a clear scope.
          </p>

          <div className="mt-8 space-y-4 rounded-2xl border border-[#E2E8F0] bg-white p-6">
            <h3 className="font-display text-sm font-bold tracking-wide text-[#0D7F80] uppercase">
              Service Coverage &amp; Contact
            </h3>
            <div className="flex items-start gap-3 text-sm text-[#020617]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0D7F80]" aria-hidden="true" />
              <span>{siteConfig.serviceArea.summary}</span>
            </div>

            {siteConfig.contact.phone && (
              <div className="flex items-center gap-3 text-sm text-[#020617]">
                <Phone className="h-4 w-4 shrink-0 text-[#0D7F80]" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#0D7F80] hover:underline"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            )}

            {siteConfig.contact.email && (
              <div className="flex items-center gap-3 text-sm text-[#020617]">
                <Mail className="h-4 w-4 shrink-0 text-[#0D7F80]" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#0D7F80] hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            )}

            <p className="border-t border-[#E2E8F0] pt-3 text-xs leading-relaxed text-[#64748B]">
              Information submitted in this enquiry is used solely to understand
              your project requirements and respond to your request.
            </p>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs sm:p-8"
          >
            {/* Honeypot anti-spam field */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="contact-website-trap">Leave blank</label>
              <input
                id="contact-website-trap"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.websiteTrap}
                onChange={(e) => updateField('websiteTrap', e.target.value)}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="enquiry-name"
                  className="block text-xs font-semibold text-[#020617]"
                >
                  Your Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="enquiry-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'error-name' : undefined}
                  placeholder="Full name"
                  className="mt-1.5 h-11 w-full rounded-xl border border-[#E2E8F0] bg-white px-3.5 text-sm text-[#020617] placeholder:text-[#64748B]/75 focus:border-[#0D7F80] focus:ring-2 focus:ring-[#E0F7F7] focus:outline-none"
                />
                {errors.name && (
                  <p id="error-name" className="mt-1 text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="enquiry-business"
                  className="block text-xs font-semibold text-[#020617]"
                >
                  Business Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="enquiry-business"
                  type="text"
                  required
                  value={form.businessName}
                  onChange={(e) => updateField('businessName', e.target.value)}
                  aria-invalid={Boolean(errors.businessName)}
                  aria-describedby={errors.businessName ? 'error-business' : undefined}
                  placeholder="Restaurant, store, or company"
                  className="mt-1.5 h-11 w-full rounded-xl border border-[#E2E8F0] bg-white px-3.5 text-sm text-[#020617] placeholder:text-[#64748B]/75 focus:border-[#0D7F80] focus:ring-2 focus:ring-[#E0F7F7] focus:outline-none"
                />
                {errors.businessName && (
                  <p id="error-business" className="mt-1 text-xs text-red-600">
                    {errors.businessName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="enquiry-email"
                  className="block text-xs font-semibold text-[#020617]"
                >
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  id="enquiry-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'error-email' : undefined}
                  placeholder="you@company.com"
                  className="mt-1.5 h-11 w-full rounded-xl border border-[#E2E8F0] bg-white px-3.5 text-sm text-[#020617] placeholder:text-[#64748B]/75 focus:border-[#0D7F80] focus:ring-2 focus:ring-[#E0F7F7] focus:outline-none"
                />
                {errors.email && (
                  <p id="error-email" className="mt-1 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="enquiry-phone"
                  className="block text-xs font-semibold text-[#020617]"
                >
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  id="enquiry-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'error-phone' : undefined}
                  placeholder="Phone or WhatsApp number"
                  className="mt-1.5 h-11 w-full rounded-xl border border-[#E2E8F0] bg-white px-3.5 text-sm text-[#020617] placeholder:text-[#64748B]/75 focus:border-[#0D7F80] focus:ring-2 focus:ring-[#E0F7F7] focus:outline-none"
                />
                {errors.phone && (
                  <p id="error-phone" className="mt-1 text-xs text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="enquiry-service"
                  className="block text-xs font-semibold text-[#020617]"
                >
                  Interested Service <span className="text-red-600">*</span>
                </label>
                <select
                  id="enquiry-service"
                  value={form.service}
                  onChange={(e) =>
                    updateField(
                      'service',
                      e.target.value as (typeof serviceOptions)[number]
                    )
                  }
                  className="mt-1.5 h-11 w-full rounded-xl border border-[#E2E8F0] bg-white px-3.5 text-sm text-[#020617] focus:border-[#0D7F80] focus:ring-2 focus:ring-[#E0F7F7] focus:outline-none"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="enquiry-budget"
                  className="block text-xs font-semibold text-[#020617]"
                >
                  Estimated Budget (Optional)
                </label>
                <input
                  id="enquiry-budget"
                  type="text"
                  value={form.budget}
                  onChange={(e) => updateField('budget', e.target.value)}
                  placeholder="Optional (INR)"
                  className="mt-1.5 h-11 w-full rounded-xl border border-[#E2E8F0] bg-white px-3.5 text-sm text-[#020617] placeholder:text-[#64748B]/75 focus:border-[#0D7F80] focus:ring-2 focus:ring-[#E0F7F7] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="enquiry-description"
                  className="block text-xs font-semibold text-[#020617]"
                >
                  Project Description <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="enquiry-description"
                  rows={4}
                  required
                  value={form.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  aria-invalid={Boolean(errors.description)}
                  aria-describedby={errors.description ? 'error-desc' : undefined}
                  placeholder="Describe your current workflow, number of tables/cards, or software requirement..."
                  className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] bg-white p-3.5 text-sm text-[#020617] placeholder:text-[#64748B]/75 focus:border-[#0D7F80] focus:ring-2 focus:ring-[#E0F7F7] focus:outline-none"
                />
                {errors.description && (
                  <p id="error-desc" className="mt-1 text-xs text-red-600">
                    {errors.description}
                  </p>
                )}
              </div>
            </div>

            {submitState.kind !== 'idle' && (
              <div
                role="status"
                className={`mt-5 flex items-start gap-2.5 rounded-xl border p-3.5 text-xs leading-relaxed sm:text-sm ${
                  submitState.kind === 'success'
                    ? 'border-[#AFEAEA] bg-[#EEFCFC] text-[#020617]'
                    : submitState.kind === 'unconfigured'
                    ? 'border-[#AFEAEA] bg-[#EEFCFC]/70 text-[#020617]'
                    : 'border-red-200 bg-red-50 text-red-700'
                }`}
              >
                {submitState.kind === 'success' && (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0D7F80]" />
                )}
                {submitState.kind === 'unconfigured' && (
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#0D7F80]" />
                )}
                {submitState.kind === 'error' && (
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                )}
                <span>{submitState.message}</span>
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#64748B]">
                Written scope provided after discovery discussion.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-full bg-[#0D7F80] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0C6A6B] disabled:opacity-60"
              >
                <span>{submitting ? 'Submitting...' : 'Submit Enquiry'}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
