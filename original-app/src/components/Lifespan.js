import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'



export default function Lifespan() {
  //React hook formの定義
  const { register, handleSubmit, formState: { errors } ,reset} = useForm({ mode: 'onChange' })
  //ステート定義
  const [output, setOutput] = useState(0)
  const [seconds, setSeconds] = useState(0);
  //フォーム送信イベント処理
  const onsubmit = (data) => {
    const limit = Number(data.age) + Number(data.lifespan);
    const numSecond = Number(data.lifespan) * 365 * 24 * 60 * 60;
    setSeconds(numSecond);
    setOutput(limit);
  }
  //カウントダウン描画処理
  useEffect(() => {
    if (seconds === 0) {
      return;
    }
    const secondInterval = setInterval(() => {
      setSeconds(prevSeconds => {
        return prevSeconds - 1
      })
    }, 1000)
    return () => clearInterval(secondInterval)
  }, [seconds])

  //リセットイベント処理
  const onreset = () => {
    reset() //バリデーションの状態もリセットできる
    setOutput(0)
    setSeconds(0)
  }

  return (
    <Box>
      <h2 className='text-2xl p-3 font-serif font-bold '>寿命計算機</h2>
      <p className='font-serif pb-2'>
        今の自分の年齢と診断結果の余命を入力をし、計算開始ボタンを押すことで何歳まで生きていられるかと残された時間が表示される。<br/>
        （診断がまだの方は<a href='https://www.taiju-life.co.jp/joyful/simu03/index.php'className='text-blue-500 border-b-2 hover:bg-sky-200'>こちら</a>をクリック！）
      </p>
      <Box
        sx={{ display: 'flex' }}
      >
        <Box
          sx={{ borderRight: '2px solid #dddddd', pr: 4 }}
        >
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
                  min: { value: 0, message: '年齢は０以上にしてください'},
                  max: { value: 120, message: '年齢は１２０以下にしてください'}
                })}
                error={!!errors.age} //フォームでエラーがあったらerrors.ageがセットされる
                helperText={errors.age?.message} //オプショナルチェイニング
              />
            </Box>
            <Box>
              <TextField id="lifespan" label="余命" variant="filled" type='number'
                {...register('lifespan', {
                  required: '余命は必須です',
                  min: { value: 0, message: '余命は０以上にしてください'},
                  max: { value: 120, message: '余命は１２０以上にしてください'}
                })}
                error={!!errors.lifespan}//ダブル否定、値を明示的にboolean変数に変換するための手法
                helperText={errors.lifespan?.message}
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
              <Button type='reset' variant='contained' onClick={onreset}>リセット</Button>
            </Box>
          </Box>

        </Box>
        <Box
          sx={{ pl: 4 }}
        >
          <h2 className='text-2xl p-3 font-serif font-bold'>計算結果</h2>
          <Box>
            <h3 className='p-2'>何歳まで生きていられる？（推定）</h3>
            <Box>・{output}歳</Box>
            <h3 className='p-2'>残された時間は？</h3>
            <Box>・秒単位：{seconds}</Box>
            <Box>・分単位：{Math.floor(seconds / 60)}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
