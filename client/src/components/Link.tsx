import React from 'react'

interface LinkProps {
   link: string
   children: string
}

export default function Link(props: LinkProps): JSX.Element {
   return (
      <a
         className='link'
         target='_blank'
         href={props.link || '#'}
         rel='noreferrer'
      >
         {props.children}
      </a>
   )
}
