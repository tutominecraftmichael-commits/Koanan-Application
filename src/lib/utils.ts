import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMinutesToHours(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMins = minutes % 60;
  if (hours === 0) return `${remainingMins} min`;
  if (remainingMins === 0) return `${hours}h`;
  return `${hours}h ${remainingMins}m`;
}

export function parseTimeToMinutes(timeStr: string): number {
  if (!timeStr || !timeStr.includes(':')) return 0;
  const [h, m] = timeStr.split(':').map(Number);
  return (h || 0) * 60 + (m || 0);
}

export function minutesToTimeString(minutes: number): string {
  const h = Math.floor(minutes / 60) % 24;
  const m = minutes % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9) + Date.now().toString(36).substring(4);
}

export function getDaysRemainingFrom(targetDateStr?: string, fromDate: Date = new Date()): number | null {
  if (!targetDateStr) return null;
  const parts = targetDateStr.split('-');
  if (parts.length < 3) return null;
  const targetYear = parseInt(parts[0], 10);
  const targetMonth = parseInt(parts[1], 10) - 1;
  const targetDay = parseInt(parts[2], 10);
  const target = new Date(targetYear, targetMonth, targetDay, 0, 0, 0, 0);

  const from = new Date(fromDate);
  from.setHours(0, 0, 0, 0);

  const diffTime = target.getTime() - from.getTime();
  return Math.round(diffTime / (1000 * 60 * 60 * 24));
}

export function getDaysRemaining(targetDateStr?: string): number | null {
  return getDaysRemainingFrom(targetDateStr, new Date());
}

/**
 * Formats a notification ISO date string into both exact time and relative instant.
 * Example: "À l'instant (22:45)", "Il y a 3 min (22:42)", "Aujourd'hui à 14:30"
 */
export function formatNotificationTime(isoString?: string): string {
  try {
    const now = new Date();
    const date = isoString ? new Date(isoString) : now;
    const targetDate = isNaN(date.getTime()) ? now : date;

    const hours = targetDate.getHours().toString().padStart(2, '0');
    const minutes = targetDate.getMinutes().toString().padStart(2, '0');
    const timeFormatted = `${hours}:${minutes}`;

    const diffMs = Math.max(0, now.getTime() - targetDate.getTime());
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHours = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSec < 60) {
      return `À l'instant (${timeFormatted})`;
    }
    if (diffMin < 60) {
      return `Il y a ${diffMin} min (${timeFormatted})`;
    }
    if (diffHours < 24 && targetDate.getDate() === now.getDate() && targetDate.getMonth() === now.getMonth() && targetDate.getFullYear() === now.getFullYear()) {
      return `Aujourd'hui à ${timeFormatted}`;
    }
    if (diffDays === 1 || (diffHours < 48 && targetDate.getDate() === now.getDate() - 1)) {
      return `Hier à ${timeFormatted}`;
    }
    const day = targetDate.getDate().toString().padStart(2, '0');
    const month = (targetDate.getMonth() + 1).toString().padStart(2, '0');
    return `Le ${day}/${month} à ${timeFormatted}`;
  } catch {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `À l'instant (${hours}:${minutes})`;
  }
}
