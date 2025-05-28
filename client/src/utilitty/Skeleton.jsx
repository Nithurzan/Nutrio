import React from "react";


//skeletons for home page

//hero skeleton
export const HeroSkeleton = () => (
  <section>
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative animate-pulse">
      {/* Left skeleton */}
      <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
        <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
          <div className="h-16 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4 mx-auto md:mx-0"></div>
          <div className="h-8 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-2 mx-auto md:mx-0"></div>
          <div className="h-5 w-4/5 bg-gray-200 dark:bg-gray-700 rounded mb-6 mx-auto md:mx-0"></div>
          <div className="h-12 w-40 bg-gray-200 dark:bg-gray-700 rounded mx-auto md:mx-0"></div>
        </div>
      </div>
      {/* Right skeleton */}
      <div className="flex items-center justify-center">
        <div className="w-[350px] md:w-[550px] h-[300px] md:h-[400px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
      </div>
      {/* Decorative leaf skeleton */}
      <div className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]">
        <div className="w-full max-w-[300px] h-32 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      </div>
    </div>
  </section>
);

//skeleton for category
export const CategorySkeleton = () => (
<section className="my-20 animate-pulse">
        <div className="text-center mb-10">
          <div className="h-8 w-48 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-2" />
          <div className="h-4 w-60 bg-gray-200 dark:bg-gray-600 rounded mx-auto" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-xl shadow"
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <div className="h-10 w-48 bg-primary/40 dark:bg-secondary/40 rounded-xl" />
        </div>
      </section>
);

//skeleton for recent product
export const ProductCardSkeleton = () => (
  <div className="animate-pulse bg-white dark:bg-gray-900 rounded-xl shadow p-4 flex flex-col gap-4">
    <div className="bg-gray-200 dark:bg-gray-700 h-40 w-full rounded-lg" />
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-full mt-2" />
  </div>
);

export const RecentProductSkeleton = () => (
  <section className="mx-auto py-16 px-2 sm:px-0 animate-pulse">
        <div className="text-center mb-12">
          <div className="h-8 w-60 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-2" />
          <div className="h-4 w-72 bg-gray-200 dark:bg-gray-600 rounded mx-auto" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="w-64 h-[320px] bg-gray-200 dark:bg-gray-700 rounded-xl shadow"
            />
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <div className="h-10 w-48 bg-primary/40 dark:bg-secondary/40 rounded-xl" />
        </div>
      </section>
);

//skeleton for our policy
export const OurPolicySkeleton = () => (
  <section className="my-20 animate-pulse">
        <div className="text-center mb-10">
          <div className="h-8 w-48 bg-gray-300 dark:bg-gray-700 mx-auto rounded mb-2" />
          <div className="h-4 w-64 bg-gray-200 dark:bg-gray-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800"
            >
              <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full mb-4" />
              <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
              <div className="h-3 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          ))}
        </div>
      </section>
);



//skeleton for newsletter
export const NewsletterSkeleton = () => (
  <div className="container flex justify-center">
        <div className="w-full max-w-2xl text-center py-12 mt-10 rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-2xl border border-primary/20 dark:border-secondary/20 flex flex-col items-center animate-pulse">
          <div className="w-14 h-14 bg-gray-300 dark:bg-gray-700 rounded-full mb-4" />
          <div className="w-3/4 h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
          <div className="w-1/2 h-6 bg-gray-300 dark:bg-gray-700 rounded mb-4" />
          <div className="w-4/5 h-4 bg-gray-300 dark:bg-gray-700 rounded mb-6" />

          <div className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3 mx-auto my-8 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 bg-white dark:bg-gray-800 shadow">
            <div className="relative w-full flex-1">
              <div className="w-full h-12 bg-gray-200 dark:bg-gray-700 rounded-lg" />
            </div>
            <div className="w-32 h-12 bg-primary/50 dark:bg-secondary/50 rounded-lg" />
          </div>
        </div>
      </div>
);

