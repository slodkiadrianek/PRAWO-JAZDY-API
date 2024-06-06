import { downloadQuestion } from "../model/questionDownload.js";

const randomQuestion = async (req, res, next) => {
  let number;
  let question;
  while (!question) {
    number = Math.trunc(Math.random() * 3549 + 1);
    question = await downloadQuestion(number);
  }

  res.json({ question: question });
};

const diffrentCateg = async (req, res, next) => {
  const categ = req.params.categ;
  let number;
  let question;
  while (!question) {
    number = Math.trunc(Math.random() * 3549 + 1);
    question = await downloadQuestion(number, categ);
  }

  res.json({ question: question });
};

export { randomQuestion, diffrentCateg };
