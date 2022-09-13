export default async (_, res) => {
  const query = req.query;
  const {id} = query
  
  return res.status(200).json({ id });
};
