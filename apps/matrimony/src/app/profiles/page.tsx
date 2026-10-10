import { redirect } from 'next/navigation';

/**
 * Canonical redirect from /profiles to /discover
 * Prevents 404s when members navigate to /matrimony/profiles
 */
export default function ProfilesIndexPage() {
  redirect('/discover');
}
