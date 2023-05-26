import React, { useEffect } from "react"
export default function Test() {
    return (
        <div className="text-center flex m-auto justify-center">
            <div className="">

                <iframe className="m-8" src="https://player.twitch.tv/?channel=ayatsunoyuni_stellive&parent=pastel.im" height="378" width="620" allowFullScreen={true}></iframe>
                <p className="text-black font-bold">아야츠노 유니</p>
            </div>
            <div>

                <iframe className="m-8" src="https://player.twitch.tv/?channel=airikanna_stellive&parent=pastel.im" height="378" width="620" allowFullScreen={true}></iframe>
                <p className="text-black font-bold">아이리 칸나</p>
            </div>
        </div>
    )
}