export default function Individualinfo() {
  return (
    <>
      {/* RIGHT PANEL MAIN CONTAINER */}
      <div className="container right-container h-full rounded-[20px] bg-white mx-[10px] flex flex-col overflow-hidden">
        {/* PROFILE SECTION */}
        <div className="py-3 head-right max-h-[250px] flex flex-col items-center justify-center border-solid border-b-[1px] border-black-500">
          <span className="w-[90px] h-[90px] rounded-[50%] border-solid border-[1px] border-black-600 mx-2"></span>
          <div className="text-[22px] py-[10px]">
            <span className="text-center">
              <b>Someone</b>
            </span>
          </div>
        </div>

        {/* INFO SECTION */}
        <div className="h-[25px] pt-[10px] px-[20px]">
          <span className="text-[15px]">
            <b>Info</b>
          </span>
        </div>

        {/* MEMBER LIST */}
        <div className="mt-[20px] flex flex-grow flex-col mb-[15px] overflow-x-auto px-[20px] text-justify">
          <p>
            Hi! My name is Never mind, I'll find someone like you I wish nothing
            but the best for you, too Don't forget me, I beg I remember you said
            Sometimes it lasts in love, but sometimes it hurts instead Sometimes
            it lasts in love, but sometimes it hurts instead{" "}
          </p>

          <p>
            You know how the time flies Only yesterday was the time of our lives
            We were born and raised in a summer haze Bound by the surprise of
            our glory days I hate to turn up out of the blue, uninvited But I
            couldn't stay away, I couldn't fight it I had hoped you'd see my
            face And that you'd be reminded that for me, it isn't over{" "}
          </p>

          <p>
            Never mind, I'll find someone like you I wish nothing but the best
            for you, too Don't forget me, I beg I remember you said Sometimes it
            lasts in love, but sometimes it hurts instead
          </p>
        </div>
      </div>
    </>
  );
}
