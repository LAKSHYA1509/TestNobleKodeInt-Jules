import { CldImage } from "next-cloudinary"

interface BannerProp{
img:string,
alt?:string
h1:string
p:string    

}


export default function BannerImg( {img,alt,h1,p} :BannerProp) {
    return (
        <div>
            <section className="relative w-full h-[85vh] md:h-[70vh] lg:h-[85vh] flex items-center justify-center text-white">
                <CldImage
                    src={img}
                    alt={alt || "App developmnet"}
                    fill
                    className="object-cover brightness-[0.3]"
                />
                <div className="relative z-10 text-center px-4 md:px-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"> {h1}</h1>
                    <p className="text-base md:text-lg mt-4 opacity-90">{p}</p>
                </div>
            </section>
        </div>
    )
}
