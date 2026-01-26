exports.handler = async (event, context) => {
  // This function pulls the variables you set in the Netlify UI
  // and sends them to your React frontend securely.
  
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing environment variables on Netlify" }),
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: supabaseUrl,
      key: supabaseKey,
    }),
  };
};