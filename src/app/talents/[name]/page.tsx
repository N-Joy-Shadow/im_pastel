import Line from "@/components/Line"
import ButtonBase from "@/components/button/ButtonBase";
import NaverButton from "@/components/button/NaverButton";
import Image from "next/image";
import React from "react"

interface IPageParams {
    name : string
}
interface IResponse {
  color : string;
  img : string
  info : {
    name : {
      en : string,
      kr : string,
      jp? : string
    },
    detail : {
      age : number
      height : number
      birth : string
      summary : string
    },
    describe : string
  },
  external: IReponseExternal
}

interface IReponseExternal {
    [key : string] : ExternalRaw[]
}
interface ExternalRaw {
  title : string,
  href : string
}
interface External extends ExternalRaw {
  key :string
}



const getDetails = async (name : string) : Promise<IResponse> =>  {
  //const res = await fetch("",)

  //만약 아이리 칸나 라면
  return {
    color : "kanna",
    img : "/static/kanna.png",
    info : {
      name : {
        en : "Airi Kanna",
        kr : "아이리 칸나"
      },
      describe : "용궁의 부흥을 위해 지구를 찾아왔다.\n용궁의 황녀로서 지식과 시야를 넓히기 위해 용궁 생활을 뒤로하고 지구에 오게되었다.\n시청자들의 앞에 선 그녀에게선 지도자로서의 카리스마를 볼 수 있을 것이다.",
      detail : {
        age : 1700,
        height : 155,
        birth : "12월 2일",
        summary : "용궁의 황녀"
      },
    },
    external : {
      twitch : [{ href : "https://www.twitch.tv/airikanna_stellive", title : "Twitch"}],
      youtube : [{href : "https://youtube.com/@airikannach", title : "Youtube"},
                  {href : "https://www.youtube.com/@airikannach",title : "Music"},
                  {href : "https://www.youtube.com/channel/@Kannareplay", title : "Replay"}],
      soundcloud : [{href : "https://soundcloud.com/airikanna", title : "SoundCloud"}],
      twitter : [{href : "https://twitter.com/AiriKannaKR", title : "Twitter KR"},
                  {href : "https://twitter.com/airikanna_", title : "Twitter JP"}],
      naver_cafe : [{ href : "https://cafe.naver.com/ArticleList.nhn?search.clubid=29424353&search.menuid=131&search.boardtype=L", title : "Naver Cafe"}]
    }
  };
} 


const Page =async ({params} : {params : IPageParams}) => {
  var res = await getDetails(params.name)

  return (
    <>
        <p className={`absolute left-0 top-6 pl-12 text-start text-sm font-semibold ${colorclass[res.color]}`}>
            {res.info.name.en} | {res.info.name.kr}
        </p>
        <Line/>
        <div className={`flex xl:flex-row inherit justify-center mt-[70px] xl:mt-0 xl:top-[177px] flex-col ${colorclass[res.color]}`}>
          <Image width={240} height={355} alt={res.info.name.en} src={res.img} className=" w-[230px] h-[355px] xl:w-[440px] xl:h-[679px] rounded-lg xl:m-0 mt-[70px] m-auto"/>
          <div className="xl:block mt-16 xl:ml-20 cursor-default">
            <div className="text-[2.25rem] xl:text-7xl">{res.info.name.kr}</div>
            <div className="mt-4 ">{res.info.name.en}</div>
            <div className="mt-4 font-sunf">{res.info.detail.summary}</div>
            <div className="mt-4 font-sunf">{res.info.detail.height}cm | {res.info.detail.age}세 | {res.info.detail.birth}</div>

            <div className="text-center mx-4 xl:text-left mt-8 xl:ml-14 font-bold text-lg font-sunf xl:hover:cursor-default">
              {res.info.describe.split("\n").map((x,i) => {
                return (<>{x}<br/></>)
              })}
            </div>
            <div className="mx-10 xl:mx-0 xl:w-[500px] min-h-[250px] flex flex-wrap justify-start mt-20 xl:ml-16 text-center mb-10">
              {object2List(res.external).map((x,i) => (<ButtonBase key={i} href={x.href} name={x.title} primary_color={res.color} secondary_color={x.key} />))}
            </div>
          </div>
        </div>
    </>
)}

const colorclass : {[key : string] : string} = {
 kanna : "text-kanna",
 yuni : "text-yuni",
 tabi : "text-tabi",
 lize : "text-lize",
 hina : "text-hina",
 mashiro : "text-mashiro"
}

function object2List (obj : IReponseExternal) : External[] {
  var keys = Object.keys(obj)
  var result : External[]= [];

  keys.forEach(key => {
    obj[key].map(value => result.push({ key : key, href : value.href,title : value.title  }))
  })

  return result;
}

export default Page