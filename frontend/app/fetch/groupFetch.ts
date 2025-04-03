import { CHAT_GROUP_URL } from '@/lib/apiEndPoints';

export async function fetchChatGroups(token: string) {
  const res = await fetch(CHAT_GROUP_URL, {
    headers: {
      Authorization: token,
    },
    next: {
      revalidate: 60 * 60, // 1 hour
      tags: ['dashboard'],
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const response = await res.json();
  if (response?.data ) {
    return response;
  }
  return [];
}
