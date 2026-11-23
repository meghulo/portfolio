export default async function handler(req, res) {
  const { formId, apiKey } = req.query;
  
  if (!formId || !apiKey) {
    return res.status(400).json({ error: 'Missing formId or apiKey' });
  }

  try {
    // Forminit API-তে সঠিক হেডার সহ রিকোয়েস্ট
    const response = await fetch(`https://api.forminit.com/v1/forms/${formId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-API-Key': apiKey
      }
    });
    
    const data = await response.json();
    res.status(response.status).json(data);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