export const TestimonialsSkeleton = () => (
  <section className="my-20 animate-pulse">
        <div className="text-center mb-10">
          <div className="h-8 w-72 bg-gray-300 dark:bg-gray-700 mx-auto rounded mb-2" />
          <div className="h-4 w-64 bg-gray-200 dark:bg-gray-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gray-300 dark:bg-gray-700 mb-4" />
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded"
                  />
                ))}
              </div>
              <div className="h-3 w-64 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
              <div className="h-3 w-56 bg-gray-300 dark:bg-gray-700 rounded mb-4" />
              <div className="h-4 w-32 bg-gray-400 dark:bg-gray-600 rounded" />
            </div>
          ))}
        </div>
      </section>
)


export const BlogHighlightsSkeleton = () => (
  <section className="my-20 animate-pulse">
        <div className="text-center mb-10">
          <div className="h-8 w-52 bg-gray-300 dark:bg-gray-700 mx-auto rounded mb-2" />
          <div className="h-4 w-72 bg-gray-200 dark:bg-gray-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden"
            >
              <div className="w-full h-48 bg-gray-300 dark:bg-gray-700" />
              <div className="p-6 flex flex-col gap-3">
                <div className="h-3 w-24 bg-gray-300 dark:bg-gray-600 rounded" />
                <div className="h-4 w-3/4 bg-gray-400 dark:bg-gray-500 rounded" />
                <div className="h-3 w-full bg-gray-300 dark:bg-gray-600 rounded" />
                <div className="h-3 w-5/6 bg-gray-300 dark:bg-gray-600 rounded" />
                <div className="h-3 w-24 bg-gray-300 dark:bg-gray-600 rounded mt-4" />
              </div>
            </div>
          ))}
        </div>
      </section>
)
//skeleton for footer
export const FooterSkeleton = () => (
      <div className="relative bg-gradient-to-t from-primary/10 via-white to-secondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 mt-10">
        <div className="h-1 w-full bg-primary dark:bg-secondary mb-2" />
        <div className="container flex justify-center animate-pulse">
          <div className="w-full max-w-7xl backdrop-blur-lg px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-14 gap-y-10 my-10 text-sm">
              {/* Column Placeholder */}
              {Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center md:items-start space-y-3"
                >
                  <div className="w-3/4 h-5 bg-gray-300 dark:bg-gray-700 rounded" />
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2/3 h-4 bg-gray-200 dark:bg-gray-600 rounded"
                    />
                  ))}
                  {idx === 3 && (
                    <>
                      {/* Social Media Icons Placeholder */}
                      <div className="flex gap-4 mt-2">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div
                            key={i}
                            className="w-10 h-10 rounded-full bg-primary/30 dark:bg-secondary/30"
                          />
                        ))}
                      </div>
                      {/* Contact Info */}
                      <div className="w-full flex flex-col gap-2 mt-4">
                        <div className="w-5/6 h-3 bg-gray-200 dark:bg-gray-600 rounded" />
                        <div className="w-2/3 h-3 bg-gray-200 dark:bg-gray-600 rounded" />
                        <div className="w-3/4 h-3 bg-gray-200 dark:bg-gray-600 rounded" />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="w-full flex justify-center">
              <div className="border-2 border-primary/20 dark:border-secondary/20 rounded-full w-1/2 my-4" />
            </div>

            <div className="py-5 text-xs text-center text-gray-400 dark:text-gray-600">
              <div className="w-1/3 h-3 bg-gray-300 dark:bg-gray-700 mx-auto rounded" />
            </div>
          </div>
        </div>
      </div>
);



// Main skeleton for the Products page
export const ProductsSkeleton = () => (
      <section className="my-20 animate-pulse">
        <div className="container mx-auto px-4 py-16 space-y-16">
          {/* Title Skeleton */}
          <div className="text-center">
            <div className="h-10 w-60 bg-gray-300 dark:bg-gray-700 mx-auto rounded mb-4" />
            <div className="h-4 w-72 bg-gray-200 dark:bg-gray-600 mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Filter Sidebar Skeleton */}
            <div className="space-y-6">
              <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded" />
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-4 w-40 bg-gray-300 dark:bg-gray-700 rounded" />
              ))}
              <div className="h-8 w-32 bg-gray-400 dark:bg-gray-600 rounded mt-4" />
            </div>

            {/* Product Cards Skeleton */}
            <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl shadow border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4"
                >
                  <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded mb-4" />
                  <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
                  <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-600 rounded mb-3" />
                  <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-600 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );


