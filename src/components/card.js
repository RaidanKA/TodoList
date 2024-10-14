export default function Card({children}) {
    return (
        <div className='mx-5 md:mx-60 mt-10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100'>
            {children}
        </div>
    )
}