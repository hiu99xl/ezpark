import { promises as fs } from 'fs';
import path from 'path';

export type ContactSubmissionBody = {
  name: string;
  email: string;
  phone: string;
  site: number;
  language: number;
};

export type StoredSubmission = ContactSubmissionBody & {
  id: string;
  submittedAt: string;
};

const FILENAME = 'contact-submissions.json';

function getDataPath(): string {
  return path.join(process.cwd(), 'data', FILENAME);
}

export async function saveContactSubmission(
  payload: ContactSubmissionBody
): Promise<boolean> {
  const entry: StoredSubmission = {
    ...payload,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  };

  try {
    const filePath = getDataPath();
    const dir = path.dirname(filePath);
    await fs.mkdir(dir, { recursive: true });

    let list: StoredSubmission[] = [];
    try {
      const raw = await fs.readFile(filePath, 'utf-8');
      const parsed = JSON.parse(raw);
      list = Array.isArray(parsed) ? parsed : [];
    } catch {
    }

    list.push(entry);
    await fs.writeFile(filePath, JSON.stringify(list, null, 2), 'utf-8');
    return true;
  } catch {
    return false;
  }
}
