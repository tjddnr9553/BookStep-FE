'use client'

import * as React from 'react'

import { Progress } from '@/components/ui/progress'
import { useEffect, useState } from 'react'

export function ProgressBar({ propProgress }: { propProgress: number }) {
  const [progress, setProgress] = useState(propProgress)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(propProgress), 500)
    return () => clearTimeout(timer)
  }, [propProgress])

  return <Progress value={progress} className="w-[100%] h-12px" />
}
