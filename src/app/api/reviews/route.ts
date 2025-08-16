import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.PLACE_ID;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&language=de&key=${apiKey}`;

  try {
    const response = await fetch(url, { cache: 'no-store' });
    const data = await response.json();

    if (data.status !== 'OK') {
      const errorMessage = data.error_message || `An error occurred: ${data.status}`;
      console.error('Google API Error:', errorMessage);
      return NextResponse.json({ error: `Failed to fetch reviews: ${errorMessage}`, details: data }, { status: 500 });
    }

    return NextResponse.json(data.result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Internal Server Error:', message);
    return NextResponse.json({ error: 'Internal Server Error', details: message }, { status: 500 });
  }
}