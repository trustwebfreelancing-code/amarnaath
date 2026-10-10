import React, { useState, useMemo } from 'react';
import { BLOG_POSTS, BlogItem } from '../data/companyData';
import { Search, ArrowRight, Calendar, Clock, User, X } from 'lucide-react';

interface BlogsViewProps {
  onSelectBlog: (blog: BlogItem) => void;
}

export const BlogsView: React.FC<BlogsViewProps> = ({ onSelectBlog }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState<BlogItem | null>(null);

  const categories = ['All', 'Engineering & Manufacturing', 'Medical Textiles', 'Maintenance & Service'];

  const featuredPost = BLOG_POSTS[0];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCat =
        selectedCategory === 'All' || post.category === selectedCategory;
      return matchSearch && matchCat;
    });
  }, [searchQuery, selectedCategory]);

  const handleOpenArticle = (post: BlogItem) => {
    setActiveArticle(post);
    onSelectBlog(post);
  };

  return (
    <div className="w-full bg-[#FAFAFA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            TECHNICAL JOURNAL
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Insights & Engineering Papers
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            In-depth technical articles on high-speed web tension dynamics, medical textile filtration standards, ultrasonic tooling calibration, and plant floor efficiency benchmarks.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search engineering papers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 border border-slate-300 rounded text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article Spotlight (when not searching or category matches) */}
        {!searchQuery && (selectedCategory === 'All' || selectedCategory === featuredPost.category) && (
          <div
            onClick={() => handleOpenArticle(featuredPost)}
            className="group bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 cursor-pointer hover:border-slate-300 transition-colors"
          >
            <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto overflow-hidden bg-slate-100">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute top-4 left-4 bg-slate-900/90 text-white text-[11px] font-semibold px-3 py-1 rounded">
                Featured Insight
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <span className="text-[#0284C7] font-semibold">{featuredPost.category}</span>
                  <span>·</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors leading-snug">
                  {featuredPost.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {featuredPost.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-800">{featuredPost.author}</div>
                  <div className="text-[11px] text-slate-500">{featuredPost.authorRole}</div>
                </div>

                <span className="inline-flex items-center text-xs font-bold text-slate-900 group-hover:text-[#0284C7]">
                  Read Paper <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Latest Articles Grid */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900">
            Latest Technical Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => handleOpenArticle(post)}
                className="group flex flex-col bg-white border border-slate-200 rounded-md overflow-hidden hover:border-slate-300 transition-colors cursor-pointer shadow-xs"
              >
                <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <span className="text-[#0284C7] font-semibold">{post.category}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">{post.date}</span>
                    <span className="font-semibold text-slate-900 group-hover:text-[#0284C7] inline-flex items-center gap-1">
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Article Reader Modal */}
        {activeArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
            onClick={() => setActiveArticle(null)}
          >
            <div
              className="bg-white rounded-lg shadow-2xl w-full max-w-3xl overflow-hidden border border-slate-200 my-auto flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
                <span className="text-xs font-semibold uppercase text-[#0284C7]">
                  {activeArticle.category}
                </span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-1 text-slate-400 hover:text-slate-800 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                    {activeArticle.title}
                  </h2>
                  <div className="flex items-center gap-3 text-xs text-slate-500 border-b border-slate-100 pb-3">
                    <span>By {activeArticle.author}, {activeArticle.authorRole}</span>
                    <span>·</span>
                    <span>Published {activeArticle.date}</span>
                    <span>·</span>
                    <span>{activeArticle.readTime}</span>
                  </div>
                </div>

                <div className="relative aspect-16/9 rounded overflow-hidden bg-slate-100">
                  <img
                    src={activeArticle.image}
                    alt={activeArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
                  {activeArticle.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Amarnaathh Engineering Technical Department</span>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-4 py-2 text-xs font-semibold bg-slate-900 text-white rounded hover:bg-slate-800"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
