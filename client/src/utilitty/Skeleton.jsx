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
  <section>
    <div className="pt-12 pb-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-10 mt-10">
        {[...Array(4)].map((_, idx) => (
          <div
            key={idx}
            className="w-full flex flex-col items-center justify-center gap-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl px-5 py-4 min-h-[80px] shadow-[0_0_22px_0_rgba(0,0,0,0.10)] dark:shadow-[0_0_22px_0_rgba(255,255,255,0.08)] animate-pulse"
          >
            <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        ))}
      </div>
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
  <section className="py-12 px-2 sm:px-0">
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-6 animate-pulse"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-10 mt-10">
        {[...Array(4)].map((_, idx) => (
          <ProductCardSkeleton key={idx} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <div className="h-12 w-40 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
      </div>
    </div>
  </section>
);

//skeleton for our policy
export const OurPolicySkeleton = () => (
  <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
    <div className="container flex flex-col sm:flex-row justify-around gap-10 sm:gap-4 text-center">
      {[...Array(3)].map((_, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 px-6 py-8 flex-1 mx-auto max-w-xs transition-all duration-300 hover:shadow-xl animate-pulse"
        >
          {/* Circular Wrapper for Image Skeleton */}
          <div className="w-20 h-20 m-auto mb-5 bg-primary/10 dark:bg-secondary/30 border-2 border-primary/20 dark:border-secondary/40 rounded-full flex items-center justify-center shadow-[0_0_22px_0_rgba(0,0,0,0.10)] dark:shadow-[0_0_22px_0_#81C784]">
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          </div>
          <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-2"></div>
          <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mx-auto"></div>
        </div>
      ))}
    </div>
  </section>
);



//skeleton for newsletter
export const NewsletterSkeleton = () => (
  <div className="container text-center py-12 mt-10 rounded-2xl bg-gradient-to-br from-primary/10 via-white to-secondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg animate-pulse">
    {/* Title Skeleton */}
    <div className="h-10 w-2/3 max-w-md bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-4"></div>
    {/* Subtitle Skeleton */}
    <div className="h-5 w-1/2 max-w-xs bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-8"></div>
    {/* Form Skeleton */}
    <div className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3 mx-auto my-8 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 bg-white dark:bg-gray-800 shadow">
      <div className="relative w-full flex-1">
        <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
      </div>
      <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
    </div>
  </div>
);

//skeleton for footer
export const FooterSkeleton = () => (
  <footer className="relative bg-gradient-to-t from-primary/10 via-white to-secondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 mt-10 animate-pulse">
    {/* Accent bar */}
    <div className="h-1 w-full bg-primary dark:bg-secondary mb-2" />
    <div className="container text-gray-700 dark:text-gray-300 py-10">
      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-14 gap-y-10 my-10 text-sm sm:text-left text-center">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <div className="h-9 w-9 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
          <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <div className="h-5 w-28 bg-gray-200 dark:bg-gray-700 rounded mb-5"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          ))}
        </div>
        {/* Customer Support */}
        <div className="flex flex-col items-center md:items-start">
          <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-5"></div>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          ))}
        </div>
        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <div className="h-5 w-28 bg-gray-200 dark:bg-gray-700 rounded mb-5"></div>
          <div className="flex gap-4 justify-center md:justify-start mb-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            ))}
          </div>
          <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
          <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
          <div className="h-4 w-36 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div>
        <hr className="border-gray-300 dark:border-gray-700" />
        <div className="py-5 flex flex-col items-center">
          <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
        </div>
      </div>
    </div>
  </footer>
);



// Main skeleton for the Products page
export const ProductsSkeleton = () => (
  <section aria-labelledby="all-collections-title">
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Title skeleton */}
      <div className="text-center">
        <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-8 animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Filters skeleton */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] h-fit animate-pulse">
          <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="space-y-6">
            <div>
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
                  <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
              ))}
            </div>
            <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded mt-4"></div>
          </div>
        </div>
        {/* Products grid skeleton */}
        <div className="col-span-3">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" aria-busy="true" aria-live="polite">
            {[...Array(8)].map((_, idx) => (
              <ProductCardSkeleton key={idx} />
            ))}
          </div>
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
  <div className="py-4 px-3 sm:px-6 rounded-xl shadow-sm bg-white dark:bg-gray-800 flex flex-col sm:flex-row items-center gap-6 animate-pulse border border-gray-100 dark:border-gray-700 mb-4">
    <div className="bg-gray-200 dark:bg-gray-700  rounded-lg p-2 w-20 h-20 sm:w-24 sm:h-24" />
    <div className="flex-1 flex flex-col items-center gap-2 w-full">
      <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
    </div>
    <div className="flex flex-col items-center gap-2 min-w-[70px]">
      <div className="flex items-center border rounded-lg bg-gray-100 dark:bg-gray-700 px-2 py-1">
        <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded mx-1" />
        <div className="h-6 w-10 bg-gray-200 dark:bg-gray-700 rounded mx-1" />
        <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded mx-1" />
        <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded mx-1" />
      </div>
    </div>
  </div>
);

