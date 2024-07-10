import dynamic from 'next/dynamic'

export const clientComponent = (importedComponent: any) =>
  dynamic(() => importedComponent, {
    ssr: false
  })
