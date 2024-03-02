import React, { useContext, useEffect } from 'react'
import Message from './message';
import RecordingArea from './recordingarea';
import { Box, Grid } from '@mui/material';
import chatContext from '../context/chatcontext';

export default function ChatArea({onStop}) {

    const {messages}=useContext(chatContext);
    useEffect(()=>{
        console.log(messages);
    },[])
    

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "grey.200",
        paddingBottom:0
      }}
    >
        <div id="messages" className='h-[75%] overflow-auto p-2'>
      {/* <Box sx={{ flexGrow: 1, overflow: "auto", p: 2, }}> */}
        {messages.map((message) => (
          <Message  message={message} />
        ))}
      {/* </Box> */}
        </div>
      <Box sx={{ p: 1, backgroundColor: "background.default" }} >
        {/* <Grid container spacing={2}> */}
          {/* <Grid item xs={10}>
            <TextField
              fullWidth
              size="small"
              placeholder="Type a message"
              variant="outlined"
              value={input}
              onChange={handleInputChange}
            />
          </Grid> */}
          {/* <Grid item xs={2} sx={{display:"flex", justifyContent:"left"}}> */}
            {/* <Button
              fullWidth
              size="large"
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSend}
            >
              Send
            </Button> */}
            <RecordingArea onStop={onStop}/>
          {/* </Grid> */}
        {/* </Grid> */}
      </Box>
    </Box>
  );
}
