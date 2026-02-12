import { redirect } from 'next/navigation';
import { defaultLocale } from '@/i18n/config';

// Force dynamic rendering to avoid prerender issues
export const dynamic = 'force-dynamic';

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
