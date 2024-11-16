import axios from "axios"

export const generateText = async (title) => {
    const apiKey = process.env.RAPID_GPT_API_TOKEN
  console.log(apiKey)
    // try {
    //     const response = await axios.post(
    //         "https://chatgpt-42.p.rapidapi.com/chatgpt",
    //         {
    //             messages: [
    //                 {
    //                     role: "user",
    //                     content: `Generate a paragraph on ${title} minimum of 500 words`,
    //                 },
    //             ],
    //             web_access: false,
    //         },
    //         {
    //             headers: {
    //                 "x-rapidapi-key": apiKey,
    //                 "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
    //                 "Content-Type": "application/json",
    //             },
    //         }
    //     )

    //   // Return the generated text from the response
    //   console.log(response.data)
    //     return response.data.completions[0].text
    // } catch (error) {
    //     console.error("Error generating text:", error)
    // }
}
