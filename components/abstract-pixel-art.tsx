export default function AbstractPixelArt() {
  return (
    <div className="mx-auto w-64 h-32 flex items-center justify-center">
      <div className="grid grid-cols-8 grid-rows-8 gap-1">
        {Array.from({ length: 64 }).map((_, index) => {
          // Create a simple abstract pattern
          const row = Math.floor(index / 8)
          const col = index % 8

          // Simple pattern logic
          const isColored =
            // Center square
            (row >= 2 && row <= 5 && col >= 2 && col <= 5) ||
            // Top left corner
            (row === 0 && col === 0) ||
            // Top right corner
            (row === 0 && col === 7) ||
            // Bottom left corner
            (row === 7 && col === 0) ||
            // Bottom right corner
            (row === 7 && col === 7)

          return <div key={index} className={`w-4 h-4 ${isColored ? "bg-[#7FE7E7]" : "bg-transparent"}`} />
        })}
      </div>
    </div>
  )
}
