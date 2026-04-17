export default async function handler(req, res) {
  const { messages } = req.body;
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENROUTER_KEY}`
    },
    body: JSON.stringify({ model: 'anthropic/claude-sonnet-4-6', messages })
  });
  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || '(no response)';
  res.json({ reply });
}
