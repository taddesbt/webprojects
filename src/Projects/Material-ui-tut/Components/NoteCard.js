import React from 'react'

import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { blue, green, pink, red, yellow } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    avatar: {
      backgroundColor: (note) => {
        if (note.category == 'work') {
         
          return yellow[700]
        }
        if (note.category == 'money') {
          return green[500]
        }
        if (note.category == 'todos') {
          return pink[500]
        }
        return blue[500]
      },
    }
  })


function NoteCard({ note, handleDelete }) {
    const classes = useStyles(note)



    return (
        <div>
            <Card elevation={1} >
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar} >
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
              


                    action={
                        <IconButton onClick={() => handleDelete(note.id)}  >
                            <DeleteIcon />
                        </IconButton>
                    }

                    title={note.title}
                    subheader={note.category}

                >
                </CardHeader>

                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {note.details}
                    </Typography>
                </CardContent>



            </Card>



        </div>



    )
}

export default NoteCard