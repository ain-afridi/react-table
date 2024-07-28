import React, { useEffect, useRef } from 'react'

const Checkbox = React.forwardRef(({ indeterminate, ...rest }: any, ref) => {
    
    const defaultRef = useRef();
    const resolvedRef: any = ref || defaultRef;

    useEffect(() => {
        if (resolvedRef?.current) {
            resolvedRef.current.indeterminate = indeterminate;
      }
    }, [resolvedRef, indeterminate])

    
  return (
      <>
      <input type='checkbox' ref={resolvedRef} {...rest} />
      </>
  )
})

export default Checkbox