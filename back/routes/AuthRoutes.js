import bcrypt from "bcrypt";

const signUp = async (req, res) => {
  const { email, pseudo, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  prisma.user
    .create({
      data: {
        email,
        pseudo,
        password: hashedPassword,
      },
    })
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
};
