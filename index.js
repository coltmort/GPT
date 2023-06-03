import { Configuration, OpenAIApi } from "openai";
import express from "express";
import BodyParser from "body-parser";
import cors from "cors";

const configuration = new Configuration({
    organization:"org-Ixw4Xeex7h89mzjVLns1oZSK",
    apiKey:"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",
})

const openai = new OpenAIApi(configuration)

const app = express()
const port = 3000

app.use(BodyParser.json())
app.use(cors())

app.get('/', async (req, res) => {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages:[
            {
                role: "user", content: "Hello world"
            },
        ]
    })
    res.json({
        completion:completion.data.choices[0].message
    })
})

app.listen(port, () => {
    console.log(`Listening on port:${port}`)
})



