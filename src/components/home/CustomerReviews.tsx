import React from 'react';
import { Star, MapPin, CheckCircle2, Quote } from 'lucide-react';
import { REVIEWS_DATA } from '../../data/mockData';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Real Customer Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Homeowners & Businesses Across Lucknow
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Read what our clients have to say about our transparent quotations, on-time installation, and net-metering execution.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-amber-400/30 absolute top-4 right-4" />

              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* System detail badge */}
                <span className="inline-block bg-amber-100 text-amber-900 font-semibold text-[11px] px-2.5 py-0.5 rounded-full mb-3">
                  {rev.systemDetails}
                </span>

                {/* Review body */}
                <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                  "{rev.reviewText}"
                </p>
              </div>

              {/* Author & Location */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{rev.author}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <MapPin className="w-3 h-3 text-emerald-600" />
                    <span>{rev.location}</span>
                  </div>
                </div>
                {rev.verified && (
                  <span className="flex items-center gap-0.5 text-[10px] text-emerald-700 font-medium bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
