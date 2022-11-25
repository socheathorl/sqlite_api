import prisma from "../../../lib/prisma";

// POST /api/user
// Required fields in body: name, email
export default async function handle(req, res) {
  console.log(req.body);
  if (req.method === "POST") {
    const result = await prisma.user.create({
      data: {
        ...req.body,
      },
    })
    res.json(result)
  } else {
    res.status(500).json({error: "Method not allow"});
  }
}