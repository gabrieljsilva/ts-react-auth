import './style.css'
import React, { ReactNode, useState } from 'react'
import { Send } from '@material-ui/icons'

import { AButton } from '../../shared/components/AButton'

import {
  AButtonColors,
  AButtonShapes,
  AButtonSizes,
  AButtonIconSide,
} from '../../shared/components/AButton/type'

export function Home() {
  const [color, setColor] = useState<AButtonColors>('primary')
  const [shape, setShape] = useState<AButtonShapes>('square')
  const [size, setSize] = useState<AButtonSizes>('md')
  const [block, setBlock] = useState(false)
  const [iconSide, setIconSide] = useState<AButtonIconSide>('left')
  const [icon, setIcon] = useState<ReactNode | undefined>(<Send />)

  return (
    <>
      <div className="buttonsContainer button">
        <AButton
          block={block}
          size={size}
          shape={shape}
          icon={icon}
          color={color}
          iconSide={iconSide}
        >
          Button
        </AButton>
      </div>

      <div className="buttonsContainer">
        <button className="button" onClick={() => setColor('primary')}>
          Primary
        </button>
        <button className="button" onClick={() => setColor('secondary')}>
          Secondary
        </button>
        <button className="button" onClick={() => setColor('success')}>
          Success
        </button>
        <button className="button" onClick={() => setColor('danger')}>
          Danger
        </button>
        <button className="button" onClick={() => setColor('warning')}>
          Warning
        </button>
        <button className="button" onClick={() => setColor('info')}>
          Info
        </button>
      </div>

      <div className="buttonsContainer">
        <button className="button" onClick={() => setShape('square')}>
          Square
        </button>
        <button className="button" onClick={() => setShape('rounded')}>
          Rounded
        </button>
      </div>

      <div className="buttonsContainer">
        <button className="button" onClick={() => setSize('sm')}>
          Sm
        </button>
        <button className="button" onClick={() => setSize('md')}>
          Md
        </button>
        <button className="button" onClick={() => setSize('lg')}>
          Lg
        </button>
      </div>

      <div className="buttonsContainer">
        <button className="button" onClick={() => setBlock(!block)}>
          {block ? 'Normal' : 'Block'}
        </button>
      </div>

      <div className="buttonsContainer">
        <button className="button" onClick={() => setIconSide('left')}>
          Left Icon
        </button>
        <button className="button" onClick={() => setIconSide('right')}>
          Right icon
        </button>
      </div>

      <div className="buttonsContainer">
        <button className="button" onClick={() => setIcon(<Send />)}>
          Show Icon
        </button>

        <button className="button" onClick={() => setIcon(undefined)}>
          Hide Icon
        </button>
      </div>
    </>
  )
}
