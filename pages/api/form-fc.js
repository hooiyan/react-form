export default function handler(req, res) {
  const body = req.body

  res.status(200).json({
    message: `Heyyyy I got you - ${body.username} with your login method - ${body.loginMethod}`,
  })
}
