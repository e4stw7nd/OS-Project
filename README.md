
# Voice Controlled OS

Our task is to build a system that will decode your speech and perform the operating system file operations.

Key features are as following:

- The operations that has to be performed are: Make a particular directory, Go to a particular directory, Show content of current directory, Create file, open file, rename file and delete file.
- Based on the voice commands, the corresponding operation will be performed. For example, if I say, “Create file program.cpp”, then a file named program.cpp will be created inside the current directory.
- Shows a completion status message (success or error if any) on the UI after performing certain voice command


## Brief Implementation
- The frontend is made with react and will run on localhost:3000. Voice will be recorded with help of react-audio-recorder and then converted to file and sent to a django backend server through post request
## Authors

- [Arghyadeep Sadhukhan (22JE0159)](https://www.github.com/arghyadeep04)

