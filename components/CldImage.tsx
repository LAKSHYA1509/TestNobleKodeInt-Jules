"use client";
 
import { CldImage as CldImageDefault, CldImageProps }  from 'next-cloudinary';
 
const CldImage = (props: CldImageProps) => {
  return <CldImageDefault {...props} quality={'auto'} format='auto'/>
}
 
export default CldImage;