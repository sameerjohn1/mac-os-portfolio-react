import WindowControls from "#components/WindowControls";
import { writings } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";

const Safari = () => {
  return (
    <>
      {" "}
      <div id="window-header">
        {" "}
        <WindowControls target="safari" />
        <PanelLeft className="ml-10 icon" />
        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>
        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />

          <div className="search">
            <Search className="icon" />

            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2
            className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text 
        bg-gradient-to-r from-white via-zinc-300 to-zinc-500"
          >
            Writings
          </h2>

          <p className="mt-8 text-zinc-500 text-lg md:text-xl leading-relaxed font-light">
            Long-form thoughts on code, design, ego, burnout, and everything I
            couldn't say in a tweet.
          </p>
        </div>

        {/* Posts List */}
        <div className="mt-20 space-y-12 text-left max-w-4xl mx-auto">
          {writings.map((post) => (
            <div
              key={post.id}
              className="group border-l-4 border-transparent hover:border-cyan-500 
          pl-8 transition-all duration-500 cursor-default"
            >
              <time className="text-zinc-600 text-sm tracking-wider font-medium">
                {post.date}
              </time>

              <h3
                className="mt-3 text-2xl md:text-3xl font-medium text-zinc-100 
            group-hover:text-cyan-400 transition-colors duration-300 leading-tight"
              >
                {post.title}
              </h3>

              <p className="mt-4 text-zinc-500 text-lg leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-24 text-zinc-700 text-sm tracking-wider text-center">
          More coming when I stop procrastinating.
        </p>
      </section>
    </>
  );
};

const SafariWrapper = WindowWrapper(Safari, "safari");

export default SafariWrapper;
