export default async (_, res) => {
  const data = [10,20,50,100,500]

  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=30");

  return res.status(200).json({ data });
};
