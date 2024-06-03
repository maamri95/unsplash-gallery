const images = Array.from({ length: 27 }, (_, i) => i + 1)
export const Gallery = () => {

    return (
        <div className="w-full grid grid-cols-3 gap-4">
            {
                images.map((image) => (
                    <div key={image} className="bg-gray-300 h-64 w-full rounded-md">-</div>
                ))
            }
        </div>
    );
}