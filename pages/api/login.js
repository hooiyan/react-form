export default function handler(req, res) {
  const body = req.body

  if (!body.username || !body.password) {
    res.status(400).json({ data: 'No input' })
  }

  res
    .status(200)
    .json({ data: { username: body.username, password: body.password } })
}
