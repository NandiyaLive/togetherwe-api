export default async (_, res) => {
  const query = req.query;
  const {id} = query
  
  const data = [id]
  
  console.log(id)
  
  return res.status(200).json({ data });
};
