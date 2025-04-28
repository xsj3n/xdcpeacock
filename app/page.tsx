import Image from "next/image";

export default function Home() {
  return (
    <main>
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="rounded-md border-2 border-black"></div>
      <div className="rounded-md border-2 border-black"></div>
      <div className="rounded-md border-2 border-black"></div>
      <div className="rounded-md border-2 border-black"></div>
    </div>
    <div className="justify-center p-5">
      <p className="text-center">Icon here</p>
      <p className="text-center">A memecoin</p>
    </div>
    <div className="justify-center gap-1 p-4">
      <h2 className="p-4 text-center">About XDCPeacock</h2>
      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et volutpat justo, ut lacinia ligula. Donec ultrices commodo malesuada. Curabitur placerat lorem urna, nec commodo neque aliquet in. Integer in ipsum ut lorem porta vestibulum. Ut id ligula gravida dui lobortis placerat vitae nec tortor. Fusce elementum non massa ut mattis. Sed laoreet orci ante, sit amet ornare sem cursus quis. </p>
    </div>
    </main>
  );
}
