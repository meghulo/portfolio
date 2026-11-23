export default async function handler(req, res) {
  const { formId, apiKey } = req.query;
  
  if (!formId || !apiKey) {
    return res.status(400).json({ error: 'Missing formId or apiKey' });
  }

  try {
    // Forminit API তে রিকোয়েস্ট পাঠানোর চেষ্টা (Bearer Token সহ)
    let response = await fetch(`https://api.forminit.com/v1/forms/${formId}/submissions`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'X-API-Key': apiKey
      }
    });

    // যদি প্রথম এন্ডপয়েন্ট ব্যর্থ হয়, তবে ভিন্ন এন্ডপয়েন্ট চেষ্টা করি
    if (!response.ok) {
      response = await fetch(`https://api.forminit.com/v1/forms/${formId}`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'X-API-Key': apiKey
        }
      });
    }
    
    // রেসপন্স ডেটা পাঠানো
    const data = await response.json();
    res.status(response.status).json(data);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