//skeleton for the about page
export const AboutSkeleton = () => (
  <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 mt-20 animate-pulse">
    <div className="container mx-auto px-4 py-16 space-y-20">
      {/* Our Mission Skeleton */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-6"></div>
        <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mx-auto"></div>
      </div>
      {/* Our Story Section Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Hero Image Skeleton */}
        <div className="flex items-center justify-center relative">
          <div className="absolute -z-10 w-[260px] h-[260px] md:w-[350px] md:h-[350px] bg-primary/10 dark:bg-secondary/20 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-[300px] md:w-[450px] lg:w-[550px] h-[200px] md:h-[300px] lg:h-[350px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
        </div>
        {/* Brand Info Card Skeleton */}
        <div className="space-y-6 text-center md:text-left bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8">
          <div className="h-10 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-4 mx-auto md:mx-0"></div>
          <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2 mx-auto md:mx-0"></div>
          <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-6 mx-auto md:mx-0"></div>
          {/* Button Section Skeleton */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="h-5 w-48 bg-gray-200 dark:bg-gray-700 rounded mx-auto md:mx-0"></div>
            <div className="h-12 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto md:mx-0"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

//skeleton for tcontact
export const ContactSkeleton = () => (
  <section>
    <div className="container mx-auto px-4 py-16 mt-20 space-y-16 animate-pulse">
      {/* Title Skeleton */}
      <div className="text-center">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-8"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Info Skeleton */}
        <div className="space-y-6 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8">
          <div className="h-6 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        {/* Contact Form Skeleton */}
        <div className="space-y-6 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8">
          <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          <div className="h-24 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          <div className="h-12 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto"></div>
        </div>
      </div>
      {/* Google Map Skeleton */}
      <div className="overflow-hidden rounded-lg shadow-lg dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-gray-100 dark:border-gray-700">
        <div className="w-full min-h-[250px] sm:min-h-[400px] bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
      </div>
    </div>
  </section>
);

//Skeleton for cart
const CartItemSkeleton = () => (
  <div className="py-6 px-4 sm:px-8 rounded-2xl shadow-xl bg-white dark:bg-gray-900 flex flex-col sm:flex-row items-center gap-8 border border-gray-100 dark:border-gray-800">
    <div className="bg-gray-300 dark:bg-gray-700 rounded-lg p-2 shadow w-24 h-24" />
    <div className="flex-1 flex flex-col items-start w-full space-y-2">
      <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />
      <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded" />
      <div className="flex items-center gap-4">
        <div className="h-6 w-12 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-4 w-8 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>
    </div>
    <div className="flex flex-col items-center gap-2 min-w-[90px]">
      <div className="flex items-center border rounded-lg bg-gray-300 dark:bg-gray-700 px-2 py-1 shadow w-28 h-10" />
    </div>
  </div>
);

const CartTotalSkeleton = () => (
  <div className="w-full bg-gradient-to-br from-primary/10 via-white to-secondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl border border-primary/20 dark:border-secondary/20 p-7 sm:p-10 flex flex-col items-center animate-pulse">
      <div className="flex flex-col items-center mb-6">
        <div className="w-10 h-10 bg-primary dark:bg-secondary mb-2 rounded-full" />
        <div className="h-8 w-40 bg-gray-300 dark:bg-gray-700 rounded-md" />
      </div>
      <div className="flex flex-col gap-4 text-base w-full max-w-md">
        <div className="flex justify-between items-center py-1">
          <div className="h-5 w-20 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-5 w-12 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
        <div className="flex justify-between items-center py-1">
          <div className="h-5 w-28 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-5 w-12 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
        <hr className="border-2 border-primary/30 dark:border-secondary/30 my-2 rounded" />
        <div className="flex justify-between items-center py-2">
          <div className="h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-6 w-20 bg-primary dark:bg-secondary rounded" />
        </div>
      </div>
      <div className="mt-8 w-48 h-12 bg-primary dark:bg-secondary rounded-full" />
      <div className="mt-4 h-4 w-60 bg-gray-300 dark:bg-gray-700 rounded text-center" />
    </div>
);

export const CartSkeleton = () => (
  <section className="min-h-[70vh] py-10 bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container">
          <div className="text-center text-2xl mb-8 animate-pulse">
            <div className="h-10 w-40 bg-gray-300 dark:bg-gray-700 rounded mx-auto" />
          </div>

          <div className="flex flex-col gap-8">
            {/* Show 3 skeleton cart items */}
            {[1, 2, 3].map((i) => (
              <CartItemSkeleton key={i} />
            ))}
          </div>

          <div className="flex justify-end my-12">
            <div className="w-full sm:w-[450px]">
              <CartTotalSkeleton />
            </div>
          </div>
        </div>
      </section>
);


//skeleton for order
export const OrdersSkeleton = () => (
  <div className="container pt-16">
        <div className="text-2xl mb-6 animate-pulse bg-gray-300 dark:bg-gray-700 h-10 w-36 rounded"></div>

        <div className="flex flex-col gap-8">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center gap-8 p-6 rounded-2xl shadow-xl bg-white/90 dark:bg-gray-900/90 border border-primary/10 dark:border-secondary/20"
            >
              {/* Left icon + image placeholder */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-gray-300 dark:bg-gray-700"></div>
              </div>

              {/* Middle text placeholders */}
              <div className="flex-1 flex flex-col w-full gap-2">
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
                <div className="flex gap-4">
                  <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-20 animate-pulse"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-12 animate-pulse"></div>
                </div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 animate-pulse"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3 animate-pulse"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
              </div>

              {/* Right status & button placeholders */}
              <div className="flex flex-col items-end gap-3 min-w-[120px] w-full sm:w-auto">
                <div className="h-6 rounded-full bg-gray-300 dark:bg-gray-700 w-24 animate-pulse"></div>
                <div className="h-8 rounded-full bg-gray-300 dark:bg-gray-700 w-32 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
);

//skeleton for the place order
export const PaymentSkelton = () => (
    <div className="mt-12 w-full max-w-md mx-auto bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl border border-primary/20 dark:border-secondary/20 p-6 sm:p-8 animate-pulse">
      {/* Title placeholder */}
      <div className="h-10 w-48 bg-gray-300 dark:bg-gray-700 rounded mb-8 mx-auto" />

      {/* Payment options placeholders */}
      <ul className="flex flex-col gap-6">
        {[1, 2].map((_, i) => (
          <li key={i} className="flex flex-col">
            <div className="flex items-center gap-4 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
              <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700" />
              <div className="h-5 w-40 bg-gray-300 dark:bg-gray-700 rounded" />
            </div>
          </li>
        ))}
      </ul>

      {/* Button placeholder */}
      <div className="w-full text-end mt-10">
        <div className="inline-block bg-primary dark:bg-secondary rounded-full w-40 h-12" />
      </div>

      {/* Testimonial/Quote Card placeholder */}
      <div className="w-full mx-auto mt-8 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow border border-primary/10 dark:border-secondary/20 p-5 text-center">
        <div className="h-6 w-72 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-3" />
        <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded mx-auto" />
      </div>
    </div>
);


export const PlaceOrderSkeleton = () => (
<section>
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-8 pt-5 sm:pt-14 min-h-[80vh]">
          {/* Left side - Delivery Info Skeleton */}
          <div className="flex flex-col gap-4 w-full md:w-[50%] lg:w-[480px] bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl border border-primary/20 dark:border-secondary/20 p-8 animate-pulse">
            {/* Title */}
            <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded mb-6" />
            {/* Name inputs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded flex-1" />
              <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded flex-1" />
            </div>
            {/* Other inputs */}
            <div className="space-y-4 mt-4">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-300 dark:bg-gray-700 rounded" />
              ))}
            </div>
          </div>

          {/* Right side - Cart Total Skeleton */}
          <div className="flex-1 flex flex-col items-center mt-8 md:mt-0 space-y-6">
            {/* cart total */}
            <CartTotalSkeleton/>

            {/* Payment Method Skeleton */}
            <PaymentSkelton/>
          </div>
        </div>
      </div>
    </section>
);

//skeleton for product details
export const ProductDetailsSkeleton = () => (
  <section>
    <div className="container mt-8 px-4 py-10 md:py-16 animate-pulse">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Images Skeleton */}
        <div className="flex-1 flex flex-col-reverse gap-2 sm:flex-row">
          {/* Thumbnails */}
          <div
            className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[20%] w-full gap-2"
            style={{ maxHeight: "400px" }}
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-24 h-24 sm:w-[132px] sm:h-[132px] bg-gray-200 dark:bg-gray-700 rounded-md mb-2"
              ></div>
            ))}
          </div>
          {/* Main Image */}
          <div className="w-full sm:w-[80%] flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-100 dark:border-gray-700 p-0 h-[400px]">
            <div className="h-full w-full bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
          </div>
        </div>
        {/* Product Info Skeleton */}
        <div className="flex-1 flex flex-col justify-center p-4 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow">
          <div className="h-8 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="flex items-center gap-1 mt-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ))}
          </div>
          <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-5 w-4/5 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <div className="h-12 w-40 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
          </div>
          <hr className="mt-8 sm:w-4/5 border-gray-200 dark:border-gray-700" />
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Description Section Skeleton */}
      <div className="mt-12 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-6">
        <div className="h-6 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2" />
        <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
        <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
      {/* Related Products Skeleton */}
      <div className="mt-16">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-10">
          {[...Array(4)].map((_, idx) => (
            <ProductCardSkeleton key={idx}/>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const WishlistSkeleton = () => (
  <section className="max-w-5xl mx-auto mt-10 p-4">
        <div className="text-xl text-center sm:text-2xl my-3">
          <div className="h-8 w-40 mx-auto rounded bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="relative bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl border border-primary/10 dark:border-secondary/20 overflow-hidden flex flex-col items-center transition-transform duration-200"
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-t-2xl animate-pulse"></div>

              {/* Text Placeholder */}
              <div className="flex-1 flex flex-col items-center justify-center p-4 w-full gap-2">
                <div className="h-6 w-3/4 rounded bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                <div className="h-5 w-1/3 rounded bg-primary/50 dark:bg-blue-700 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
)

// profile ///
export const ProfileSkeleton = () => (
  <section className="max-w-6xl mx-auto mt-10 p-4 animate-pulse">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Panel Skeleton */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          {/* User Info Skeleton */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl border flex flex-col items-center">
            <div className="relative w-20 h-20 rounded-full bg-gray-300 dark:bg-gray-700 mb-3"></div>
            <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-3 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-3"></div>
            <div className="h-3 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>

          {/* Address List Skeleton */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-2xl border">
            <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
            <ul className="space-y-3">
              {[1, 2].map((i) => (
                <li
                  key={i}
                  className="h-10 bg-gray-200 dark:bg-gray-700 rounded-xl"
                ></li>
              ))}
            </ul>
          </div>

          {/* Account Actions Skeleton */}
          <div className="flex justify-between mt-2">
            <div className="h-3 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-3 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>

        {/* Right Panel Skeleton */}
        <div className="w-full md:w-2/3 flex flex-col gap-8">
          {/* Recent Orders Skeleton */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl border">
            <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <li
                  key={i}
                  className="h-24 bg-gray-200 dark:bg-gray-700 rounded-xl"
                ></li>
              ))}
            </ul>
          </div>

          {/* Wishlist Skeleton */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl border">
            <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <li
                  key={i}
                  className="h-16 bg-gray-200 dark:bg-gray-700 rounded-xl"
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
)


//skeleton for the home page
export const HomeSkeleton = () => (
  <>
  <HeroSkeleton/>
  <CategorySkeleton/>
  <RecentProductSkeleton/>
  <OurPolicySkeleton/>
  <TestimonialsSkeleton />
  <BlogHighlightsSkeleton/>
 
  </>
)



// Main Skeleton Switch
const Skeletons = ({ type }) => {
  switch (type) {
    case "home":
      return <HomeSkeleton />;
    case "product":
      return <ProductsSkeleton />;
    case "about":
      return <AboutSkeleton />;
    case "newsletter":
      return <NewsletterSkeleton />;
    case "footer":
      return <FooterSkeleton />;
    case "contact":
      return <ContactSkeleton />;
    case "cart":
      return <CartSkeleton />;
    case "orders":
      return <OrdersSkeleton/>;
    case "placeOrder":
      return <PlaceOrderSkeleton/>;
    case "productDetails":
      return <ProductDetailsSkeleton/>;
    case "wishlist":
      return <WishlistSkeleton/>
    case "profile":
      return <ProfileSkeleton/>
    default:
      return <div className="animate-pulse h-12 bg-gray-200 dark:bg-gray-700 rounded w-full" />;
  }
};

export default Skeletons;