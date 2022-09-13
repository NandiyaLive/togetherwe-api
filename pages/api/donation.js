export default async (_, res) => {
  const query = req.query

  return res.status(200).json({ query });
};
