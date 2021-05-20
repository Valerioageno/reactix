import React from 'react'
import renderer from 'react-test-renderer'
import Link from '../src/components/Link'

test('Link change class when hovered', () => {
   const component = renderer.create(
      <Link link='https://github.com/Valerioageno/reactix'>Repo</Link>
   )

   let tree = component.toJSON()
   expect(tree).toMatchSnapshot()

   // manually trigger the callback
   renderer.act(() => tree?.props.onMouseEnter())
   // re-rendering
   tree = component.toJSON()
   expect(tree).toMatchSnapshot()

   renderer.act(() => tree?.props.onMouseLeave())
   // re-rendering
   tree = component.toJSON()
   expect(tree).toMatchSnapshot()
})
