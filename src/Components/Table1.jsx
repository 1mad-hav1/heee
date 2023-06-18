import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
const Table1 = () => {
    const [Datas,setData]=useState([])

    useEffect(()=>{
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then((response)=>{
             setData(response.data)
             })
    })
  return (
    <div>
            
            <TableContainer>
              <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>User-Id</TableCell>
                        <TableCell>Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Datas.map((value,index) => {
                        return(
                            <TableRow>
                                <TableCell>{value.id}</TableCell>
                                <TableCell>{value.title}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
              </Table>
            </TableContainer>
        
    </div>
  )
}

export default Table1