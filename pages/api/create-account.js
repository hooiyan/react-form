export default function handler(req, res) {
  const body = req.body

  res.status(200).json({
    data: {
      message: `Your account with ${body.loginMethod} was created successfully!`,
    },
  })
}
