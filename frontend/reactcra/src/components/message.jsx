import { Box, Paper, Typography } from '@mui/material';
import React from 'react'

export default function Message({message}) {
    const isBot = message.sender === "bot";

    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: isBot ? "flex-start" : "flex-end",
          mb: 1,
        //   height:"48%",
          minWidth:"40%",
          textAlign:"center"
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            paddingTop:1,
            backgroundColor: isBot ? "primary.light" : "secondary.light",
            borderRadius: isBot ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
            maxWidth:"40%",
          }}
        >
          <div className='p-0 pb-2 text-xs w-full text-left'>{message.time.toString().slice(0,25)}</div>
          <Typography variant="body1">{message.text}</Typography>
        </Paper>
      </Box>
    );
}
