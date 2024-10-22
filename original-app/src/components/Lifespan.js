import { ForkRight, Style } from '@mui/icons-material'
import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'



export default function Lifespan() {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' })
  const onsubmit = (data) => {
    console.log(data)
  }

  return (
    <Box
      sx={{display:'flex'}}
    >
      <Box
        sx={{borderRight:'2px solid #dddddd',pr:4}}
      >
        <h2 className='text-2xl p-3 font-serif font-bold '>寿命計算機</h2>
        {/*
        フォームに入力させて計算させる。
        https://www.taiju-life.co.jp/joyful/simu03/index.php
        今の年齢、診断した余命（平均余命表を表示）、現在時刻から余命のカウントダウンを表示する
        いろんな単位で表示
        フォームの下のところか右側に表示させようか
      */}
        <Box
          component="form"
          onSubmit={handleSubmit(onsubmit)}
          sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          autoComplete="off"
        >
          <Box>
            <TextField id="age" label="年齢" variant="filled" type='number'
              {...register('age', {
                required: '年齢は必須です',
                min: {
                  value: 0,
                  message: '年齢は０以上にしてください'
                },
                max: {
                  value: 120,
                  message: '年齢は１２０以下にしてください'
                }
              })}
              error={!!errors.age}
              helperText={errors.age ? errors.age.message : ''}
            />
          </Box>
          <Box>
            <TextField id="lifespan" label="余命" variant="filled" type='number'
              {...register('lifespan', {
                required: '余命は必須です',
                min: {
                  value: 0,
                  message: '余命は０以上にしてください'
                },
                max: {
                  value: 120,
                  message: '余命は１２０以上にしてください'
                }
              })}
              error={!!errors.lifespan}
              helperText={errors.lifespan ? errors.lifespan.message : ''}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',         // 横並びにする
              justifyContent: 'center', // 中央揃えにする
              gap: 2,                   // ボタン同士の間隔
              m: 2                     // 上部にマージンを追加
            }}
          >
            <Button type="submit" variant='contained'>計算開始</Button>
            <Button type='reset' variant='contained'>リセット</Button>
          </Box>
        </Box>

      </Box>
      <Box
        sx={{pl:4}}
      >
        <h2 className='text-1xl p-3 font-serif font-bold'>計算結果</h2>
      </Box>
    </Box>
  )
}
