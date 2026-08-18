interface ShimmerButtonProp {
  title: string;
}

export default function ShimmerButton({ title }: ShimmerButtonProp) {
  return (
    <button className="inline-flex py-1.5 px-4 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-white text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      {title}
    </button>
  );
}
