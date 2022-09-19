export default function handler(req, res) {
  const body = req.body

  if (body.username !== 'jane123' || body.password !== '123456') {
    res.status(401).json({ message: 'Unauthorized!' })
  }

  res.status(200).json({ message: `You are logged in as ${body.username}` })
}
