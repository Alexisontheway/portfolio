const API_BASE = import.meta.env.VITE_API_URL || '';

export async function submitContactForm(data) {
  let response;
  try {
    response = await fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch {
    throw new Error('Could not reach the server. Check your connection and try again.');
  }

  // The body may be empty or non-JSON — e.g. a CDN/static host that swallows
  // the POST and returns 200 with no payload. Parse safely so we never crash
  // on an unexpected body.
  let body = null;
  try {
    body = await response.json();
  } catch {
    body = null;
  }

  if (!response.ok) {
    throw new Error(body?.message || 'Something went wrong. Please try again.');
  }

  // A 2xx without a JSON body — or one that isn't success:true — is NOT a real
  // success. The server always responds { success: true } on a saved message.
  if (!body || body.success !== true) {
    throw new Error(
      "We couldn't send your message — the server didn't respond correctly. Please email me directly instead."
    );
  }

  return body;
}
