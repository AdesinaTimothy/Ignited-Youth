import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Deep Encounters in Worship",
    description:
      "A reflection on our last UpperRoom meeting and how worship can transform our hearts for God’s purpose.",
    image: "/images/worship.jpg",
    date: "November 2, 2025",
    slug: "deep-encounters-in-worship",
  },
  {
    id: 2,
    title: "Living a Life of Prayer",
    description:
      "How consistent prayer shapes your daily walk and brings you into deeper intimacy with the Holy Spirit.",
    image: "/images/prayer.jpg",
    date: "October 20, 2025",
    slug: "living-a-life-of-prayer",
  },
  {
    id: 3,
    title: "Faith That Moves Mountains",
    description:
      "Discover how simple, unwavering faith can change everything around you ,one step at a time.",
    image: "/images/faith.jpg",
    date: "September 15, 2025",
    slug: "faith-that-moves-mountains",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full py-8 ">
      <div className="container mx-auto 3">
        {/* Section Heading */}
        <div className="text-left md:text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Deepen Your Faith: <br /> Strengthen Your Spiritual Journey
          </h2>
          <p className="text-gray-600 text-left md:text-center max-w-xl ">
            Stay inspired with our latest teachings, stories, and insights on
            faith, worship, and community.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-60">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-yellow-600 font-semibold mb-2">
                  {post.date}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {post.description}
                </p>

                {/* Button */}
                <Link href="/articlepage" className="w-fit">
                  <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-blue-400 transition-colors duration-300">
                    Read Full Article →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-left md:text-center flex flex-col items-start md:items-center gap-4">
          <Link href="/articlepage">
            <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-300">
              View All Articles
            </button>
          </Link>
          <p className="text-gray-600 md:text-lg text-md ">
            Explore all the available resources, articles, and teachings to stay
            inspired and grow in faith.
          </p>
        </div>
      </div>
    </section>
  );
}
