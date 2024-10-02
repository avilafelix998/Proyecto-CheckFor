import { createJwt } from "../helpers/createJwt.js";
// import { createUser, getUserByCredentials } from "../models/user.model.js";

export const signInCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByCredentials(email, password);

    if (!user) {
      return res.status(401).json({ message: "las credenciales son iválidas" });
    }

    const token = await createJwt(user.id);

    res.cookie("token", token, { httpOnly: true });

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signUpCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validar que el correo y la contraseña estén presentes
    if (!email || !password) {
      return res.status(400).json({ message: "Se requiere el correo electrónico y la contraseña" });
    }

    // Crear el usuario
    const newUser = await createUser({ email, password });

    if (!newUser) {
      return res.status(400).json({ message: "No se pudo crear el usuario" });
    }

    const token = await createJwt(newUser.id);

    res.cookie("token", token, { httpOnly: true });
    res.status(201).json({ token, user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signOutCtrl = (_req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Cierre de sesión exitoso" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMeCtrl = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
