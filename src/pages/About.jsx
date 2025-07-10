import passport from '../assets/passport.png';

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with over 1 year of experience building scalable web applications and mobile solutions. I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey started in game development 5 years ago, where I learned the importance of performance and user experience also where I learnt concepts like DSA and OOPs, which I now apply to web development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, I'm usually vibing to music with caffeine in hand, flipping through a good book, or going on brisk walks (and yes, even getting bored on purpose—it's strangely great for sparking new ideas!).
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                <span className="text-blue-400 font-semibold">1+</span> Years Experience
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                <span className="text-purple-400 font-semibold">5+</span> Projects Completed
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                <span className="text-pink-400 font-semibold">3+</span> Happy Clients
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <img
                src={passport}
                alt="Omkar Gaikwad"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/30 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/30 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}