import React, { useState } from 'react'

interface LinkProps {
   link: string
   children: string
}

export default function Link(props: LinkProps): JSX.Element {
   const [hovered, setHovered] = useState<boolean>(false)

   return (
      <a
         className={hovered ? 'link linkHovered' : 'link'} //Just for example testing purpose...
         target='_blank'
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
         href={props.link || '#'}
         rel='noreferrer'
      >
         {props.children}
      </a>
   )
}
