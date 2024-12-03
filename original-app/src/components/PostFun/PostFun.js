import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import Basic from './Basic';
import Optional from './Optional';
import Confirm from './Confirm';

export default function PostFun() {
  const [stepIndex, setStepIndex] = useState(0);

  const handleNext = () => setStepIndex(prev => prev + 1);
  const handleBack = () => setStepIndex(prev => prev - 1);

  function getStepContent(stepIndex, handleNext, handleBack) {
    switch (stepIndex) {
      case 0:
        return <Basic handleNext={handleNext} />;
      case 1:
        return <Optional handleNext={handleNext} handleBack={handleBack} />;
      case 2:
        return <Confirm handleBack={handleBack} />;
      default:
        return 'Unknown stepIndex';
    }
  }


  return (
    <Box>
      {/* 
      ・タイトルなどの入力ページ
        タイトル、詳細、登録日時、データ（期限や達成度の割合）を入力したりする
        登録完了イベント
      ・投稿内容を表示するページ
        ダッシュボード形式で一覧表示して、クリックしたら個々のページを表示したりしたら面白そう。
        ダッシュボードとは別で投稿するためのイベントボタンを教えて入力ページに遷移かな
      */}
      <h2 className='text-2xl p-3 font-serif font-bold '>目標投稿機能</h2>
      <p className='font-serif pb-2'>
        目標を投稿する機能です。<br />
        ダッシュボードには、すでに投稿した目標を一覧表示しています。<br />
        投稿ボタンを押して新しい目標を投稿しよう！
      </p>
      <Box>
        {getStepContent(stepIndex, handleNext, handleBack)}
      </Box>
    </Box>
  )
}
