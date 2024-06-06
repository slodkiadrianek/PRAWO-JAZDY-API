import { downloadQuestion } from "../model/questionDownload.js";

const randomQuestion = async (req, res, next) => {
  const number = Math.trunc(Math.random() * 3549 + 1);
  const question = await downloadQuestion(number);

  res.json({ question: question });
};

export { randomQuestion };
