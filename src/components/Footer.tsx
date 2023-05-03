import dayjs from "dayjs";

export default function Footer() {
  return (
    <footer className="bg-stone-50 shadow-inner">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <p className="mt-10 text-center text-sm leading-5 text-gray-500">
          &copy; {dayjs().year()} Enda McCarthy &#183; All rights reserved.
        </p>
      </div>
    </footer>
  );
}
