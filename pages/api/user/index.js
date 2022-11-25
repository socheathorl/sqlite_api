import prisma from "../../../lib/prisma";

// POST /api/user
// Required fields in body: name, email
export default async function handle(req, res) {
  const resultPosts = await prisma.user.findMany();
  res.json(resultPosts)
}