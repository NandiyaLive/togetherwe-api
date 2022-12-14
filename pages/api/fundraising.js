const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const handler = (req, res) => {
  const d = new Date();

  const data = [
      { id: "AEaTUnvneik", title: "Pleiku city", urls: { raw: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1", full: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=85", regular: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=1080", small: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=400", thumb: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=200" }, target_amount: 40000 },
      { id: "3eOIKv495OU", title: "Bloomington, Indiana", urls: { raw: "https://images.unsplash.com/photo-1607623618478-384d71c091d0?ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHwyfHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1", full: "https://images.unsplash.com/photo-1607623618478-384d71c091d0?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHwyfHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=85", regular: "https://images.unsplash.com/photo-1607623618478-384d71c091d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHwyfHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=1080", small: "https://images.unsplash.com/photo-1607623618478-384d71c091d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHwyfHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=400", thumb: "https://images.unsplash.com/photo-1607623618478-384d71c091d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHwyfHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=200" }, target_amount: 30000 },
      { id: "Blf94-yY50g", title: "Mexico City, Mexico", urls: { raw: "https://images.unsplash.com/photo-1577896852618-01da1dd79f7e?ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHwzfHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1", full: "https://images.unsplash.com/photo-1577896852618-01da1dd79f7e?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHwzfHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=85", regular: "https://images.unsplash.com/photo-1577896852618-01da1dd79f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHwzfHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=1080", small: "https://images.unsplash.com/photo-1577896852618-01da1dd79f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHwzfHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=400", thumb: "https://images.unsplash.com/photo-1577896852618-01da1dd79f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHwzfHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=200" }, target_amount: 10000 },
      { id: "TJxotQTUr8o", title: "Quebec, Canada", urls: { raw: "https://images.unsplash.com/photo-1605627079912-97c3810a11a4?ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHw0fHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1", full: "https://images.unsplash.com/photo-1605627079912-97c3810a11a4?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHw0fHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=85", regular: "https://images.unsplash.com/photo-1605627079912-97c3810a11a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHw0fHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=1080", small: "https://images.unsplash.com/photo-1605627079912-97c3810a11a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHw0fHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=400", thumb: "https://images.unsplash.com/photo-1605627079912-97c3810a11a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHw0fHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=200" }, target_amount: 20000 },
      { id: "iDCtsz-INHI", title: "Cambridge, UK", urls: { raw: "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1", full: "https://images.unsplash.com/photo-1540479859555-17af45c78602?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=85", regular: "https://images.unsplash.com/photo-1540479859555-17af45c78602?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=1080", small: "https://images.unsplash.com/photo-1540479859555-17af45c78602?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=400", thumb: "https://images.unsplash.com/photo-1540479859555-17af45c78602?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=200" }, target_amount: 30000 },
      { id: "uaPaEM7MiQQ", title: "Stuttgart, Germany", urls: { raw: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHw2fHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1", full: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHw2fHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=85", regular: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHw2fHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=1080", small: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHw2fHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=400", thumb: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkwNjV8MHwxfHNlYXJjaHw2fHxjaGlsZHJlbi1kb25hdGlvbnxlbnwwfDB8fA&ixlib=rb-1.2.1&q=80&w=200" }, target_amount: 50000 }
    ]

  return res.status(200).json({ data });
};

module.exports = allowCors(handler);
