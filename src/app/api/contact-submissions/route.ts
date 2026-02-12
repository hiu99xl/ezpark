import { NextRequest } from 'next/server';
import { saveContactSubmission } from '@/lib/contact-store';
import type { ContactSubmissionBody } from '@/lib/contact-store';

export type { ContactSubmissionBody } from '@/lib/contact-store';

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as unknown;

    if (!body || typeof body !== 'object') {
      return Response.json(
        { error: 'Invalid body' },
        { status: 400 }
      );
    }

    const { name, email, phone, site, language } = body as Record<string, unknown>;

    if (typeof name !== 'string' || !name.trim()) {
      return Response.json(
        { error: 'name is required' },
        { status: 400 }
      );
    }
    if (typeof email !== 'string' || !email.trim()) {
      return Response.json(
        { error: 'email is required' },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return Response.json(
        { error: 'Invalid email' },
        { status: 400 }
      );
    }
    if (typeof phone !== 'string' || !phone.trim()) {
      return Response.json(
        { error: 'phone is required' },
        { status: 400 }
      );
    }
    if (typeof site !== 'number' || site < 0) {
      return Response.json(
        { error: 'site must be a non-negative number' },
        { status: 400 }
      );
    }
    if (typeof language !== 'number' || language < 0) {
      return Response.json(
        { error: 'language must be a non-negative number' },
        { status: 400 }
      );
    }

    const payload: ContactSubmissionBody = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      site,
      language,
    };

    const backendUrl = process.env.CONTACT_SUBMISSIONS_BACKEND_URL;
    if (backendUrl) {
      const res = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const text = await res.text();
        return Response.json(
          { error: 'Backend error', details: text },
          { status: res.status }
        );
      }
      return Response.json({ ok: true }, { status: 201 });
    }

    await saveContactSubmission(payload);
    return Response.json({ ok: true }, { status: 201 });
  } catch {
    return Response.json(
      { error: 'Invalid JSON or server error' },
      { status: 400 }
    );
  }
}
