// netlify/functions/proxy.js

const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const { url } = event.queryStringParameters;

  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'URL parameter is required' }),
    };
  }

  try {
    const response = await fetch(url);
    const body = await response.text();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/vnd.apple.mpegurl',
        'Access-Control-Allow-Origin': '*', // Allow cross-origin requests
      },
      body: body,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch the IPTV stream' }),
    };
  }
};