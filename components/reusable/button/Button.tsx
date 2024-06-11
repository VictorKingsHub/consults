import React from 'react'
import styles from "./Button.module.css"
import Link from 'next/link';

interface buttonProps{
    text: string;
    link: string;
}

export function ButtonBackground({text, link}: buttonProps) {
  return (
        <Link href={link}>
            <button className={styles.buttonBackground}> {text} </button>
        </Link>
  )
}

export function Button({text, link}: buttonProps) {
  return (
        <Link href={link}>
            <button className={styles.button}> {text} </button>
        </Link>
  )
}

  