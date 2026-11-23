export default async function handler(req, res) {
  const { formId, apiKey } = req.query;
  
  if (!formId || !apiKey) {
    return res.status(400).json({ error: 'Missing formId or apiKey' });
  }

  try {
    // প্রথমে v2 (Forminit) এন্ডপয়েন্ট চেষ্টা করি
    let response = await fetch(`https://api.forminit.com/v1/forms/${formId}`, {
      headers: {
        'Accept': 'application/json',
        'X-API-Key': apiKey
      }
    });

    // যদি v2 ফেইল করে, তবে v1 (Legacy) চেষ্টা করি
    if (!response.ok) {
      response = await fetch(`https://api.getform.io/v1/forms/${formId}?token=${apiKey}`, {
        headers: {
          'Accept': 'application/json'
        }
      });
    }
    
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
