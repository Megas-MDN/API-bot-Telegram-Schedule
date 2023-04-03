module.exports = (req, res, next) => {
  try {
    const {
      message: {
        chat: { id },
        text,
      },
    } = req.body;
    if (!id || !text) return res.status(400).send();
    req.msg = { id, text };
    return next();
  } catch (error) {
    return next({ message: error.message });
  }
};
