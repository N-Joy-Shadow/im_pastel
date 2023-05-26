import '../globals.css'



export default function Home() {

  return (
    <main>
      <div className='flex justify-center'>
        <div className="text-center mt-5 justify-center items-center flex">
          <div
            className="w-[600px] h-[959px] relative  rounded-2xl bg-white mx-4 mt-5"
            style={{ boxShadow: "gray 0px 3px 6px 0px" }}
          >
            <div className="flex justify-between items-center w-[308px] absolute left-0 top-6 px-12">

              <p className="hover:cursor-pointer flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#0f2552]">
                Ayatsuno Yuni
              </p>
            </div>
            <svg
              width={251}
              height={1}
              viewBox="0 0 251 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[28.1px] top-[60.1px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <line
                y1="0.6"
                x2={251}
                y2="0.6"
                stroke="#E4E5E7"
                stroke-width="0.8"
              />
            </svg>

            <div className="flex inherit justify-center items-center text-center mx-auto w-[516px] top-[77px]">
              <img className='w-auto ' src='/static/yuni.png'></img>
            </div>
          </div>
          <div
            className="w-[600px] h-[959px] relative  rounded-2xl bg-white mx-4 mt-5"
            style={{ boxShadow: "gray 0px 3px 6px 0px" }}
          >
            <div className="flex justify-between items-center w-[308px] absolute left-0 top-6 px-12">

              <p className="hover:cursor-pointer flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#0f2552]">
                Airi Kanna
              </p>
            </div>
            <svg
              width={251}
              height={1}
              viewBox="0 0 251 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[28.1px] top-[60.1px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <line
                y1="0.6"
                x2={251}
                y2="0.6"
                stroke="#E4E5E7"
                stroke-width="0.8"
              />
            </svg>

            <div className="flex inherit justify-center items-center text-center mx-auto w-[516px] top-[77px]">
              <img className='w-auto ' src='/static/canna.png'></img>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

