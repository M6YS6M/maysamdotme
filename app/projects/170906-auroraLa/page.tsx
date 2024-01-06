import Image from 'next/image';


  // More products...


// Create a function to import all images from a specific directory
function importAll(r) {
  return r.keys().map(r);
}

// Use require.context to get all image files from the specified directory
const images = importAll(require.context('./img/', false, /\.(png|jpe?g|svg)$/));
// Now, 'images' is an array containing the imported images


export default function project() {
  return (
    <div style={{ padding: '50px'}}>
      <h1 className="mt-1 text-sm text-gray-700 uppercase">wildwood</h1>

      {/* Loop through all images and render each one */}
      {images.map((image, index) => (
        <div key={index} style={{ padding: '10px',}}>
          <Image
            src={image.default}
            alt={`Image ${index + 1}`}
            
          />
        </div>
      ))}
    </div>
  );
}



//title: "Membrane"
//cover: "./thumbnail/thumb-zimarc.png"
//date: "2007-10-09"
//category: "Architecture"
//size: "l"
//tag: "good,nice"