const CartTotalSkeleton = () => (
  <div className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-5 sm:p-8 animate-pulse mt-8">
    <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
    <div className="flex flex-col gap-4 text-sm sm:text-base">
      <div className="flex justify-between items-center py-1">
        <span className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded"></span>
        <span className="h-5 w-12 bg-gray-200 dark:bg-gray-700 rounded"></span>
      </div>
      <div className="flex justify-between items-center py-1">
        <span className="h-5 w-28 bg-gray-200 dark:bg-gray-700 rounded"></span>
        <span className="h-5 w-12 bg-gray-200 dark:bg-gray-700 rounded"></span>
      </div>
      <hr className="border-2 border-primary/30 dark:border-secondary/30 my-2 rounded" />
      <div className="flex justify-between items-center py-2">
        <span className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded"></span>
        <span className="h-7 w-16 bg-gray-200 dark:bg-gray-700 rounded"></span>
      </div>
    </div>
  </div>
);

export const CartSkeleton = () => (
  <section>
    <div className="container min-h-[60vh] dark:bg-gray-900 pt-10">
      <div className="text-2xl mb-6 h-8 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      <div>
        <CartItemSkeleton />
        <CartItemSkeleton />
        <CartItemSkeleton />
      </div>
      <div className="flex justify-end my-12">
        <div className="w-full sm:w-[450px]">
          <CartTotalSkeleton />
          <div className="w-full text-end mt-6">
            <div className="h-12 w-full sm:w-52 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


//skeleton for order
export const OrderCardSkeleton = () => (
  <div className="relative py-4 px-2 xs:px-3 sm:px-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-gray-900 flex flex-col xs:flex-row md:flex-row items-center gap-4 xs:gap-6 animate-pulse mb-4">
    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg shadow object-cover border border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-800" />
    <div className="flex-2 flex flex-col items-start w-full xs:w-auto gap-2">
      <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
      <div className="flex gap-4 items-center">
        <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
      <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
    <div className="flex flex-col items-end gap-2 min-w-[120px] w-full xs:w-auto">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
      <div className="h-9 w-28 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
    </div>
  </div>
);

export const OrdersSkeleton = () => (
  <section>
    <div className="container pt-16">
      <div className="text-2xl mb-6 h-8 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      <div className="flex flex-col gap-6">
        {[...Array(4)].map((_, idx) => (
          <OrderCardSkeleton key={idx} />
        ))}
      </div>
    </div>
  </section>
);

//skeleton for the place order
export const PaymentSkelton = () => (
   <div className="flex flex-col lg:flex-row gap-3 mt-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 border rounded-lg p-2 px-3 w-full lg:w-auto bg-gray-100 dark:bg-gray-700"
                >
                  <div className="h-5 w-5 rounded-full bg-gray-200 dark:bg-gray-600"></div>
                  <div className="h-5 w-20 bg-gray-200 dark:bg-gray-600 rounded"></div>
                </div>
              ))}
            </div>
);


export const PlaceOrderSkeleton = () => (
  <section>
    <div className="container">
      <form className="flex flex-col md:flex-row justify-between gap-8 pt-5 sm:pt-14 min-h-[80vh] dark:bg-gray-900 animate-pulse">
        {/* Left side - Delivery Info */}
        <div className="flex flex-col gap-4 w-full md:w-[50%] lg:w-[480px] bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          </div>
          <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          </div>
          <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        {/* Right side - CartTotal & Payment */}
        <div className="flex-1 flex flex-col items-center mt-8 md:mt-0">
          <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow p-4 mb-8">
            {/* CartTotal Skeleton */}
            <CartTotalSkeleton/>
          </div>
          <div className="w-full max-w-md">
            <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
            {/* Payment method skeletons */}
           <PaymentSkelton/>
            <div className="w-full text-end mt-8">
              <div className="h-12 w-full sm:w-52 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
);

//skeleton for product details
const ProductDetailsSkeleton = () => (
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



//skeleton for the home page
export const HomeSkeleton = () => (
  <>
  <HeroSkeleton/>
  <CategorySkeleton/>
  <RecentProductSkeleton/>
  <OurPolicySkeleton/>
 
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
    default:
      return <div className="animate-pulse h-12 bg-gray-200 dark:bg-gray-700 rounded w-full" />;
  }
};

export default Skeletons;