export default function Groupchat() {
  return (
    <div className="container message h-screen flex flex-col overflow-y-auto pt-28">
      {/* Conversation Start */}
      <div className="start flex flex-col justify-center items-center w-full h-[200px]">
        <span className="w-[90px] h-[90px] rounded-[50%] border-solid border-[1px] border-black-600 mx-2"></span>
        <div className="groupName pt-3 text-center">
          <p>
            <b>Target ng China</b>
          </p>
          <p>Xtian Baotista created the groupchat.</p>
        </div>
      </div>

      {/* Member addition */}
      <div className="membersAdd mt-3 text-center">
        <div className="memberAdded">
          <p>Xtian Baotista added Kris Guo.</p>
        </div>
        <div className="memberAdded">
          <p>Xtian Baotista added Carlo Josuwe.</p>
        </div>
        <div className="memberAdded">
          <p>Xtian Baotista added Ethan Long.</p>
        </div>
      </div>

      {/* Time */}
      <div className="time text-center mt-3">
        <p className="text-[14px]">
          <b>June 3, 2024 7:49AM </b>
        </p>
      </div>

      {/* Bubbles */}

      <div className="msgrcv w-full flex flex-row my-3">
        <div className="flex items-end">
          <span className="w-[50px] h-[50px] rounded-[50%] border-solid border-[1px] border-black-600 mx-2"></span>
        </div>
        <div className="flex flex-col">
          <span className="text-[14px]">Kris Guo</span>
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[20px] rounded-bl-[5px] rounded-tr-[20px] rounded-br-[20px] bg-[#EFEFEF] px-4 w-max">
            <p className="msg mt-2 text-[16px]">Where to eatttttttt</p>
          </span>
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[5px] rounded-bl-[5px] rounded-tr-[20px] rounded-br-[20px] bg-[#EFEFEF] px-4 w-max">
            <p className="msg mt-2 text-[16px]">Everyone</p>
          </span>
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[5px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] bg-[#EFEFEF] px-4 w-max">
            <p className="msg mt-2 text-[16px]">Late ako today 😭😭😭</p>
          </span>
        </div>
      </div>
      <div className="msgrcv w-full flex flex-row my-3">
        <div className="flex items-end">
          <span className="w-[50px] h-[50px] rounded-[50%] border-solid border-[1px] border-black-600 mx-2"></span>
        </div>
        <div className="flex flex-col">
          <span className="text-[14px]">Kris Guo</span>
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[20px] rounded-bl-[5px] rounded-tr-[20px] rounded-br-[20px] bg-[#EFEFEF] px-4 w-max">
            <p className="msg mt-2 text-[16px]">Where to eatttttttt</p>
          </span>
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[5px] rounded-bl-[5px] rounded-tr-[20px] rounded-br-[20px] bg-[#EFEFEF] px-4 w-max">
            <p className="msg mt-2 text-[16px]">Everyone</p>
          </span>
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[5px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] bg-[#EFEFEF] px-4 w-max">
            <p className="msg mt-2 text-[16px]">Late ako today 😭😭😭</p>
          </span>
        </div>
      </div>
      <div className="msgrcv w-full flex flex-row my-3">
        <div className="flex items-end">
          <span className="w-[50px] h-[50px] rounded-[50%] border-solid border-[1px] border-black-600 mx-2"></span>
        </div>
        <div className="flex flex-col">
          <span className="text-[14px]">Kris Guo</span>
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[20px] rounded-bl-[5px] rounded-tr-[20px] rounded-br-[20px] bg-[#EFEFEF] px-4 w-max">
            <p className="msg mt-2 text-[16px]">Where to eatttttttt</p>
          </span>
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[5px] rounded-bl-[5px] rounded-tr-[20px] rounded-br-[20px] bg-[#EFEFEF] px-4 w-max">
            <p className="msg mt-2 text-[16px]">Everyone</p>
          </span>
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[5px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] bg-[#EFEFEF] px-4 w-max">
            <p className="msg mt-2 text-[16px]">Late ako today 😭😭😭</p>
          </span>
        </div>
      </div>
      <div className="msgrcv w-full flex flex-row my-3">
        <div className="flex items-end">
          <span className="w-[50px] h-[50px] rounded-[50%] border-solid border-[1px] border-black-600 mx-2"></span>
        </div>
        <div className="flex flex-col">
          <span className="text-[14px]">Kris Guo</span>
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[20px] rounded-bl-[5px] rounded-tr-[20px] rounded-br-[20px] bg-[#EFEFEF] px-4 w-max">
            <p className="msg mt-2 text-[16px]">Where to eatttttttt</p>
          </span>
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[5px] rounded-bl-[5px] rounded-tr-[20px] rounded-br-[20px] bg-[#EFEFEF] px-4 w-max">
            <p className="msg mt-2 text-[16px]">Everyone</p>
          </span>
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[5px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] bg-[#EFEFEF] px-4 w-max">
            <p className="msg mt-2 text-[16px]">Late ako today 😭😭😭</p>
          </span>
        </div>
      </div>
      <div className="msgrcv w-full flex flex-row my-3">
        <div className="flex items-end">
          <span className="w-[50px] h-[50px] rounded-[50%] border-solid border-[1px] border-black-600 mx-2"></span>
        </div>
        <div className="flex flex-col">
          <span className="text-[14px]">Kris Guo</span>
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[20px] rounded-bl-[5px] rounded-tr-[20px] rounded-br-[20px] bg-[#EFEFEF] px-4 w-max">
            <p className="msg mt-2 text-[16px]">Where to eatttttttt</p>
          </span>
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[5px] rounded-bl-[5px] rounded-tr-[20px] rounded-br-[20px] bg-[#EFEFEF] px-4 w-max">
            <p className="msg mt-2 text-[16px]">Everyone</p>
          </span>
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[5px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] bg-[#EFEFEF] px-4 w-max">
            <p className="msg mt-2 text-[16px]">Late ako today 😭😭😭</p>
          </span>
        </div>
      </div>
      <div className="msgrcv w-full flex flex-row my-3">
        <div className="flex items-end">
          <span className="w-[50px] h-[50px] rounded-[50%] border-solid border-[1px] border-black-600 mx-2"></span>
        </div>
        <div className="flex flex-col">
          <span className="text-[14px]">Carlo Josuwe</span>
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] bg-[#EFEFEF] px-4 w-max">
            <p className="msg mt-2 text-[16px]">Chāojí hēi guǐ hahaha</p>
          </span>
        </div>
      </div>
      <div className="msgrcv w-full flex flex-row my-3">
        <div className="flex items-end">
          <span className="w-[50px] h-[50px] rounded-[50%] border-solid border-[1px] border-black-600 mx-2"></span>
        </div>
        <div className="flex flex-col">
          <span className="text-[14px]">Ethan Long</span>
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] bg-[#EFEFEF] px-4 w-max">
            <p className="msg mt-2 text-[16px]">
              Tara bili sa baba. Gusto ko maruya.
            </p>
          </span>
        </div>
      </div>
      <div className="time text-center">
        <p className="text-[14px]">
          <b>June 3, 2024 11:00AM</b>
        </p>
      </div>
      <div className="msgrcv w-full flex flex-row my-3">
        <div className="flex items-end">
          <span className="w-[50px] h-[50px] rounded-[50%] border-solid border-[1px] border-black-600 mx-2"></span>
        </div>
        <div className="flex flex-col">
          <span className="text-[14px]">Kris Guo</span>
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] bg-[#EFEFEF] px-4 w-max">
            <p className="msg mt-2 text-[16px]">
              Kain po, Gutom na me. Gusto ko hotdogggg 😭🥰😍
            </p>
          </span>
        </div>
      </div>
      <div className="msgsnt justify-end w-full flex flex-row my-3">
        <div className="flex flex-col">
          <span className="mt-2 shrink justify-start h-[40px] rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] bg-black px-4 w-max mx-2">
            <p className="msg mt-2 text-[16px] text-white">Sheesh.</p>
          </span>
        </div>
      </div>
    </div>
  );
}
