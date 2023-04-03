const axios = require('axios');
const { urlApiTelegram } = require('../telegram/index');
module.exports = class MessageControler {
  static findByStr = (arr, str) =>
    arr.find((el) => el.toLocaleLowerCase().includes(str));

  static formatContent = (arrStr) => {
    const ano = +MessageControler.findByStr(arrStr, 'ano').replace('ano', '');
    const mes = +MessageControler.findByStr(arrStr, 'mes').replace('mes', '');
    const dia = +MessageControler.findByStr(arrStr, 'dia').replace('dia', '');
    const hora = +MessageControler.findByStr(arrStr, 'hora').replace(
      'hora',
      ''
    );
    const min = +MessageControler.findByStr(arrStr, 'min').replace('min', '');

    return [ano, mes, dia, hora, min].filter((el) => !Number.isNaN(el) && !el);
  };

  static sendMenssage = async (req, res, next) => {
    try {
      const { id, text } = req.msg;

      const [content, ...horas] = text.split('.');
      const format = MessageControler.formatContent(horas);
      await axios.post(`${urlApiTelegram}/sendMessage`, {
        chat_id: id,
        text: `Dados content: ${content} \n ${format.join(' - ')}`,
      });
      return res.status(204).send();
    } catch (error) {
      return next({ message: error.message });
    }
  };

  static checkStatus = (req, res, next) => {
    return res.status(200).send({ message: 'Server Up' });
  };
};
