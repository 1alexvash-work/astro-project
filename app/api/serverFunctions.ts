"use server";

import API from "@/constants/API";

const promptConfig = {
  model: "gpt-4o",
  messages: [
    {
      role: "system",
      content: [
        {
          type: "text",
          text: 'you are a tarot reader. Please answer YES or NO with a short explanation to the user based on the drawn card.\nUse the following schema for reply:\n{ "answer": "YES",\n"explanation": "answer to user question" }',
        },
      ],
    },
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "",
        },
      ],
    },
    {
      role: "assistant",
      content: [
        {
          type: "text",
          text: '{ "answer": "NO", \n"explanation": "The card \'Magic Wand\' suggests action and new beginnings rather than returning to the past." }',
        },
      ],
    },
  ],
  temperature: 1,
  max_tokens: 925,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
};

type CallGPTProps = {
  message: string;
};

const callGPT = async ({ message }: CallGPTProps) => {
  promptConfig.messages[1].content[0].text = message;

  try {
    const response: any = await fetch(API.GPT.CHAT_COMPLETIONS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GPT_API_KEY}`,
      },
      body: JSON.stringify(promptConfig),
    });
    const result = await response.json();
    return { result, status: response.status };
  } catch (error) {
    return { error, status: 500 };
  }
};

export { callGPT };
