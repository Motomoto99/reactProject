import { Box, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'



export default function Lifespan() {
  const { register, handleSubmit, formState: { error } } = useForm()

  return (
    <div>
      <h2 className='text-2xl p-3 font-serif font-bold'>寿命計算機</h2>
      {/*
        フォームに入力させて計算させる。
        https://www.taiju-life.co.jp/joyful/simu03/index.php
        今の年齢、診断した余命（平均余命表を表示）、現在時刻から余命のカウントダウンを表示する
        いろんな単位で表示
        フォームの下のところか右側に表示させようか
      */}
      <Box>
        <form>
          <Box>
            <TextField id="filled-basic" label="Filled" variant="filled" type='number' />
          </Box>
          <Box>
            <TextField id="filled-basic" label="Filled" variant="filled" />
          </Box>
        </form>
      </Box>

    </div>
  )
}
