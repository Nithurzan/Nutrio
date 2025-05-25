import React, { useState, useEffect, useContext } from "react";
import { assets } from "../assets/asset";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";

const Describtion = ({ productDescribtion, productId }) => {
  const { backendUrl, token } = useContext(ShopContext);
  const [activeTab, setActiveTab] = useState("description");
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    axios.get(backendUrl + `/api/review/${productId}`).then((res) => {
      if (res.data.success) setReviews(res.data.reviews);
    });
  }, [backendUrl, productId]);

  const handleReviewChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!newReview.comment.trim()) return;
    setSubmitting(true);
    try {
      const res = await axios.post(
        backendUrl + `/api/review/add`,
        {
          product: productId,
          rating: newReview.rating,
          comment: newReview.comment,
        },
        {
          headers: { token },
        }
      );
      if (res.data.success) {
        setNewReview({ rating: 5, comment: "" });
        toast.success("Review submitted successfully");
        // Fetch latest reviews after submit
        const reviewsRes = await axios.get(
          backendUrl + `/api/review/${productId}`
        );
        if (reviewsRes.data.success) setReviews(reviewsRes.data.reviews);
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to submit review");
    }
    setSubmitting(false);
  };

  // Highlight the best review (highest rating, most recent)
  const highlightReview = reviews.length
    ? [...reviews].sort(
        (a, b) => b.rating - a.rating || new Date(b.date) - new Date(a.date)
      )[0]
    : null;

  return (
    <section className="w-full max-w-3xl mx-auto">
      {/* Tabbed Section */}
      <div className="mt-10 md:mt-16">
        <div className="flex border-b border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 rounded-t-xl shadow-sm">
          <button
            className={`flex-1 px-4 py-3 text-sm md:text-base font-semibold focus:outline-none transition-all
              ${
                activeTab === "description"
                  ? "border-b-2 border-primary text-primary dark:text-primary bg-gray-100 dark:bg-gray-800 rounded-t-xl shadow"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }
            `}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`flex-1 px-4 py-3 text-sm md:text-base font-semibold focus:outline-none transition-all
              ${
                activeTab === "reviews"
                  ? "border-b-2 border-primary text-primary dark:text-primary bg-gray-100 dark:bg-gray-800 rounded-t-xl shadow"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }
            `}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews ({reviews.length})
          </button>
        </div>
        <div className="border border-t-0 px-4 md:px-8 py-6 text-sm md:text-base text-gray-700 dark:text-gray-300 bg-white/90 dark:bg-gray-900/90 rounded-b-xl shadow-md dark:shadow-[0_0_15px_rgba(255,255,255,0.08)]">
          {activeTab === "description" && (
            <div>
              <h2 className="font-semibold mb-2 text-lg md:text-xl">
                Product Description
              </h2>
              <p
                className="prose dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: productDescribtion }}
              ></p>
            </div>
          )}
          {activeTab === "reviews" && (
            <div className="flex flex-col gap-8">
              {/* Highlighted Review */}
              {highlightReview && (
                <div className="w-full max-w-lg mx-auto mb-6 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl border border-primary/10 dark:border-secondary/20 p-5 text-center">
                  <p className="text-primary dark:text-secondary font-semibold text-base">
                    “{highlightReview.comment}”
                  </p>
                  <div className="flex justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < highlightReview.rating
                            ? "text-yellow-400 text-lg"
                            : "text-gray-300 text-lg"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-xs">
                    —{" "}
                    {highlightReview.user?.name ||
                      highlightReview.user?.email ||
                      "User"}
                  </span>
                </div>
              )}
              {/* Add Review Form */}
              <form
                onSubmit={handleReviewSubmit}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Your Rating:</span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => handleRatingChange(star)}
                      className="focus:outline-none"
                    >
                      <span
                        className={
                          star <= newReview.rating
                            ? "text-yellow-500 text-xl"
                            : "text-gray-300 text-xl"
                        }
                      >
                        ★
                      </span>
                    </button>
                  ))}
                </div>
                <textarea
                  name="comment"
                  value={newReview.comment}
                  onChange={handleReviewChange}
                  rows={3}
                  placeholder="Write your review..."
                  className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  disabled={submitting || !newReview.comment.trim()}
                  className="self-end px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded font-semibold hover:from-secondary hover:to-primary transition disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Add Review"}
                </button>
              </form>
              {/* Reviews List */}
              <div className="flex flex-col gap-6">
                {reviews.length === 0 && <p>No reviews available</p>}
                {reviews.map((review, index) => (
                  <div
                    key={review._id || index}
                    className="border-b pb-4 mb-4 last:border-b-0 last:mb-0 bg-white/80 dark:bg-gray-900/80 rounded-xl shadow transition hover:shadow-lg"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < review.rating
                                ? "text-yellow-400 text-base"
                                : "text-gray-300 text-base"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </span>
                      <span className="font-semibold">
                        {review.user?.name || review.user?.email || "User"}
                      </span>
                      <span className="text-xs text-gray-400">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="mb-2 mt-1">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Describtion;
