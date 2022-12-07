import React from 'react'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'
import { formatDate } from 'utils'
import IconButton from '@mui/material/IconButton'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import DeleteIcon from '@mui/icons-material/Delete'

export type PackType = {
    id: string
    question: string
    answer: string
    lastUpdated: string
    grade: number
}

type PropsType = {
    row: PackType
    onEdit: (cardId: string) => void
    onDelete: (cardId: string) => void
}

export const CardRow: React.FC<PropsType> = ({ row, onEdit, onDelete }) => {
    const onDeleteCardHandler = () => onDelete(row.id)

    const onEditCardHandler = () => onEdit(row.id)

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
                <UniCell text={row.question} />
            </TableCell>
            <TableCell align="center">
                <UniCell text={row.answer} />
            </TableCell>
            <TableCell align="center">{formatDate(row.lastUpdated)}</TableCell>
            <TableCell align="right">
                <Rating
                    name="card grade"
                    value={row.grade}
                    precision={0.1}
                    readOnly
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
            </TableCell>
            <TableCell align="right">
                <IconButton onClick={onEditCardHandler}>
                    <DriveFileRenameOutlineIcon />
                </IconButton>
                <IconButton onClick={onDeleteCardHandler}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export const UniCell: React.FC<{ text: string }> = ({ text }) => (
    <>{text.startsWith('data:image/') ? <img src={text} alt="question" /> : text}</>
)
