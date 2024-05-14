/*
index: listagem de sessões
store(add): criar uma sessão
show: quando queremos alterar uma ÚNICA sessão
updade: quando queremos alterar alguma sessão
destroy(delete): quando queremos deletar uma sessão
*/

import User from "../models/User";
import * as Yup from "yup";

class SessionControler {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });
    const { email } = req.body;
    if (!(await schema.isValid(req.body))) {
      return req.status(400).json({ error: "Falha na validação" });
    }
    let user = await User.findOne9({ email });
    if (!user) {
      user = await User.create({ email });
    }
    return res.json(user);
  }
}

export default new SessionController