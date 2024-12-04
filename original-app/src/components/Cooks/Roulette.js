import React from 'react'
import { useState, useEffect, useCallback, memo } from 'react'
import { Box, Button, TextField } from '@mui/material'

export const Roulette = memo(() => {
  const [start, setStart] = useState(false);
  const [index, setIndex] = useState(0);

  const rouletteContents = [
    //料理の一覧、食材の一覧に変えた方が適切かもな Propsで食材カテゴリ一覧を渡せれたらいいかもな
    // それかこの材料を基にフィルタリングかけた食材カテゴリー、中カテゴリで指定したらいっぱい料理の種類でランキングを表示できるって感じかな？
    "カレー",
    "パスタ",
    "唐揚げ",
    "天ぷら",
    "中華",
    "ハンバーグ",
    "うどん",
    "肉じゃが"
  ];

  //ボタンの文言を変更する処理
  const startRoulette = useCallback(() => {
    setStart(!start);
  }, [start]);

  //ルーレットを回す処理
  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setIndex((oldIndex) => {
          if (oldIndex < rouletteContents.length - 1) return oldIndex + 1;
          return 0;
        });
      }, 50);//ルーレットの中身を切り替える速度
      return () => clearInterval(interval);
    } else if (!start) {
      return () => clearInterval();
    }
  }, [start]);

  return (
    <>
      <Box
        sx={{
          justifyContent: 'center',
          m:2
        }}
      >
        <Box
          sx={{
            p:2
          }}
        >
          {rouletteContents[index]}
        </Box>
        <Box
          sx={{
            display: 'flex',         // 横並びにする
            justifyContent: 'center', // 中央揃えにする
            m: 2                     // 上部にマージンを追加
          }}
        >
          <Button type="button" variant='contained' onClick={startRoulette}>
            {start ? "ストップ" : "スタート"}
          </Button>
        </Box>
      </Box>
    </>
  )
});
