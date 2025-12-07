import React from 'react';
import { XCircle } from 'lucide-react';

const PaymentCancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 text-center max-w-md w-full">
        {/* Cancel Icon */}
        <div className="flex justify-center mb-4">
          <XCircle className="w-20 h-20 text-red-500" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Payment Cancelled
        </h1>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Your payment was not completed. If this was a mistake, you can try
          again.
        </p>

        {/* Info Box */}
        <div className="bg-red-50 dark:bg-red-900/40 border border-red-300 dark:border-red-700 rounded-lg p-4 mb-6">
          <p className="text-red-800 dark:text-red-300 text-sm">
            No money has been deducted from your account.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="/"
            className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-5 py-2 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            Back to Home
          </a>

          <a
            href="/checkout"
            className="bg-primary text-white px-5 py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Try Again
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
