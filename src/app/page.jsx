"use client";
import S1 from "./section/section";

export default function Home() {
  return (
    <section className="w-[100%] text-white h-[100vh] relative img1 bg-fixed ">
      <section className="w-[100%] h-[100vh] lg:h-[100vh] flex justify-center items-center">
        <section className="w-[100%] h-[91.5vh] lg:h-[83vh] flex flex-wrap justify-center items-center">
          <S1 />
        </section>
      </section>
    </section>
  );
}
