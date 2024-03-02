import axios from 'axios'
const host='http://127.0.0.1:8000';

export const getText=async(voicefile)=>{
    // axios
    const res = await axios.post(`${host}/converttotext`, {
            voice:voicefile
        }, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        }
    )
    console.log("TEXT",res)
    return res.data.text
}

export const getExecute=async(command)=>{
    // axios
    const res = await axios.post(`${host}/execute`, {
            action:command,
        }, {
            headers: {
            'Content-Type': 'application/json'
            }
        }
    )
    console.log("EXEC",res)
    return res.data
}
