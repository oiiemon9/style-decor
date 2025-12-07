import { CheckCircle } from 'lucide-react';
import React, { use, useEffect } from 'react';
import { AuthContext } from '../../Context/FirebaseProvider';
import useAxiosSecure from '../../CustomHook/useAxiosSecure';
import { Link, useSearchParams } from 'react-router';

const PaymentSuccess = () => {
  const { loginUser } = use(AuthContext);
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const axiosInstance = useAxiosSecure();

  useEffect(() => {
    if (sessionId) {
      axiosInstance.post(`/payment-success?session_id=${sessionId}`);
    }
  }, [sessionId]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 text-center max-w-md w-full">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Payment Successful!
        </h1>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Thank you! Your payment has been completed successfully.
        </p>

        {/* Order Info */}
        <div className="bg-green-50 dark:bg-green-900/40 border border-green-300 dark:border-green-700 rounded-lg p-4 mb-6">
          <p className="text-green-800 dark:text-green-300 text-sm">
            Your transaction is confirmed. A confirmation email has been sent to
            you.
          </p>
        </div>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary/90 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
